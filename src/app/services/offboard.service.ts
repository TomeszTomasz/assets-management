import {inject, Injectable} from '@angular/core'
import {tap} from 'rxjs'
import {Employee, EmployeeStatus} from '../models/employee.model'
import {OffboardRequest, OffboardRequestDto} from '../models/offboard-request.model'
import {HttpClient} from '@angular/common/http'
import {EmployeeService} from './employee.service'

@Injectable({
  providedIn: 'root'
})
export class OffboardService {
  private readonly httpClient: HttpClient = inject(HttpClient)
  private readonly employeeService = inject(EmployeeService)

  offboardEmployee(offboardRequest: OffboardRequest, employee: Employee): void {
    this.httpClient.post<void>('/api/offboard', this.toDto(offboardRequest)).pipe(tap(() => {
      this.employeeService.updateEmployeeStatus(employee, EmployeeStatus.OFFBOARDED)
    })).subscribe()
  }

  private toDto(offboardRequest: OffboardRequest): OffboardRequestDto {
    return {
      address: {
        streetLine: offboardRequest.street,
        country: offboardRequest.country,
        postalCode: offboardRequest.postalCode,
        receiver: offboardRequest.receiver
      },
      notes: offboardRequest.notes,
      phone: offboardRequest.phone,
      email: offboardRequest.email
    }
  }

}
