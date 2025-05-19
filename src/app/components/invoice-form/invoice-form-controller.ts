import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

export class InvoiceFormController {

    form!: FormGroup;

    constructor(readonly fb: FormBuilder) {
        this.form = fb.group({
            billFrom: fb.group({
                street: fb.control('', []),
                city: fb.control('', []),
                postCode: fb.control('', []),
                country: fb.control('', []),
            }),
            billTo: fb.group({
                clientName: fb.control('', []),
                clientEmail: fb.control('', []),
                city: fb.control('', []),
                postCode: fb.control('', []),
                country: fb.control('', []),
                invoiceDate: fb.control('', []),
                paymentTerms: fb.control('', []),
                projectDescription: fb.control('', []),
            }),
            itemsList: fb.array([])
        })
    }

    addNewItem() {
        this.items.push(new FormControl(''));
    }

    removeItem(index: number) {
        this.items.removeAt(index);
    }

    get street(): FormControl {
        return this.form.get('billFrom.street') as FormControl;
    }

    get city(): FormControl {
        return this.form.get('billFrom.city') as FormControl;
    }

    get postCode(): FormControl {
        return this.form.get('billFrom.postCode') as FormControl;
    }

    get country(): FormControl {
        return this.form.get('billFrom.country') as FormControl;
    }

    get clientName(): FormControl {
        return this.form.get('billTo.clientName') as FormControl;
    }

    get clientEmail(): FormControl {
        return this.form.get('billTo.clientEmail') as FormControl;
    }

    get clientCity(): FormControl {
        return this.form.get('billTo.clientCity') as FormControl;
    }

    get clientPostCode(): FormControl {
        return this.form.get('billTo.clientPostCode') as FormControl;
    }

    get clientCountry(): FormControl {
        return this.form.get('billTo.clientCountry') as FormControl;
    }

    get invoiceDate(): FormControl {
        return this.form.get('billTo.invoiceDate') as FormControl;
    }

    get paymentTerms(): FormControl {
        return this.form.get('billTo.paymentTerms') as FormControl;
    }

    get projectDescription(): FormControl {
        return this.form.get('billTo.projectDescription') as FormControl;
    }

    get items(): FormArray {
        return this.form.get('itemsList') as FormArray;
    }

    get item(): FormControl {
        return this.form.get('itemsList.item') as FormControl;
    }
}