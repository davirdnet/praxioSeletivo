import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Login } from './login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenUrl = '/api/Authorization/RequestToken';
  private url = environment.baseUrl + this.tokenUrl;

  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  login(login: Login): Observable<Login> {
    return this.http.post<Login>(this.url, login)
    .pipe(
      map(user => {
        // login bem-sucedido se houver um token jwt na resposta
        if (login.email && login.senha) {
          // armazenar detalhes do email e token jwt no localStorage para manter o usuário logado entre as atualizações da página
          localStorage.setItem('currentUser', JSON.stringify(login.email));
        }
        return user;
      })
    );
  }

  logout(): void {
    // Limpa o token removendo o usuário do local store para efetuar o logout
    this.login = null;
    localStorage.removeItem('currentUser');
  }
}
