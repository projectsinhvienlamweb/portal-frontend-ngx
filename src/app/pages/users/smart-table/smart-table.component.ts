import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AdminQueriesService } from '../../../services/admin-queries.service';
import { DateCellComponent } from './date-cell.component';

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
      Username: {
        title: 'Username',
        type: 'string',
      },
      phone_number: {
        title: 'Last Name',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      group: {
        title: 'Group',
        type: 'string',
      },
      UserCreateDate: {
        title: 'Registration Date',
        type: 'custom',
        renderComponent: DateCellComponent,
      },
      UserStatus: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: AdminQueriesService) {
    this.service.getUsers().then(users => {
      this.source.load(users);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
