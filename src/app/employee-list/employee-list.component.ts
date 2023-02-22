import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { EmployeeService } from '../services/employee.service';
import { Employees } from '../services/employees';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  emp:any
  employees!:Observable<Employees[]>

  constructor(private employeeService:EmployeeService, private router:Router){ }
  ngOnInit(): void {

    this.reloadEmployee();
  }

  // this is the getting all  the method 

  reloadEmployee(){
    return this.employees=this.employeeService.getAll();
  }

  // this is the delete method 

  deleteEmployee(id:number){
   this.employeeService.deleteEmployee(id).subscribe((res)=>{
    console.log(res);
    this.reloadEmployee();
   },(error)=>{
    console.log(error)
   })
  }

  deleteMethod(emp:any){

    Swal.fire("Congratualation","Your Data is Delelted Successfully !","success");
  }

  //this is the navigated by the update methods follows
  updateEmployee(id:number){
    return this.router.navigate(['update',id]);
  }

  //this is the viewing the data into the employee details
  viewDetails(id:number){
    return this.router.navigate(['create',id]);
  }

  ViewSwal(emp:any){
    Swal.fire("Congratulation","Fatching Your Data Successfully...","success")
  }

}
