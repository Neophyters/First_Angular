import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoForm: FormGroup;
  
  displayLogin: boolean = false;
  todoList: number[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
      showTodoList: [false],
      listDate: [''],
    });    
  }
 
  openUserLogin() {
    this.displayLogin = !this.displayLogin;
  }
  
  getToDoValue() {
    if (this.todoForm.get('todo')?.value) {
      this.todoList.push(this.todoForm.get('todo')?.value);
      this.todoForm.get('todo')?.setValue(null);
    }
  }

  resetToDoList() {
    this.todoList = [];
  }

  addItem(event: any) {
    event.preventDefault();
    this.getToDoValue();
  }

}
