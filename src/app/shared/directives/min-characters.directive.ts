import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMinCharacters]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinCharactersDirective,
      multi: true
    }
  ]
})
export class MinCharactersDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {

    if (!control.value || control.value.length === 0) return null;

    const trimmedValue = control.value.trim();

    return trimmedValue.length > 0 ? null : { invalidValue: true }
  }

}
