import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [

  {
    path: 'employees',
    component:EmployeesListComponent

  }
,
  {
    path: 'employees/add',
    component:AddEmployeeComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
