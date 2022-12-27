import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/@core/auth/auth.service';
import { EmployeeService } from 'src/app/@core/services/employee/employee.service';
import { IUserLogin } from 'src/app/@models/iUserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  dataForTest: IUserLogin = {
    email: 'alaa@gmail.com',
    password: '123456',
  };
  insertedEmployee: IUserLogin = {} as IUserLogin;
  loginForm: FormGroup;
  show: string = 'password';
  eye: string = 'bi bi-eye-slash';

  constructor(
    private AuthService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private toaster: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  toggle() {
    if (this.show == 'text') {
      this.show = 'password';
      this.eye = 'bi bi-eye-slash';
    } else {
      this.show = 'text';
      this.eye = 'bi bi-eye';
    }
  }
  login() {
    this.insertedEmployee = this.loginForm.value;
    console.log(this.insertedEmployee);
    this.AuthService.login(this.insertedEmployee).subscribe((respose:IUserLogin[]) => {
      console.log(respose)
        this.insertedEmployee.password == respose[0].password
          ? (this.router.navigate(['employee/home']),
            localStorage.setItem('token', 'logged'),
            this.toaster.info('Logged Successfuly'))
          : this.toaster.error('Email or password is incorrect')
      }
    )
  }
  ngOnInit(): void {}
  ngOnChanges(): void {}
}
