import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { USER } from './dom-data/user';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


@Injectable({
  providedIn: 'root',
})

export class StudentService {
  usersUrl = 'http://localhost:3000/users';
  // private studentUrl = 'api/students';
  constructor(protected http: HttpClient) {

  }
  // GET REQUEST
  headers = {
    'Content-Type': 'application/json',
  };

  getUsers(): Observable<USER[]> {
    return this.http.get<USER[]>(this.usersUrl);
  }
  // POST REQUEST
  postUser(data): Observable<USER> {
    return this.http.post<USER>(this.usersUrl, data, {headers: this.headers});
  }
  // PUT REQUEST
  editUser(id, data): Observable<USER> {
    return this.http.put<USER>(this.usersUrl + `/${id}`, data, {headers: this.headers});
  }
  // DELETE REQUEST
  deleteUser(id): Observable<USER> {
    return this.http.delete<USER>(this.usersUrl + `/${id}`, {headers: this.headers});
  }

}
