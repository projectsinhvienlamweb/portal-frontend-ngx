import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { ServerSourceConf } from 'ng2-smart-table/lib/lib/data-source/server/server-source.conf';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SmartTableData } from '../../../@core/data/smart-table';
import { USER } from '../../../dom-data/user';
import { StudentService } from '../../../student.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnDestroy {
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
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
        addable: false,
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      dob: {
        title: 'DOB (DD/MM/YYYY)',
        type: 'string',
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
      role: {
        title: 'ROLE',
        type: String,
      },
    },
    pager: {
      perPage: 4,
    },
  };
  valueSearch: string = '';
  source: LocalDataSource = new LocalDataSource;
  cache: USER[];

  constructor(private service: StudentService, private http: HttpClient) {
    // const data = this.service.getData();
    this.service.getUsers().pipe(takeUntil(this.destroy)).subscribe((res) => {
      this.source.load(res);
      this.cache = res;
    }, err => {
      throw new Error;
    });
  }
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);
  onAdd(data): void {
    if (!data.newData.name || !data.newData.email || !data.newData.dob || !data.newData.role) {
      alert('please input your information');
      data.confirm.reject();
    } else {
      this.service.postUser(data.newData).pipe(takeUntil(this.destroy)).subscribe(res => {
        data.confirm.resolve(res);
      }, err => {
        data.confirm.reject();
        alert('Something went wrong !!!');
        throw new Error;
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
    this.service.editUser(data.newData.id, data.newData).subscribe(res => {
      data.confirm.resolve(res);
    }, err => {
      alert('Something went wrong');
      data.confirm.reject();
      throw new Error;
    });
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.deleteUser(event.data.id).subscribe(res => event.confirm.resolve(res));
    } else {
      alert('Something went wrong !!!');
      event.confirm.reject();
      throw new Error;
    }
  }

  ngOnDestroy() {
    this.destroy.next(null);
  }
}
