import {Routes} from '@angular/router'
import {DashboardComponent} from './views/dashboard/dashboard.component'
import {EmployeeDetailsComponent} from './views/employee-details/employee-details.component'

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employee/:id', component: EmployeeDetailsComponent},
]
