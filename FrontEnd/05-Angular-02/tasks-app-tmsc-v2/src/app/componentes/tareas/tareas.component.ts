import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../tarea/task.model';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tasks: Task[];

  constructor() {
    this.verifyLocalStorage();
  }

  ngOnInit() {
    this.verifyLocalStorage();
  }

  sort() {
    this.tasks.sort((a:Task, b:Task) => +new Date(a.date) - +new Date(b.date)); //ordena las tareas por fecha
    let pending = this.tasks.filter((task:Task) => !task.status); //separamos las tareas pendientes en un array
    let done = this.tasks.filter((task:Task) => task.status); //separamos las tareas teminadas en un array
    return pending.concat(done); // concatenamos los tareas pendientes con las terminadas
  }

  changeStatus() {
    this.saveToLocalStorage();
  }

  drop( id: string ) {
    const taskForRemove = this.tasks.findIndex( (task: Task) => task.id === id );
    this.tasks.splice( taskForRemove, 1 );
    this.saveToLocalStorage();
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