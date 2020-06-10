import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../tarea/task.model';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {

  @Input() task: Task;
  @Output() taskUpdated: EventEmitter<Task> = new EventEmitter();
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  update( title: HTMLInputElement, description: HTMLInputElement ) {
    console.log('titulo:'+title.value+'descripion:'+description.value);
    this.task.title = title.value;
    this.task.description = description.value;
    this.taskUpdated.emit();
  }

  close() {
    this.closeModal.emit();
  }

}