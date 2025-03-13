import {Pipe, PipeTransform} from '@angular/core'
import {ValidationErrors} from '@angular/forms'
import {ErrorKey} from '../models/error-key.enum'

const ERROR_INJECTION_TAG_REGEX = /\{\{(.*?)\}\}/g

const ERRORS_TO_MESSAGE_MAP: Record<ErrorKey, string> = {
  [ErrorKey.REQUIRED]: 'This field is required',
  [ErrorKey.MIN_LENGTH]: 'Value is too short',
  [ErrorKey.MAX_LENGTH]: 'Value is too long',
  [ErrorKey.EMAIL]: 'Value is not a valid email',
  [ErrorKey.PHONE]: 'Value is not a valid phone number',
  [ErrorKey.PATTERN]: 'Incorrect format of {{field}}',
}

@Pipe({
  name: 'humanizeErrors',
})
export class HumanizeErrorsPipe implements PipeTransform {

  transform(errors: ValidationErrors | null, inject?: string): string | null {
    if (errors) {
      const errorKey = Object.keys(errors)[0] as ErrorKey
      let errorMessage = ERRORS_TO_MESSAGE_MAP[errorKey]
      if (inject) {
        return errorMessage.replace(ERROR_INJECTION_TAG_REGEX, inject)
      } else {
        return errorMessage
      }
    } else {
      return null
    }
  }

}
