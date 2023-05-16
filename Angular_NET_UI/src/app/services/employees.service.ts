import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  

   
  postAddEmployee()
  {
    this.http.post()
  }



}
