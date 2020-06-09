import { Component } from '@angular/core';
import { Game } from './game/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
  }
}
