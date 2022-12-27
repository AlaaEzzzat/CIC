import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/@core/services/employee/employee.service';
import { IEmployee } from 'src/app/@models/iEmployee';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.scss']
})
export class AllEmployeeComponent implements OnInit {
  employees : IEmployee[] =[] as IEmployee[];
  constructor(private EmployeeService:EmployeeService) { }

  ngOnInit(): void {
this.allEmployee();
  }
  allEmployee = ()=>{
    this.EmployeeService.getAllEmployees().subscribe((data:IEmployee[])=>{
      this.employees = data;
      console.log(data)
     })
  }
}
