import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbRadioModule,
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbAuthModule,
    NbCardModule,
    NbRadioModule,
    AmplifyUIAngularModule,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class NgxAuthModule {
}
