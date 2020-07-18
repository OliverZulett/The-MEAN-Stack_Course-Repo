import { Component, OnInit } from '@angular/core';
import { RawgService } from '../../services/rawg.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  gameCards: any[];

  constructor(private rawgService: RawgService) {
    this.gameCards = [];
  }

  ngOnInit(): void {
    this.showPopularsGames();
  }

  private showPopularsGames(): void {
    this.rawgService.getPopularsGames()
      .subscribe(
        (games: any) => {
          this.gameCards = games;
          console.log(games);
        }
      );
  }

}
