import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core'
import {EmployeeStatus} from '../../models/employee.model'
import {EmployeeService} from '../../services/employee.service'
import {ActivatedRoute, Router, RouterModule} from '@angular/router'
import {MatIcon} from '@angular/material/icon'
import {MatButton} from '@angular/material/button'
import {EquipmentListComponent} from '../../components/equipment-list/equipment-list.component'
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import {OffboardDialogComponent} from './components/offboard-dialog/offboard-dialog.component'
import {OffboardRequest} from '../../models/offboard-request.model'
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import {OffboardService} from '../../services/offboard.service'

@Component({
  selector: 'app-employee-details',
  imports: [
    MatIcon,
    MatButton,
    RouterModule,
    EquipmentListComponent,
    MatDialogModule
  ],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent implements OnInit {
  private readonly employeeService = inject(EmployeeService)
  private readonly offboardService = inject(OffboardService)
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly router = inject(Router)
  private readonly matDialog = inject(MatDialog)
  private readonly destroyRef = inject(DestroyRef)

  employee = this.employeeService.singleEmployee
  EmployeeStatus: typeof EmployeeStatus = EmployeeStatus

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if (id) {
      this.employeeService.loadSingleEmployeeById(id)
    }
  }

  offboard() {
    this.matDialog.open(OffboardDialogComponent).afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((offboardRequest: OffboardRequest) => {
        const employee = this.employee()
        if (employee && offboardRequest) {
          this.employeeService.updateEmployeeStatus(employee, EmployeeStatus.AWAITING_CONFIRMATION)
          this.offboardService.offboardEmployee(offboardRequest, employee)
          this.router.navigate(['../dashboard'])
        }
      })
  }
}
