import { Component, OnInit } from '@angular/core';
import { RawgService } from 'src/app/services/rawg.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  backGroundImage: string;
  uri = '?2010-01-01,2019-12-31&ordering=-ratings_count';

  constructor( private rawgService: RawgService ) {
    this.backGroundImage = '../assets/defaultBackground.jpg';
  }

  ngOnInit(): void {
    this.showPopularsBackground();
  }

  private showPopularsBackground(): void {
    this.rawgService.getRandomImage(this.uri)
      .subscribe(
        (image: string) => {
          this.backGroundImage = image;
          console.log('backGroundImage: ' + this.backGroundImage);
        }
      );
  }

}
