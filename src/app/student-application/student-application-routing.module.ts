import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentApplicationFormComponent } from './student-application-form/student-application-form.component';


export const routes: Routes = [
  {
    path: '',
    component: StudentApplicationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentApplicationRoutingModule {
}
