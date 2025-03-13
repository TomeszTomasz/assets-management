import {Component, inject, OnInit} from '@angular/core'
import {EmployeeService} from '../../services/employee.service'
import {EmployeesTableComponent} from '../../components/employees-table/employees-table.component'

@Component({
  selector: 'app-dashboard',
  imports: [EmployeesTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private readonly employeeService = inject(EmployeeService)
  employees = this.employeeService.employees

  ngOnInit(): void {
    this.employeeService.loadEmployees()
  }


}
