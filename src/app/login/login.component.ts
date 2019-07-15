import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Login } from './login';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  private email: Login = new Login();
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(Constants.EMAIL_REGEX)]],
      senha: ['', [Validators.required]]
    });
  }

  login() {
    const email = this.loginForm.get('email').value;
    const senha = this.loginForm.get('senha').value;
    console.log('email', email, 'senha', senha);
  }

}
