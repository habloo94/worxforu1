import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { EmployeesComponent } from './Components/employees/employees.component'


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'employees', component: EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
