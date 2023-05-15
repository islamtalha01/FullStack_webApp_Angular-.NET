import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employees.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{
 employees:Employee[]=[
  {
    "id": 1,
    "name": "John Doe",
    "phone": 1234567890,
    "email": "johndoe@example.com",
    "salary": 50000,
    "department":"IT",
  },{
    "id": 2,
    "name": "Jane Smith",
    "phone": 9876543210,
    "email": "janesmith@example.com",
    "salary": 60000,
    "department":"IT",
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "phone": 5555555555,
    "email": "alicejohnson@example.com",
    "salary": 75000,
    "department":"IT",
  }
  ];
 constructor()
 {

 }
ngOnInit(): void {
  
}


}
