import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Article } from '../model/article';
import { ServerAddressService } from './server-address.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http : HttpClient, private serverAddress : ServerAddressService) { }

  getLatest(page: Number, number : Number) {
    let url = this.serverAddress.getAddress() + 'articles/new';
    let params = new  HttpParams().set('pages', page.toString()).set('number', number.toString());
    return this.http.get<Article[]>(url, {params});
  }

}
