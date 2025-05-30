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

    const INVALID_NUMBER = control.value?.trim().length <= 0;
    return INVALID_NUMBER ? { minQtyOrPrice: true } : null;

  }

}
