import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { STUDENTS } from '../../../dom-data/mock-user';
import { STUDENT } from '../../../dom-data/user';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      dob: {
        title: 'Date of Birth',
        type: 'string',
        valuePrepareFunction: date => {
          date = new Date(date);
          return date.getDate() + '-' + (date.getMonth() + 1) + '-' +  date.getFullYear();
        },
      },
      pNumber: {
        title: 'Phone Number',
        type: 'number',
      },
      role: {
        title: 'ROLE',
        type: 'string',
      },
    },
  };

  students = STUDENTS;
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableData) {
    // const data = this.service.getData();
    this.source.load(this.students);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
