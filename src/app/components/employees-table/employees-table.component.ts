import {Component, computed, inject, input} from '@angular/core'
import {Employee} from '../../models/employee.model'
import {Router} from '@angular/router'
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms'
import {EmployeeTableRowComponent} from '../employee-table-row/employee-table-row.component'
import {MatInputModule} from '@angular/material/input'
import {toSignal} from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-employees-table',
  imports: [EmployeeTableRowComponent, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './employees-table.component.html',
  styleUrl: './employees-table.component.scss'
})
export class EmployeesTableComponent {
  searchFormControl = new FormControl('')
  searchValue = toSignal(
    this.searchFormControl.valueChanges,
    {initialValue: this.searchFormControl.value ?? ''}
  )
  employees = input.required<Employee[]>()
  filteredEmployees = computed(() => {
    const allEmployees = this.employees()
    const search = this.searchValue() ?? ''

    if (!search.trim()) {
      return allEmployees
    }

    const lowerSearch = search.toLowerCase()
    return allEmployees.filter(employee =>
      employee.name.toLowerCase().includes(lowerSearch) ||
      employee.department.toLowerCase().includes(lowerSearch)
    )
  })
  private readonly router = inject(Router)

  redirectToDetails(employee: Employee): void {
    this.router.navigate(['../employee', employee.id])
  }
}
