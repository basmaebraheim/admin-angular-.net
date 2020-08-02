import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsersListResponse, UserModel } from '../models/user';


const API_URL = environment.apiUrl;
@Injectable()

export class UsersService {

  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getAll() {
    var db = this.http.get<Observable<UserModel[]>>(API_URL + 'Customers', this.httpOptions);

    return db;
  }

  delete(userId) {
    var db = this.http.delete<Observable<string>>(API_URL + 'Customers/'+userId, this.httpOptions);

    return db;
  }
  add(user) {
    var db = this.http.post<Observable<string>>(API_URL + 'Customers', user, this.httpOptions);

    return db;
  }
  update(user) {
    var db = this.http.put<Observable<string>>(API_URL + 'Customers/'+user.id, user, this.httpOptions);

    return db;
  }
   
   
}
