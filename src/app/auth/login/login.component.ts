import { Component, NgZone, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private ngZone: NgZone, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Sign In');
    onAuthUIStateChange((authState, authData) => {
      this.ngZone.run(() => {
        if (authState === 'signedin' && authData) {
          this.router.navigate(['pages/users']);
        }
      });
    });
  }

}
