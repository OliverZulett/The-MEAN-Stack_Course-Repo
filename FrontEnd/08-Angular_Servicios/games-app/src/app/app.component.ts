import { Component, OnInit } from '@angular/core';
import { RawgService } from './services/rawg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  backGroundImage: string;

  constructor( private rawgService: RawgService ) {
    this.backGroundImage = '../assets/defaultBackground.jpg';
  }

  ngOnInit(): void {
    this.showPopularsBackground();
  }

  private showPopularsBackground(): void {
    this.rawgService.getPopularsBackground()
      .subscribe(
        (backgroundGame: string) => {
          this.backGroundImage = backgroundGame;
          console.log(this.backGroundImage);
        },
        error => console.log('Hubo un error al recibir los datos'),
        () => console.log('Se ha terminado de recibir los datos')
      );
  }

}
