import { Component, Output, EventEmitter } from "@angular/core";
import { Task } from "../tarea/task.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-button",
  templateUrl: "./create-button.component.html",
  styleUrls: ["./create-button.component.css"]
})
export class CreateButtonComponent {
  
  tasks: Task[];

  constructor(private router: Router) {
    this.verifyLocalStorage();
  }

  save(title: HTMLInputElement, description: HTMLInputElement) {
    console.log("titulo:" + title.value + "descripion:" + description.value);
    this.tasks.push(new Task(title.value, description.value));
    this.saveToLocalStorage();
    title.value = '';
    description.value = '';
    this.router.navigate(["tus-tareas"]);
  }

  private saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  private verifyLocalStorage() {
    if (localStorage.getItem("tasks")) {
      this.loadFromLocalStarage();
    } else this.taskDefault();
  }

  private loadFromLocalStarage() {
    this.tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  private taskDefault() {
    this.tasks = [];
  }
}
