import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from '../../models/Contact.interface';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: IContact;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate([`/Contacto/${this.contact.id}`]);
  }

}
