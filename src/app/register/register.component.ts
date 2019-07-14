import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';

import { Constants } from '../shared/constants';
import { Register } from './register';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(Constants.EMAIL_REGEX)]],
      senha: ['', [Validators.required]],
      cep: ['', [Validators.required, Validators.pattern(Constants.SOMENTE_INTEIROS)]],
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      telefone: ['', [Validators.required, Validators.pattern(Constants.SOMENTE_INTEIROS)]],
    });
  }

  salvar() {
    const data: Register = {
      nome: this.registerForm.get('nome').value ? this.registerForm.get('nome').value : '',
      cpf: this.registerForm.get('cpf').value ? this.registerForm.get('cpf').value : '',
      email: this.registerForm.get('email').value ? this.registerForm.get('email').value : '',
      senha: this.registerForm.get('senha').value ? this.registerForm.get('senha').value : '',
      cep: this.registerForm.get('cep').value ? this.registerForm.get('cep').value : '',
      logradouro: this.registerForm.get('logradouro').value ? this.registerForm.get('logradouro').value : '',
      numero: this.registerForm.get('numero').value ? this.registerForm.get('numero').value : '',
      bairro: this.registerForm.get('bairro').value ? this.registerForm.get('bairro').value : '',
      telefone: this.registerForm.get('telefone').value ? this.registerForm.get('telefone').value : ''
    };
    this.registerService.postRegister(data).subscribe(
      response => {
        console.log('response ', response);
        if (response === 200) {
          console.log('Post OK ', data);
        } else {
          console.log('Post Fail ', data);
        }
      });
}

}
