import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STUDENT } from './dom-data/user';

@Injectable({
  providedIn: 'root'
})
export abstract class DatabaseService {
  studentUrl = 'api/students'
  abstract getStudents(): Observable<STUDENT[]>;

  constructor() { }
}
