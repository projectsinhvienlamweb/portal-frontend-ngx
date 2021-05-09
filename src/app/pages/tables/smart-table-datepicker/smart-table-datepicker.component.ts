import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DefaultEditor, ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-smart-table-datepicker',
  templateUrl: './smart-table-datepicker.component.html',
  styleUrls: ['./smart-table-datepicker.component.scss'],
})
export class SmartTableDatepickerComponent extends DefaultEditor implements OnInit {
  @Input() placeholder: string = 'Choose a Date/Time';

  stringValue;
  inputModel: Date;

  constructor() {
    super();
  }
  ngOnInit() {
    // if (this.cell.newValue) {
    //   this.inputModel = this.cell.newValue;
    // }
  }

  onChange() {
    // if (this.inputModel) {
    //   this.cell.newValue = this.inputModel;
    // }
  }
}
@Component({
  template: `{{formatDate(value)}}`,
})
export class SmartTableDatepickerRenderComponent implements ViewCell, OnInit {
  @Input() value: any;
  @Input() rowData: any;

  constructor() { }
  formatDate(input: Date): any {
    if (input) {
      input = new Date(input);
      return input.getDate() + '/' + (input.getMonth() + 1) + '/' + input.getFullYear();
    }

  }
  ngOnInit() {
    // this.convertDate(this.value);
  }

}
