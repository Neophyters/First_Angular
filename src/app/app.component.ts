import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoForm: FormGroup;
  displayLogin: boolean = false;
  todoList: number[] = [];
  todoPrint: boolean = false;

  isChecked: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
      showTodoList: [false],
    });    
  }
  
  title = 'todo-app';

  openUserLogin() {
    console.log("I'm here");
    this.displayLogin = true;
    console.log("I'm done");
  }
  
  getToDoValue() {
    this.todoList.push(this.todoForm.get('todo')?.value);
    this.todoForm.get('todo')?.setValue(null);
    console.log(this.todoForm.get('showTodoList')?.value);
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
