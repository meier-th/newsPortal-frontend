import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Article } from '../model/article';
import { serverAddress } from '../../environments/environment';
import { Theme } from '../model/theme';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http : HttpClient) { }

  getLatest(page: number, number : number) {
    let url = serverAddress + 'articles/new';
    let parameters = new HttpParams().append('pages', page.toString()).append('number', number.toString());
    return this.http.get<Article[]>(url, {params: parameters});
  }

  getPopular(page: number, number: number) {
    let url = serverAddress + 'articles/popular';
    let parameters = new HttpParams().append('pages', page.toString()).append('number', number.toString());
    return this.http.get<Article[]>(url, {params: parameters});
  }

  getUpVoted(page: number, number: number) {
    let url = serverAddress + 'articles/upVoted';
    let parameters = new HttpParams().append('pages', page.toString()).append('number', number.toString());
    return this.http.get<Article[]>(url, {params: parameters});
  }

  getByTheme(theme : Theme, page: number, number: number) {
    let url = serverAddress + 'articles/'+theme.name;
    let parameters = new HttpParams().append('pages', page.toString()).append('number', number.toString());
    return this.http.get<Article[]>(url, {params: parameters});
  }

  getByAuthor(author : User, page: number, number: number) {
    let url = serverAddress + 'articles/'+author.login;
    let parameters = new HttpParams().append('pages', page.toString()).append('number', number.toString());
    return this.http.get<Article[]>(url, {params: parameters});
  }

  upvote(articleId : number) {
    let url = serverAddress + 'logged/upvote/article';
    let parameters = new HttpParams().append('articleId', articleId.toString());
    return this.http.get<string>(url, {params: parameters, withCredentials: true});
  }

  downvote(articleId: number) {
    let url = serverAddress + 'logged/downvote/article';
    let parameters = new HttpParams().append('articleId', articleId.toString());
    return this.http.get<string>(url, {params: parameters, withCredentials: true});
  }

  view(articleId: number) {
    let url = serverAddress + '/view';
    let parameters = new HttpParams().append('articleId', articleId.toString());
    return this.http.get<string>(url, {params: parameters});
  }

  disUpvote(articleId: number) {
    let url = serverAddress + 'logged/disupvote/article';
    let parameters = new HttpParams().append('articleId', articleId.toString());
    return this.http.post<string>(url, {params: parameters});
  }

  disDownvote(articleId: Number) {
    let url = serverAddress + 'logged/disdownvote/article';
    let parameters = new HttpParams().append('articleId', articleId.toString());
    return this.http.post<String>(url, {params: parameters});
  }

}