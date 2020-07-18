import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IGameCard } from '../models/card-model.interface';
import { GameCard } from '../models/card-model.model';
import { environment } from 'src/environments/environment';
import { IGame } from '../models/game.interface';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class RawgService {

  constructor( private http: HttpClient ) { }

  public helloWordl(): void {
    console.log('hello wordl!');
  }

  public getRandomImage(uri: string): Observable<string> {
    return this.makePetition(uri)
      .pipe(
        map(
          (gamesRecieved: any) => {
            let games: Array<any> = gamesRecieved.results;
            games = games.map( game => game.background_image );
            return games[Math.floor(Math.random() * games.length)];
          }
        )
      );
  }

  public getCardsContent(uri: string): Observable<IGameCard[]> {
    return this.makePetition(uri)
      .pipe(
        map(
          (games: any) => {
            let gamesCards: IGameCard[] = [];
            gamesCards = (games.results).map( (game: any) => {
              const gameCard: IGameCard = new GameCard();
              gameCard.id = game.id;
              gameCard.name = game.name;
              gameCard.rating = game.rating;
              gameCard.background = game.background_image;
              return gameCard;
            });
            return gamesCards;
          }
        )
      );
  }

  public getGame(): Observable<IGame> {
    const uri = '/50738';
    return this.makePetition(uri)
      .pipe(
        map((game: any) => {
          const game: IGame = new Game();
          console.log(game);
          return game;
        })
      );
  }

  private makePetition(filter: string): Observable<any> {
    return this.http.get(`${environment.API_URL}${filter}`);
  }

}
