import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  
  private baseURL='http://localhost:8080/springboot-crud-rest/api/v1/employees';

  getEmployees(id:number):Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  createEmployee(employee:Object):Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  updateEmployee(id:number,value:any):Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, value);
  }

  deleteEmployee(id:number):Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`,{responseType:'text'});
  }

  getAll():Observable<any>{
    return this.httpClient.get(`${this.baseURL}`);
  }
}
