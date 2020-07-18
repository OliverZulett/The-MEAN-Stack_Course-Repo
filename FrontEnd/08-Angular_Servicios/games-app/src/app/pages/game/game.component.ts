import { Component, OnInit } from '@angular/core';
import { RawgService } from '../../services/rawg.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private rawgService: RawgService) { }

  ngOnInit(): void {
    this.loadGame();
  }

  private loadGame() {
    this.rawgService.getGame()
      .subscribe();
  }

}
