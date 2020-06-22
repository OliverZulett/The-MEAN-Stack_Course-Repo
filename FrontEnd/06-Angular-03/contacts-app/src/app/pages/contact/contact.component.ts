import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IContact } from 'src/app/models/Contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  id: Observable<string>;
  contacts: IContact[];

  contact: IContact;

  constructor( private router: ActivatedRoute ) {
    this.setId();
    this.loadFromLocalStorage();
    this.loadContact();
  }

  ngOnInit(): void {
  }

  private setId(): void {
    this.id = this.router.params.pipe(map( param => param.id));
  }

  private loadContact() {
    this.id.subscribe( id => {
      this.contact = this.contacts.find( contact => contact.id === id);
      console.log(this.contact);
    });
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
