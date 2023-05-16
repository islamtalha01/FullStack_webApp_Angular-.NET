import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employees.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


 addEmployeeRequest:Employee=
 {
  
   id:0,
   name:'',
   email:'',
   phone:0,
   salary:0,
   department:''
   
  

 };

constructor()
{

}

ngOnInit():void
{
  
} 
addEmployee()
{
  console.log(this.addEmployeeRequest);
}

}
