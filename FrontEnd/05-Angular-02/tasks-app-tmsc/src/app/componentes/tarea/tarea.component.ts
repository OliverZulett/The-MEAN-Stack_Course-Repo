import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() task: Task;
  @Output() changeStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() taskForDrop: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  done() {
    this.task.status = true;
    this.changeStatus.emit();
  }

  undone() {
    this.task.status = false;
    this.changeStatus.emit();
  }

  drop() {
    this.taskForDrop.emit(this.task.id);
  }

}