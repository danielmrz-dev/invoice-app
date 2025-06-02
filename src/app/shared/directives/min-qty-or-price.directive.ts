import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMinQtyOrPrice]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinQtyOrPriceDirective,
      multi: true
    }
  ]
})
export class MinQtyOrPriceDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {

    if (!control.value) return null;

    const value = (control.value).toString();
    const INVALID_NUMBER = value.trim().length === 0;
    return INVALID_NUMBER ? { minQtyOrPrice: true } : null;

  }

}
