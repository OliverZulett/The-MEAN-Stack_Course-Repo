import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { CreateContactComponent } from './pages/create-contact/create-contact.component';


const routes: Routes = [
  { path: 'Lista', component: ContactListComponent },
  { path: 'Contacto/:id', component: ContactComponent },
  { path: 'Editar', component: EditContactComponent },
  { path: 'Crear', component: CreateContactComponent },
  { path: '', pathMatch: 'full', redirectTo: 'Lista' },
  { path: '**', pathMatch: 'full', redirectTo: 'Lista' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
