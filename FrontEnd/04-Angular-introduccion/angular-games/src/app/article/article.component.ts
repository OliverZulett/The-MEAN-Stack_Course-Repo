import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'd-flex flex-column align-items-center mt-5 mb-5 pl-md-5 pr-md-5 pl-1 pr-1';

  // votes: number;
  // title: string;
  // link: string;

  // article: Article;
  @Input() article: Article;

  constructor() {
    // this.title = 'Angular';
    // this.link = 'http://angular.io';
    // this.votes = 10;

    // this.article = new Article('Angular', 'http://angular.io', 10);
  }

  voteUp(): boolean {
    // this.votes += 1;
    // this.article.votes += 1;
    this.article.voteUp();
    return false; // retorn falso para evitar que js propague el click
  }

  voteDown(): boolean {
    // this.votes -= 1;
    // this.article.votes -= 1;
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
