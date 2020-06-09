import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-wordl',
  templateUrl: './hello-wordl.component.html',
  styleUrls: ['./hello-wordl.component.css']
})
export class HelloWordlComponent implements OnInit {

  @Input() name: string;
  // names: string[];

  constructor() {
    // this.name = 'felipe';
    // this.names = ['jose', 'juan', 'jorge', 'juana'];
  }

  ngOnInit(): void {
  }

}
