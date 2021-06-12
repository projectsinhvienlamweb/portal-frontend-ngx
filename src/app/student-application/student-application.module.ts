import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StudentApplicationRoutingModule } from './student-application-routing.module';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbRadioModule,
  NbSidebarModule,
} from '@nebular/theme';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { StudentApplicationFormComponent } from './student-application-form/student-application-form.component';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    StudentApplicationRoutingModule,
    NbCardModule,
    NbRadioModule,
    NbLayoutModule,
    ThemeModule,
    NbMenuModule,
    AmplifyUIAngularModule,
    NbSidebarModule,
    NbDatepickerModule,
  ],
  declarations: [
    StudentApplicationFormComponent,
  ],
})
export class StudentApplicationModule {
}
