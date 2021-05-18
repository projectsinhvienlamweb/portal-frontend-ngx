import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAppFormRoutingModule } from './student-app-form-routing.module';
import { StudentAppFormComponent } from './student-app-form.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [StudentAppFormComponent, RegistrationComponent],
  imports: [
    CommonModule,
    StudentAppFormRoutingModule,
    FormsModule,
  ],
})
export class StudentAppFormModule { }
