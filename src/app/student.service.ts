import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { USER } from './dom-data/user';

const cudOptions = { headers: new HttpHeaders({
   'Content-Type': 'application/json',
   'Access-Control-Allow-Headers': 'Authorization, Origin, X-Requested-With, Content-Type, Accept',
   'Access-Control-Allow-Methods': 'PATCH, POST, GET, PUT, DELETE, OPTIONS',
  }) };


@Injectable({
  providedIn: 'root',
})

export class StudentService {
  usersUrl = 'http://localhost:80/api/users';
  // private studentUrl = 'api/students';
  constructor(protected http: HttpClient) {

  }

  getUsers(): Observable<USER[]> {
    return this.http.get<USER[]>(this.usersUrl);
  }
  searchUsers(dataSearch): Observable<USER[]> {
    return this.http.get<USER[]>(this.usersUrl + `/${dataSearch}`);
  }
  // POST REQUEST
  postUser(data): Observable<USER> {
    return this.http.post<USER>(this.usersUrl, data, cudOptions);
  }
  // PUT REQUEST
  editUser(data): Observable<USER> {
    return this.http.put<USER>(this.usersUrl, data, cudOptions);
  }
  // DELETE REQUEST
  deleteUser(id): Observable<USER> {
    return this.http.delete<USER>(this.usersUrl + `/${id}`);
  }

}
