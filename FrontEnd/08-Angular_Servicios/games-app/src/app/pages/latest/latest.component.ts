import { Component, OnInit } from '@angular/core';
import { RawgService } from '../../services/rawg.service';
import { IGameCard } from '../../models/card-model.interface';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  gameCards: IGameCard[];
  backGroundImage: string;
  uri = '?dates=2020-01-01,2020-06-25&ordering=-ratings_count';

  constructor(private rawgService: RawgService) {
    this.gameCards = [];
    this.backGroundImage = '../assets/defaultBackground.jpg';
  }

  ngOnInit(): void {
    this.loadBackground();
    this.showReleases();
  }

  private showReleases(): void {
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
