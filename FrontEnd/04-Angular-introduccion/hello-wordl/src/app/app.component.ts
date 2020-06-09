import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-wordl';
  names: string[];

  constructor() {
    // this.hello = 'hola mundo';
    this.names = ['jose', 'juan', 'jorge', 'juana'];
  }
}
