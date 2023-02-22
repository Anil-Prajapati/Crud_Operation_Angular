import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmployeeService } from '../services/employee.service';
import { Employees } from '../services/employees';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  emp:any
  employee:Employees = new Employees;
  id:any
  submitted:boolean = false;

  constructor(private employeeServices:EmployeeService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {

    this.employee=new Employees();
    this.id=this.route.snapshot.params['id'];

    this.employeeServices.getEmployees(this.id).subscribe((response)=>{
      console.log(response)
      this.employee=response;
      
    },(error)=>{
      console.log(error);
    });

    
  }

  //this is the updating method 
  updateEmployee(){
    this.employeeServices.updateEmployee(this.id,this.employee).subscribe((res)=>{
      console.log(res);
      this.goToList();
    },(error)=>{
      console.log(error);
    });
  }

  updateSwal(emp:any){
    Swal.fire("Congratulation","Your Data is updated Successfully !","success")

  }


  goToList(){
    this.submitted=false
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.submitted=true
    this.goToList();
  }

}
