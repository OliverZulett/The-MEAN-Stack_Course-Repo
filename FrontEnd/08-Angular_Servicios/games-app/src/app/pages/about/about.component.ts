import { Component, OnInit } from '@angular/core';
import { RawgService } from 'src/app/services/rawg.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
