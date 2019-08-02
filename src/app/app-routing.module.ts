import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
//import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full'},
  { path: 'employee', component: EmployeeComponent}
  //{ path: 'dashboard', component: DashboardComponent },
  //{ path: 'detail/:id', component: HeroDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
