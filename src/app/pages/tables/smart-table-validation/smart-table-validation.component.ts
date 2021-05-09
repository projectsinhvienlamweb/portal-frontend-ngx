import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { EventEmitter } from 'events';
import { DefaultEditor } from 'ng2-smart-table';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'ngx-smart-table-validation',
  templateUrl: './smart-table-validation.component.html',
  styleUrls: ['./smart-table-validation.component.scss'],
})
export class SmartTableValidationComponent extends DefaultEditor implements OnInit {
  @Input() valueInput: string;
  @Input() placeHolder: String;
  @Input() fieldTitle: any;
  constructor(public validService: ValidationService) {
    super();
  }

  ngOnInit(): void {
    this.fieldTitle = this.cell['column'].title;
    this.cell.newValue = this.valueInput;
  }



}
