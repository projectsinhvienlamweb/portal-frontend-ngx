import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../../pages/miscellaneous/not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentAppFormComponent } from './student-app-form.component';

const routes: Routes = [
  {
    path: '',
    component: StudentAppFormComponent,
    children: [
      {
        path: 'register',
        component: RegistrationComponent,
      }, {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentAppFormRoutingModule { }
