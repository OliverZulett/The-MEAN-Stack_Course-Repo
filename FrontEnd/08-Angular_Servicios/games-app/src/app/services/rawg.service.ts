import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawgService {

  constructor( private http: HttpClient ) { }

  public helloWordl(): void {
    console.log('hello wordl!');
  }

  public getPopularGamesIn2019() {
    this.http.get('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added')
      .subscribe(
        datosRecibidos => console.log(datosRecibidos),
        error => console.log('Hubo un error al recibir los datos'),
        () => console.log('Se ha terminado de recibir los datos')
      );
  }

  public getPopularsBackground(): Observable<any> {
    return this.makePetition()
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

  public getPopularsGames(): Observable<any> {
    return this.makePetition()
      .pipe(
        map(
          (games: any) => {
            return games.results;
          }
        )
      );
  }

  private makePetition(): Observable<any> {
    return this.http.get('https://api.rawg.io/api/games?dates=2019-01-01,2020-05-29&ordering=-added');
  }

}
