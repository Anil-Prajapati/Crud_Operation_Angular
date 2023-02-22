import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmployeeService } from '../services/employee.service';
import { Employees } from '../services/employees';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  emp:any
  employee:Employees = new Employees();
  submitted=false
  constructor(private employeeServices:EmployeeService,private router:Router){}

  ngOnInit(): void {
  }

  newEmployee(){
    this.submitted=false
    this.employee= new Employees();
  }

  //this is the saving the data into the data bases 
  savingData(){
    this.employeeServices.createEmployee(this.employee).subscribe(
      data=>console.log(data),
      error=>console.log(error)
    );
    this.employee = new Employees();
    this.goToList()
     
  }

  //this is the sweet alert method
  savingDataSwal(emp:any){
     Swal.fire("Congratulation","Your Data Inserted Successfully !","success");
  }


  onSubmit() {
    this.submitted=true
    this.savingData();
  }

  //this arer the getting all data at time
  goToList(){
    this.router.navigate(['/employees']);
  }

  //this is the getting all the data into the data bases
  list(){
    this.employeeServices.getAll();
  }
}
