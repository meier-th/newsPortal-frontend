import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticlesService } from '../services/articles.service';
import { Observable } from 'rxjs';
import {SortCriteria } from '../model/sort-criteria';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {

  articles : Article[];
  currentPage: number;
  pageSize : number;
  sortBy : SortCriteria;
  sortingCriterias: string[] = ['date', 'upvotes', 'views'];

  constructor(private articleServ : ArticlesService) { }

  ngOnInit() {
    this.sortBy = SortCriteria.TIME;
    this.currentPage = 0;
    this.pageSize = 1;
    this.articles = [];
    this.loadArticles();
  }

  loadArticles() {
    let observableResponse : Observable<Article[]>;
    switch (this.sortBy) {
      case SortCriteria.TIME :
        observableResponse = this.articleServ.getLatest(this.currentPage, this.pageSize);
        break;
      case SortCriteria.UPVOTES :
        observableResponse = this.articleServ.getUpVoted(this.currentPage, this.pageSize);
        break;
      case SortCriteria.VIEWS :
        observableResponse = this.articleServ.getPopular(this.currentPage, this.pageSize);
    }
    observableResponse.subscribe(data => {
      let oldLength = this.articles.length;
      this.articles = this.articles.concat(data);
      if (document.getElementById("articles-wrapper").offsetHeight < window.innerHeight && oldLength != this.articles.length) {
        this.currentPage++;
        this.loadArticles();
      }
    });
  }

  onScroll() {
    this.currentPage++;
    this.loadArticles();
  }

  upvote(article : Article) {
    this.articleServ.upvote(article.id).subscribe(result => {
      article.upVotes++;
    });
  }

  downvote(article: Article) {
    this.articleServ.downvote(article.id).subscribe(result => {
      article.downVotes++;
    });
  }

}
