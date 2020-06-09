import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// carga de componentes
import { TareasComponent } from './componentes/tareas/tareas.component';
import { PendientesComponent } from './componentes/pendientes/pendientes.component';
import { CompletadasComponent } from './componentes/completadas/completadas.component';

const routes: Routes = [
  { path: 'tus-tareas', component: TareasComponent },
  { path: 'pendientes', component: PendientesComponent },
  { path: 'completadas', component: CompletadasComponent },
  { path: '', pathMatch: 'full', redirectTo: 'tus-tareas' },
  { path: '**', pathMatch: 'full', redirectTo: 'tus-tareas' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
