import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {

  @Input() gameCard: any;

  constructor() { }

  ngOnInit(): void {
  }

}
