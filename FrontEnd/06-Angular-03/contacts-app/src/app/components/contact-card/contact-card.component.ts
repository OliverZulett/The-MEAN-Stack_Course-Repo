import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    // console.log('mas tocao');
    this.router.navigate(['/Contacto']);
  }

}
