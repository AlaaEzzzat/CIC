import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/@core/services/employee/employee.service';
import { IEmployee } from 'src/app/@models/iEmployee';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: IEmployee = {} as IEmployee;
  currEmployeeId: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
    private toaster:ToastrService,
    private router:Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.currEmployeeId = paramMap.get('id')
        ? Number(paramMap.get('id'))
        : 0;} );
  }

  ngOnInit(): void {
     if(this.currEmployeeId != 0){
      this.employeeService.getEmployeeById(this.currEmployeeId).subscribe(
        (data: any) => {
          this.toaster.info('Founded!');
          this.employee = data;
        },
      );
     }else{
       this.toaster.error('Not Exist!');
       this.router.navigate(['/employee/home']);
     }
    }
  
}
