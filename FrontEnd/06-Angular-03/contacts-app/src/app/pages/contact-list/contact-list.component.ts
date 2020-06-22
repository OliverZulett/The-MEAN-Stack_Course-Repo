import { Component, OnInit } from '@angular/core';
import { IContact } from '../../models/Contact.interface';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: IContact[];

  constructor() {
    this.verifyLocalStorage();
  }

  ngOnInit(): void {
  }

  private loadFromLocalStorage() {
    this.contacts = JSON.parse(localStorage.getItem('contacts'));
  }

  private verifyLocalStorage() {
    if (localStorage.getItem('contacts')) {
      this.loadFromLocalStorage();
    } else {
      this.contacts = [];
    }
  }

}
