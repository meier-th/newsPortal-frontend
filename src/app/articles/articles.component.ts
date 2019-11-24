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
  currentPage: Number;
  pageSize : Number;
  sortBy : SortCriteria;

  constructor(private articleServ : ArticlesService) { }

  ngOnInit() {
    this.sortBy = SortCriteria.TIME;
    this.currentPage = 0;
    this.pageSize = 10;
    this.loadArticles();
  }

  changePageSize(newSize : Number) {
    this.pageSize = newSize;
  }

  changeCurrentPage(page: Number) {
    this.currentPage = page;
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
    observableResponse.subscribe(data => this.articles = data);
  }

}
