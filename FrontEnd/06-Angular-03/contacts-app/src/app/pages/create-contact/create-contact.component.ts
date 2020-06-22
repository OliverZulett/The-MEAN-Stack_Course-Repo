import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IContact } from '../../models/Contact.interface';
import { Contact } from '../../models/Contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact: IContact;
  contacts: IContact[];

  constructor( private router: Router ) {
    this.verifyLocalStorage();
  }

  ngOnInit(): void {
  }

  save( CreateUserForm: NgForm ) {

    console.log(CreateUserForm);
    // console.log(CreateUserForm.controls.firstName.status);

    if (CreateUserForm.valid) {
      const name = CreateUserForm.controls.firstName.value;
      const surname = CreateUserForm.controls.firstSurname.value;
      const phone = CreateUserForm.controls.cellPhone.value;
      const email = CreateUserForm.controls.email.value;

      console.log('voy a guardar los datos');

      this.contact = new Contact(name, phone, email, surname);
      console.log(this.contact);
      this.contacts.push(this.contact);

      this.saveToLocalStorage();
      this.router.navigate(['/Lista']);

    } else {
      console.log('no voy a guardar nada');
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
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
