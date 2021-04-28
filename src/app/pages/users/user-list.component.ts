import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ngx-users',
  template: `<router-outlet></router-outlet>`,
})
export class UserListComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('User Management');
  }
}
