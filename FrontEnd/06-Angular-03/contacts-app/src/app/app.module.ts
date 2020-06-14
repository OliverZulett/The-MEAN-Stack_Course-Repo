import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { CreateContactComponent } from './pages/create-contact/create-contact.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactListComponent,
    ContactComponent,
    ContactCardComponent,
    CreateButtonComponent,
    CreateContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
