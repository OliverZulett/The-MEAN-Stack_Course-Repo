import { Component, OnInit } from '@angular/core';
import { Task } from '../tarea/task.model';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {

  tasks: Task[];

  constructor() {
    this.verifyLocalStorage();
  }

  ngOnInit() {
  }

  changeStatus() {
    this.saveToLocalStorage();
  }

  drop( id: string ) {
    const taskForRemove = this.tasks.findIndex( (task: Task) => task.id === id );
    this.tasks.splice( taskForRemove, 1 );
    this.saveToLocalStorage();
  }

  filter() {
    return this.tasks.filter( (task:Task) => !task.status );
  }

  private saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private loadFromLocalStarage() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  private verifyLocalStorage() {
    if(localStorage.getItem('tasks')) {
      this.loadFromLocalStarage();
    }
    else this.taskDefault();
  }

  private taskDefault() {
    this.tasks = [
      new Task('tarea de muestra', 'esta es una tarea de muestra')
    ]
  }

}