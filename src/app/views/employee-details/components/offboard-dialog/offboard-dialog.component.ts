import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core'
import {FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {HumanizeErrorsPipe} from '../../../../pipes/humanize-errors.pipe'
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select'
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog'
import {MatIcon} from '@angular/material/icon'
import {InferFormControls} from '../../../../utils/infer-form-controls'
import {OffboardRequest} from '../../../../models/offboard-request.model'

@Component({
  selector: 'app-offboard-dialog',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HumanizeErrorsPipe,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatIcon
  ],
  templateUrl: './offboard-dialog.component.html',
  styleUrl: './offboard-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class OffboardDialogComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder)

  offboardForm = this.formBuilder.group<InferFormControls<OffboardRequest>>({
    receiver: this.formBuilder.control(
      '', {validators: [Validators.required, Validators.maxLength(40)]}
    ),
    email: this.formBuilder.control(
      '', {validators: [Validators.required, Validators.email]}
    ),
    phone: this.formBuilder.control(
      '', {validators: [Validators.required, Validators.pattern(/^\+?[0-9\s\-()]{7,20}$/)]}
    ),
    street: this.formBuilder.control(
      '', {validators: [Validators.required, Validators.maxLength(40)]}
    ),
    city: this.formBuilder.control(
      '', {validators: [Validators.required, Validators.maxLength(40)]}
    ),
    postalCode: this.formBuilder.control(
      '', {validators: [Validators.required, Validators.pattern(/^\d{2}-\d{3}$/)]}
    ),
    country: this.formBuilder.control(
      '', {validators: [Validators.required]}
    ),
    notes: this.formBuilder.control(
      '', {validators: [Validators.maxLength(300)]}
    ),
  })
  private readonly changeDetectorRef = inject(ChangeDetectorRef)
  private readonly matDialogRef = inject(MatDialogRef)

  submit(): void {
    this.offboardForm.markAllAsTouched()
    if (this.offboardForm.valid) {
      this.matDialogRef.close(this.offboardForm.value)
    }
  }
}
