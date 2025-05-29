import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
  standalone: true
})
export class UppercaseDirective {

  @HostListener('input', ['$event']) toUppercase(event: KeyboardEvent) {
    const el = event.target as HTMLInputElement;
    el.value = el.value.toUpperCase();
  }

}
