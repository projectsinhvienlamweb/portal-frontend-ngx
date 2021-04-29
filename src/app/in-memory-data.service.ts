import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { STUDENTS } from './dom-data/mock-user';
import { STUDENT } from './dom-data/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = STUDENTS;
    return {students: students};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(students: STUDENT[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 11;
  }
}
