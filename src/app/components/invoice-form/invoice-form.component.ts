import { Component } from '@angular/core';
import { SidenavService } from '../../shared/services/sidenav.service';
import { InvoiceFormController } from './invoice-form-controller';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.scss'
})
export class InvoiceFormComponent extends InvoiceFormController {
  
  constructor(
    private readonly sidenavService: SidenavService,
    readonly formBuilder: FormBuilder
  ) {
    super(formBuilder);
  }
  
  closeSidenav() {
    this.sidenavService.toggleSidenav();
  }

  ngOnInit(): void {
    console.log(this.form.value);
  }
}
