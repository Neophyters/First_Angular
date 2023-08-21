import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay, addDays } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoForm: FormGroup;
  
  todoList: number[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
      showTodoList: [false],
    });    
  }
  
  

  getToDoValue() {
    this.todoList.push(this.todoForm.get('todo')?.value);
    this.todoForm.get('todo')?.setValue(null);
    console.log(this.todoForm.get('listCalendar')?.value);
  }

  resetToDoList() {
    this.todoList = [];
  }

}
