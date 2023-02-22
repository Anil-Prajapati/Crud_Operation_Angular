import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employees } from '../services/employees';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit{

employee:Employees=new Employees;
id:any

constructor(private employeeServices:EmployeeService, private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {

    this.employee=new Employees();
    this.id=this.route.snapshot.params['id']

  this.employeeServices.getEmployees(this.id).subscribe((data)=>{
    console.log(data);
    this.employee=data;
  },(error)=>{
    console.log(error);
  })
 
  }
  list(){
    this.router.navigate(['/employees'])
  }

}
