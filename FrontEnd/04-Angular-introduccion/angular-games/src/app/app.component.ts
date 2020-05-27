import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageTitle = 'Angular Games';
  title = 'Vota por tus juegos favoritos';

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Fallout 4', 'https://fallout.bethesda.net/en/games/fallout-4', 73),
      // tslint:disable-next-line: max-line-length
      new Article('GTA V', 'https://www.rockstargames.com/V/restricted-content/agegate/form?redirect=https%3A%2F%2Fwww.rockstargames.com%2FV%2Fes&options=&locale=es_es', 14),
      new Article('Fifa 20', 'https://www.ea.com/es-es/games/fifa/fifa-20', 70),
      new Article('PES 2020', 'https://www.konami.com/wepes/2020/eu/es/ps4/', 12),
      new Article('The Witcher', 'https://thewitcher.com/en/', 43)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`Agregando el articulo de nombre: ${title.value} con link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
