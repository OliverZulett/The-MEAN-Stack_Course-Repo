import { Component, OnInit } from '@angular/core';
import { IGameCard } from 'src/app/models/card-model.interface';
import { RawgService } from 'src/app/services/rawg.service';

@Component({
  selector: 'app-populars',
  templateUrl: './populars.component.html',
  styleUrls: ['./populars.component.css']
})
export class PopularsComponent implements OnInit {

  gameCards: IGameCard[];
  backGroundImage: string;
  uri = '?2010-01-01,2019-12-31&ordering=-ratings_count';

  constructor(private rawgService: RawgService) {
    this.gameCards = [];
    this.backGroundImage = '../assets/defaultBackground.jpg';
  }

  ngOnInit(): void {
    this.loadBackground();
    this.showPopulars();
  }

  private showPopulars(): void {
    this.rawgService.getCardsContent(this.uri)
      .subscribe(
        (gameCardReceived: IGameCard[]) => {
          this.gameCards = gameCardReceived;
          console.log('Releases:');
          console.log(gameCardReceived);
        }
      );
  }

  private loadBackground(): void {
    this.rawgService.getRandomImage(this.uri)
      .subscribe(
        (image: string) => {
          this.backGroundImage = image;
          console.log('backGroundImage: ' + this.backGroundImage);
        }
      );
  }

}
