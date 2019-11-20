import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles : Article[];

  constructor(private articleServ : ArticlesService) { }

  ngOnInit() {
    this.articleServ.getLatest(1, 10).subscribe(data => this.articles = data);
  }

}
