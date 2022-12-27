import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

const routes: Routes=[
  {
    path: '',
    redirectTo: '/account/login',
    pathMatch: 'full',
  },
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
  CommonModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes)
  ],
  exports:[
    LoginComponent
  ]
})
export class AccountModule { }
