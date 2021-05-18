import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../@theme/components';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { GuestPagesComponent } from './guest-pages.component';
import { RegistrationComponent } from './student-app-form/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: GuestPagesComponent,
    children: [
      {
        path: 'students',
        loadChildren: () => import('./student-app-form/student-app-form.module')
          .then(m => m.StudentAppFormModule),
      },
      {
        path: '',
        redirectTo: 'students',
        pathMatch: 'full',
      }, {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestPagesRoutingModule { }
