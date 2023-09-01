import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  loginForm: FormGroup;
  user: User = {
    username: "",
    password: ""
  };

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    ) {
      this.loginForm = this.formBuilder.group({
        username: [''],
        password: [''],
      });
    }

  
  login() {
    this.user.username = this.loginForm.get('username')?.value;
    this.user.password = this.loginForm.get('password')?.value;

    this.loginService.createUser(this.user).subscribe(
      response => {
      console.log(response);
    });
    window.alert("You are logged in!");
  }
}
