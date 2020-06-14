import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.css']
})
export class CreateButtonComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  navigate() {
    // console.log('mas tocao');
    this.router.navigate(['/Crear']);
  }

}
