import {computed, inject, Injectable, signal} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Employee, EmployeeStatus} from '../models/employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly httpClient: HttpClient = inject(HttpClient)

  private readonly employeeStatusChanges = signal<Record<string, EmployeeStatus>>({})
  private readonly employeesFromApi = signal<Employee[]>([])
  // Then status is updated for the 2nd time after response from /offboard
  readonly employees = computed(() => {
    const employeesFromServer = this.employeesFromApi()
    Object.entries(this.employeeStatusChanges()).forEach(([id, status]) => {
      const employeeIndex = employeesFromServer.findIndex(employee => employee.id === id)
      if (employeeIndex > -1) {
        employeesFromServer[employeeIndex].status = status
      }
    })
    return employeesFromServer
  })

  // I might not have fully understood the requirements for part:
  // After confirming the action, the user should be displayed on the main list with OFFBOARDED state without site reloading,
  // This requirement should demonstrate your state management skill. Besides that, FE should make an /offboard call to the backend.
  // I assumed that this case would be applicable when the call to /offboard is taking a long time, and we want to limit requests to /employees
  // so this is the solution I came up with
  // I am updating the status on the UI side for better UX while the call is being made to the backend
  private readonly singleEmployeeFromApi = signal<Employee | undefined>(undefined)
  readonly singleEmployee = computed(() => {
    const singleEmployeeFromServer = this.singleEmployeeFromApi()
    if (singleEmployeeFromServer) {
      const changedStatus = this.employeeStatusChanges()[singleEmployeeFromServer?.id]
      if (changedStatus) {
        return {
          ...singleEmployeeFromServer,
          status: changedStatus
        }
      }
    }
    return singleEmployeeFromServer
  })

  loadEmployees(): void {
    this.employeesFromApi.set([])
    this.httpClient.get<Employee[]>('/api/employees').subscribe(employees => this.employeesFromApi.set(employees))
  }

  loadSingleEmployeeById(id: string): void {
    this.singleEmployeeFromApi.set(undefined)
    this.httpClient.get<Employee>(`/api/employees/${id}`).subscribe(employee => this.singleEmployeeFromApi.set(employee))
  }

  updateEmployeeStatus(employee: Employee, status: EmployeeStatus): void {
    this.employeeStatusChanges.set({
      ...this.employeeStatusChanges(),
      [employee.id]: status
    })
  }
}
