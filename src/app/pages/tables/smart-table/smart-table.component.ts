import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, Output, EventEmitter, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NbDatepickerComponent, NbDateTimePickerComponent } from '@nebular/theme';
// import { EventEmitter } from 'events';
import { Cell, LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { Row } from 'ng2-smart-table/lib/lib/data-set/row';
import { ServerSourceConf } from 'ng2-smart-table/lib/lib/data-source/server/server-source.conf';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SmartTableData } from '../../../@core/data/smart-table';
import { USER } from '../../../dom-data/user';
import { StudentService } from '../../../student.service';
import { DatepickerComponent } from '../../forms/datepicker/datepicker.component';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../smart-table-datepicker/smart-table-datepicker.component';
import { SmartTableValidationComponent } from '../smart-table-validation/smart-table-validation.component';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
  providers: [ValidationService],
})
export class SmartTableComponent implements OnDestroy, OnChanges {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      _id: {
        title: 'ID',
        type: 'string',
        editable: false,
        addable: false,
      },
      name: {
        title: 'Name',
        type: 'string',

      },
      dob: {
        title: 'DOB (DD/MM/YYYY)',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      avatar: {
        title: 'Avatar',
        type: 'html',
        filter: false,
        valuePrepareFunction: (img) => {
          return `
            <img class="profile" src=${img} alt=${img}/>
          `;
        },
      },
      phone_number: {
        title: 'Phone Number',
        type: 'string',
      },
      role: {
        title: 'ROLE',
        type: 'string',
      },
    },
  };
  isLoading = true;
  valueSearch: string = '';
  source: LocalDataSource = new LocalDataSource;
  test: NgModel;
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  constructor(private service: StudentService, private http: HttpClient, public validService: ValidationService) {
    // const data = this.service.getData();
    this.service.getUsers().pipe(takeUntil(this.destroy)).subscribe((res) => {
      this.isLoading = !this.isLoading;
      this.source.load(res);
    }, err => {
      throw new Error;
    });
  }

  onSearch(dataSearch): void {
    this.isLoading = !this.isLoading;
    this.service.searchUsers(dataSearch).subscribe(res => {
      const test = new Promise((resolve, reject) => {
        resolve(res);
      });
      test.then((ac: USER[]) => {
        this.isLoading = !this.isLoading;
        this.source.load(ac);
      });
    }, err => {
      if (err) {
        alert('something went wrong!!!');
      }
    });
  }
  onAdd(data): void {
    if (!data.newData.email || !data.newData.phone_number) {
      alert('please input your information');
      data.confirm.reject();
    } else {
      this.service.postUser(data.newData).pipe(takeUntil(this.destroy)).subscribe(res => {
        data.confirm.resolve(res);
      }, err => {
        data.confirm.reject();
        alert('Something went wrong !!!');
      });
    }
    // this.service.postUser(data.newData).subscribe(res => {
    //   data.confirm.resolve();
    // }, err => {
    //   data.confirm.reject();
    //   alert('Something went wrong !!!');
    //   throw new Error;
    // });
  }
  onEdit(data): void {
    this.service.editUser(data.newData).pipe(takeUntil(this.destroy)).subscribe(res => {
      data.confirm.resolve(res);
    }, err => {
      alert('Something went wrong');
      data.confirm.reject();
      throw new Error;
    });
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.deleteUser(event.data['_id']).subscribe(res => { event.confirm.resolve(res); });
    } else {
      event.confirm.reject();
    }
  }

  ngOnDestroy() {
    this.destroy.next(null);
  }

  ngOnChanges() {
  }
}


// export class CustomComponent{
//   rowData: any;

//    @Output() save: EventEmitter<any> = new EventEmitter();

//     onModelChange(table) {
//         this.rowData.total = this.rowData.amount * this.rowData.price;
//         this.save.emit(this.rowData);
//     }
// }
