import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { HomeComponent } from './home/home.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  { path:'home',component:HomeComponent },
  { path: 'employees',component:EmployeeListComponent },
  { path:'add',component:CreateEmployeeComponent },
  { path:'update/:id',component:UpdateEmployeeComponent},
  { path:'create/:id',component:ViewDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
