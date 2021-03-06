import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// componentes propios
import { NavbarComponent } from './navbar/navbar.component';
import { PendientesComponent } from './componentes/pendientes/pendientes.component';
import { CompletadasComponent } from './componentes/completadas/completadas.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { TareaComponent } from './componentes/tarea/tarea.component';

// enrutador
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, PendientesComponent, CompletadasComponent, TareaComponent, TareasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
