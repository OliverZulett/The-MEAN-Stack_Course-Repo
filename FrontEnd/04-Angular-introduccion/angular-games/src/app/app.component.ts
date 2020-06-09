import { Component } from '@angular/core';
<<<<<<< HEAD
import { Game } from './game/game.model';
=======
import { Article } from './article/article.model';
>>>>>>> a19e408a8db179ef98ab17e743f95126e233ce76

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

<<<<<<< HEAD
  pageTitle: string;
  title = 'Vota por tus juegos favoritos';
  games: Game[];

  constructor() {
    this.pageTitle = 'Angular Games';

    this.games = [
      new Game('Fallout 4', 'https://fallout.bethesda.net/en/games/fallout-4', 73),
      // tslint:disable-next-line: max-line-length
      new Game('GTA V', 'https://www.rockstargames.com/V/restricted-content/agegate/form?redirect=https%3A%2F%2Fwww.rockstargames.com%2FV%2Fes&options=&locale=es_es', 14),
      new Game('Fifa 20', 'https://www.ea.com/es-es/games/fifa/fifa-20', 70),
      new Game('PES 2020', 'https://www.konami.com/wepes/2020/eu/es/ps4/', 12),
      new Game('The Witcher', 'https://thewitcher.com/en/', 43)
    ]
  }

  addGame( newtitle: HTMLInputElement, newlink: HTMLInputElement) {
    console.log('voy a crear un nuevo juego llamado: ' + newtitle.value + ' y su enlace es: ' + newlink.value);
    this.games.push(new Game(newtitle.value, newlink.value));
    return false;
  }

  sortedGames(): Game[] {
    return this.games.sort((a: Game, b: Game ) => b.votes - a.votes);
=======
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
>>>>>>> a19e408a8db179ef98ab17e743f95126e233ce76
  }
}
