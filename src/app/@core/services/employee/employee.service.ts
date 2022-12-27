import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEmployee } from 'src/app/@models/iEmployee';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient, private router:Router) {
  }
  getAllEmployees(): Observable<any> {
    return this.httpClient.get<any>(`${environment.baseUrl}/Employees`);
  }
  getEmployeeById(id:number): Observable<any> {
    return this.httpClient.get<any>(`${environment.baseUrl}/Employees/${id}`);
  }

  addEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.httpClient.post<IEmployee>(
      `${environment.baseUrl}/Employees`,
      employee
    );
  }
  updateEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.httpClient.patch<IEmployee>(
      `${environment.baseUrl}/Employees/${employee.id}`,
      employee
    );
  }
  deleteEmployee(id: number): Observable<IEmployee> {
    return this.httpClient.delete<IEmployee>(
      `${environment.baseUrl}/Employees/${id}`
    );
  }

}
