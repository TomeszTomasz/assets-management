import {FormControl} from '@angular/forms'

export type InferFormControls<T> = { [key in keyof T]: FormControl<T[key]> }
