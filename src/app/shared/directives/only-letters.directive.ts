import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyLetters]',
  standalone: true
})
export class OnlyLettersDirective {

  @HostListener('input', ['$event']) onlyLetters(event: KeyboardEvent) {
    const element = event.target as HTMLInputElement;
    element.value = (element.value?.trim().replace(/[^0-9.]/, ''));
  }

}
