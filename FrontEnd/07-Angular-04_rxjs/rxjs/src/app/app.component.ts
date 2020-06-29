import { Component } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient } from '@angular/common/http';
import { pipe, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countryData: any;
  countriesNames: Array<any> = [];

  constructor(private http: HttpClient) {
    this.buildObservable();
    this.buildObserver();
    this.countryPetition();
    this.getBolivia();
    this.buildCountryNames();
  }

  private buildObservable() {

    function sequenceSubscriber(observer: { next: (arg0: number) => void; complete: () => void; }) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
      return { unsubscribe() { } };
    }

    // Create a new Observable that will deliver the above sequence
    const sequence = new Observable(sequenceSubscriber);

    // execute the Observable and print the result of each notification
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });
  }

  private buildObserver() {
    // Crear un observable de tres vvalores
    const myObservable = of(1, 2, 3);

    //  Crear un observador
    const myObserver = {
      next: (x: string) => console.log('El Observer recibe el siguiente parametro: ' + x),
      error: (err: string) => console.error('El Observer tiene un error: ' + err),
      complete: () => console.log('El Observer recibio una notificacion de finalizacion'),
    };

    // Subscripcion al observador
    myObservable.subscribe(myObserver); // => EL OBSERVABLE SOLO EMPIEZA A PUBLICAR CUANDO UN OBSERVADOR SE SUBSCRIBE A EL

    // Subscripcion al observador con callbacks
    myObservable.subscribe( // => EL METODO SUBSCRIBE ACEPTA CALLBACKS PARA MANEJAR EL NEXT, ERROR, COMPLETE
      x => console.log('El Observer recibe el siguiente parametro: ' + x),
      err => console.error('El Observer tiene un error: ' + err),
      () => console.log('El Observer recibio una notificacion de finalizacion'),
    );

  }

  private countryPetition() {
    this.http.get('https://restcountries.eu/rest/v2/name/Bo')
      .subscribe(
        x => console.log(x),
        err => console.error('Hay un error al realizar la peticion: ' + err),
        () => console.log('Termino la peticion'),
      );
  }

  private filterPetition(countryName: string): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/name/B')
      .pipe(
        map(
          (countryArray: Array<any>) => countryArray.filter(country => country.name.includes(countryName))
        )
      );
  }

  private getBolivia(): void {
    this.filterPetition('Bolivia')
      .subscribe(
        bolivia => {
          this.countryData = bolivia[0];
          console.log(bolivia);
        },
        err => console.error('Hay un error al realizar la peticion: ' + err),
        () => console.log('Termino la peticion'),
      );
  }

  private buildCountryNames(): void {
    this.http.get('https://restcountries.eu/rest/v2/name/Bo')
      .subscribe(
        (countryArray: Array<any>) => countryArray.forEach( country => {
          const name = country.name;
          const flag = country.flag;
          this.countriesNames.push({name, flag});
        }),
        err => console.error('Hay un error al realizar la peticion: ' + err),
        () => console.log('Termino la peticion')
      );
  }

}
