import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DatabaseService } from './database.service';
import { STUDENTS } from './dom-data/mock-user';
import { STUDENT } from './dom-data/user';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends DatabaseService {
  // private studentUrl = 'api/students';
  

  constructor(private http: HttpClient) { 
    super();
  }
  
  getStudents(): Observable<STUDENT[]>{
    return this.http.get<STUDENT[]>(this.studentUrl);
  }
  
}
