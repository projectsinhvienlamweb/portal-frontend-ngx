import { NgModule } from '@angular/core';

import { GuestPagesRoutingModule } from './guest-pages-routing.module';
import { StudentAppFormComponent } from './student-app-form/student-app-form.component';
import { GuestPagesComponent } from './guest-pages.component';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';


@NgModule({
  declarations: [GuestPagesComponent],
  imports: [
    GuestPagesRoutingModule,
    NbThemeModule,
    NbLayoutModule,
  ],
})
export class GuestPagesModule { }
