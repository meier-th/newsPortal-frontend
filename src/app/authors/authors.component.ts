import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  length : Number;

  constructor() { 
    this.length = 55;
  }

  ngOnInit() {
  }

}
