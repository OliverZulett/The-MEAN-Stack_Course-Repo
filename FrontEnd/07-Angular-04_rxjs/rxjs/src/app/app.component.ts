import { Component } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bolivia: any = [];

  constructor( private http: HttpClient ) {

    // this.buildObservable();
    // this.buildObserver();

    this.getAllCountries();

    // this.searchContriesByName('Bo');

    // this.searchCountrieByLetters('bo', 'Bolivia');

    this.searchBolivia();

  }

  private buildObserver(): void {
    const myObservable = of( 1, 2, 3 );

    const myObserver: Observer<any> = {
      next: (datoRecibido: string) => console.log(`El observador ha recibido el dato: ${datoRecibido}`),
      error: (error: string) => console.log(`El observador ha recibido un error: ${error}`),
      complete: () => console.log(`El observador ha recibido la notificacion de finalizacion`)
    };

    // myObservable.subscribe(myObserver);

    myObservable.subscribe(
      datoRecibido => console.log(`El observador ha recibido el dato: ${datoRecibido}`),
      (error: string) => console.log(`El observador ha recibido un error: ${error}`),
      () => console.log(`El observador ha recibido la notificacion de finalizacion`)
    );
  }

  private buildObservable() {
    function secuencia(
      observer: {
        next: (arg0: number) => void,
        complete: () => void;
      }
    ) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
      return { unsubscribe() { }};
    }

    const dataSequence = new Observable(secuencia);

    dataSequence
      .subscribe({
        next(num) { console.log(num); },
        complete() { console.log('Secuencia finalizada'); }
      });
  }

  private getAllCountries() {
    this.http.get('https://restcountries.eu/rest/v2/all')
      .subscribe(
        datosRecibidos => console.log(datosRecibidos),
        error => console.log('Hubo un error al recibir los datos'),
        () => console.log('Se ha terminado de recibir los datos')
      );
  }

  private searchContriesByName( param: string ) {
    this.http.get(`https://restcountries.eu/rest/v2/name/${param}`)
      .subscribe(
        datosRecibidos => console.log(datosRecibidos),
        error => console.log('Hubo un error al recibir los datos: ' + error),
        () => console.log('Se ha terminado de buscar los datos')
      );
  }

  private searchCountrieByLetters( letters: string, countryName: string ): Observable<any> {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${letters}`)
      .pipe(
        map(
          (countryArray: Array<any>) => countryArray.filter( country => country.name.includes(countryName))
        )
      );
  }

  private searchBolivia() {
    this.searchCountrieByLetters('bo', 'Bolivia')
      .subscribe(
        bolivia => {
           console.log(bolivia);
           this.bolivia = bolivia[0];
        },
        error => console.log('Hubo un error al recibir los datos: ' + error),
        () => console.log('Se ha terminado de buscar los datos')
      );
  }

}
