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
    return null
  }

}
