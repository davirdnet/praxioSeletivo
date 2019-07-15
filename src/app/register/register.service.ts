import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  postRegister(data: Register) {
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    console.log('data ', data);
    return this.http.post(this.apiUrl + '/api/Usuario', data, options);
  }
}
