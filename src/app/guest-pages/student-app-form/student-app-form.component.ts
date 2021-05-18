import { Component, OnInit } from '@angular/core';
import { NbSpinnerService } from '@nebular/theme';

@Component({
  selector: 'ngx-student-app-form',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./student-app-form.component.scss'],
})
export class StudentAppFormComponent implements OnInit {

  constructor(private spinnerService: NbSpinnerService) { }

  ngOnInit(): void {
  }

}
