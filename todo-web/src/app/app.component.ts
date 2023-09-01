import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginService } from './service/login.service';

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

  constructor(
    private loginService: LoginService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
      showTodoList: [false],
      listDate: [''],
    });    
  }

 
  openUserLogin() {
    this.dialog.open(UserLoginComponent);
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
