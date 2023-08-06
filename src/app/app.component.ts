import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoForm: FormGroup;

  todoList: number[] = [];
  todoPrint: boolean = false;

  isChecked: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
    });    
  }
  
  title = 'todo-app';

  getToDoValue() {
    this.todoList.push(this.todoForm.get('todo')?.value);
    this.todoForm.get('todo')?.setValue(null);
  }

  printToDoValue() {
    this.todoPrint = !this.todoPrint;
  } 

  resetToDoList() {
    this.todoList = [];
  }

  checkBoxClicked() {
    if (this.isChecked == true) {
      this.isChecked = false;
      document.getElementById("todolist")!.style.display = "none";
    }
    else {
      this.isChecked = true;
      document.getElementById("todolist")!.style.display = "block";
    }
  }
}
