;
import { AccountModule } from './account/account.module';
import { SharedModule } from './@shared/shared.module'
import { NgModule } from '@angular/core';
import { EmployeeModule } from './employee/employee.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './@core/@core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './@core/auth/interceptors/http-interceptor.interceptor';
import { ApiService } from 'src/app/@core/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AllEmployeeComponent } from './employee/all-employee/all-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllEmployeeComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    SharedModule,
    AccountModule,
    EmployeeModule,
    CoreModule,
    BrowserModule,
    RouterModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorInterceptor,
    multi: true
  }, ApiService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
