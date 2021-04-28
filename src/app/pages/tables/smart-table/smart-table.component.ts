import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../../@core/data/smart-table";
import { STUDENTS } from "../../../dom-data/mock-user";
import { STUDENT } from "../../../dom-data/user";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./smart-table.component.html",
  styleUrls: ["./smart-table.component.scss"],
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
        title: "ID",
        type: "number",
        filter: false,
        editable: false,
        addedable: false,
      },
      name: {
        title: "Name",
        type: "string",
        filter: false,
      },
      dob: {
        title: "Date of Birth (DD/MM/YYYY)",
        type: "string",
        valuePrepareFunction: (date) => {
          date = new Date(
            `${date.split("-")[1]}-${date.split("-")[0]}-${date.split("-")[2]}`
          );

          return (
            date.getDate() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getFullYear()
          );
        },
        filter: false,
      },
      pNumber: {
        title: "Phone Number",
        type: "number",
        filter: false,
      },
      role: {
        title: "ROLE",
        type: "string",
        filter: false,
      },
    },
  };

  students = STUDENTS;
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableData) {
    // const data = this.service.getData();
    this.source.load(this.students);
  }

  onSearch(query: string = ""): void {
    if (query.length === 0) {
      this.source.setFilter([]);
    } else {
      this.source.setFilter(
        [
          {
            field: "id",
            search: query,
          },
          {
            field: "name",
            search: query,
          },
          {
            field: "dob",
            search: query,
          },
          {
            field: "address",
            search: query,
          },
          {
            field: "pNumber",
            search: query,
          },
          {
            field: "role",
            search: query,
          },
        ],
        false
      );
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
