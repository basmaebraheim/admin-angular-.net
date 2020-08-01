import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel, LoginResponse, UserLoginData } from '../models/login';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const API_URL = environment.apiUrl;
@Injectable()

export class AuthService {

  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  login(LoginModel) {
    var db = this.http.post<LoginResponse>(API_URL + 'Auth/Login', LoginModel, this.httpOptions).pipe(
      map(data => this.saveUserDetails(data.response)))

    return db;
  }

  saveUserDetails(userLoginData: UserLoginData) {
    sessionStorage.setItem('UserToken', userLoginData.access_token);
    sessionStorage.setItem('currentUser', userLoginData.username);
    return userLoginData;
  }
  logout() {
    sessionStorage.removeItem('UserToken');
    sessionStorage.removeItem('currentUser');
  }
}
