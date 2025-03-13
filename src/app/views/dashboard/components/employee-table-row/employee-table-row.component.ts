import {ChangeDetectionStrategy, Component, input} from '@angular/core'
import {Employee, EmployeeStatus} from '../../../../models/employee.model'
import {EquipmentListComponent} from '../../../../components/equipment-list/equipment-list.component'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@Component({
  selector: 'app-employee-table-row',
  imports: [EquipmentListComponent, MatProgressSpinnerModule],
  templateUrl: './employee-table-row.component.html',
  styleUrl: './employee-table-row.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class EmployeeTableRowComponent {
  employee = input.required<Employee>()

  EmployeeStatus: typeof EmployeeStatus = EmployeeStatus
}
