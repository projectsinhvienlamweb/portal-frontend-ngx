import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-student-application-form',
  templateUrl: './student-application-form.component.html',
  styleUrls: ['./student-application-form.component.scss'],
})
export class StudentApplicationFormComponent implements OnInit {

  constructor() { }

  programs = [
    'Cử Nhân',
    'Năm Chuẩn Bị (Tín Lý)',
    'Năm Chuẩn Bị (Kinh Thánh)',
    'Thạc sĩ Thần Học (Tín Lý)',
    'Thạc Sĩ Thần Học (Kinh Thánh)',
    'Thạc Sĩ Mục Vụ',
  ];

  ngOnInit(): void {
  }

}
