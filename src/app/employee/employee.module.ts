import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { SharedModule } from '../@shared/shared.module';
import { AuthorizedGuard } from '../@core/auth/guards/authorized.guard';
const routes: Routes=[
    {
        path: '',
        component: EmployeeLayoutComponent,
        children: [
            {path: 'home', component: AllEmployeeComponent,  canActivate: [AuthorizedGuard]},
            {path: 'add', component: AddEmployeeComponent, canActivate: [AuthorizedGuard]},
            {path: 'add/:id', component: AddEmployeeComponent, canActivate: [AuthorizedGuard]},
            {path: 'details/:id', component: EmployeeDetailsComponent , canActivate: [AuthorizedGuard]}]
    }
]

@NgModule({
  declarations: [
    EmployeeLayoutComponent,
  ],
  imports: [
  CommonModule,
  SharedModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes)
  ],
  exports:[

  ]
})
export class EmployeeModule { }
