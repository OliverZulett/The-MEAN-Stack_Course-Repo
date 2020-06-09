import { Component, OnInit } from '@angular/core';
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
  }

  save( title: HTMLInputElement, description: HTMLInputElement ) {
    console.log('titulo:'+title.value+'descripion:'+description.value);
    this.tasks.push(new Task(title.value, description.value));
    this.saveToLocalStorage();
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