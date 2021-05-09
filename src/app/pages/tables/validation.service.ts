import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  isEvent: NgModel;
  getField: string;

  constructor() { }


  getModel(e: NgModel, field: string) {
    this.isEvent = e;
    this.getField = field;
  }
}
