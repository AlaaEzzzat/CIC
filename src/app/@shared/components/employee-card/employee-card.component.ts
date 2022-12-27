import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/@core/services/employee/employee.service';
import { IEmployee } from 'src/app/@models/iEmployee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
@Input() employee: IEmployee = {} as IEmployee;
@Input() page:string  = "";
@Input()
allEmployee!: () => void;
  constructor(private router:Router,private toaster:ToastrService, private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }
  goToUpdate(id:number){
    this.router.navigate(['/employee/add',id]); 
    
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe({
      next: (res) => {
        this.toaster.info("Deleted Successfully");
        this.allEmployee();
        this.router.navigate(['/employee/home']); 
        
      },
        error: (err) => {
        this.toaster.error(err);

        }
    })
  }
  goToDetails(id:number){
    this.router.navigate(['/employee/details',id]); 
  }
  
}
