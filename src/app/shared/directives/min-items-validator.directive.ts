import { Directive } from '@angular/core';
import { AbstractControl, FormArray, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMinItemsValidator]',
  standalone: true,
  providers: [
    { 
      provide: NG_VALIDATORS,
      useExisting: MinItemsValidatorDirective,
      multi: true
    }
  ]
})
export class MinItemsValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const formArray = control as FormArray;
    return formArray.length < 1 ? { minItems: true } : null;
  }

}
