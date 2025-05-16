import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

export class InvoiceFormController {

    form!: FormGroup;

    constructor(readonly fb: FormBuilder) {
        this.form = fb.group({
            billFrom: fb.group({
                street: fb.control('19 Union Terrace', []),
                city: fb.control('London', []),
                postCode: fb.control('E1 3EZ', []),
                country: fb.control('United Kingdom', []),
            }),
            billTo: fb.group({
                clientName: fb.control('fulanin', []),
                clientEmail: fb.control('fulanin@teste.com', []),
                city: fb.control('London', []),
                postCode: fb.control('E1 3EZ', []),
                country: fb.control('United Kingdom', []),
                invoiceDate: fb.control('2020-05-20', []),
                paymentTerms: fb.control('Next 30 days', []),
                projectDescription: fb.control('Graphic Design', []),
            }),
            itemsList: fb.array([])
        })
    }

    get street(): FormControl {
        return this.form.get('billFrom.street') as FormControl;
    }
}