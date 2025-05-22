import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

export class InvoiceFormController {

    form!: FormGroup;

    constructor(readonly fb: FormBuilder) {
        this.form = fb.group({
            createdAt: fb.control(''),
            paymentDue: fb.control(''),
            description: fb.control(''),
            paymentTerms: fb.control(''),
            clientName: fb.control(''),
            clientEmail: fb.control(''),
            status: fb.control(''),
            senderAddress: fb.group({
                street: fb.control(''),
                city: fb.control(''),
                postCode: fb.control(''),
                country: fb.control(''),
            }),
            clientAddress: fb.group({
                street:fb.control(''),
                city:fb.control(''),
                postCode:fb.control(''),
                country:fb.control(''),
            }),
            items: fb.array([]),
            total: fb.control('')
        })
    }

    addNewItem(item?: any) {
        const group = this.fb.group({
            name: this.fb.control(item?.name || ''),
            quantity: this.fb.control(item?.quantity || 0),
            price: this.fb.control(item?.price || 0),
            total: this.fb.control(item?.total)
        });
        this.items.push(group);
        group.valueChanges.subscribe((value) => {
            const total = value.price * value.quantity;
            group.get('total')?.setValue(total, { emitEvent: false });
        });

    }

    removeItem(index: number) {
        this.items.removeAt(index);
    }

    get createdAt(): FormControl {
        return this.form.get('createdAt') as FormControl;
    }

    get paymentDue(): FormControl {
        return this.form.get('paymentDue') as FormControl;
    }

    get description(): FormControl {
        return this.form.get('description') as FormControl;
    }

    get paymentTerms(): FormControl {
        return this.form.get('paymentTerms') as FormControl;
    }

    get clientName(): FormControl {
        return this.form.get('clientName') as FormControl;
    }

    get clientEmail(): FormControl {
        return this.form.get('clientEmail') as FormControl;
    }

    get senderStreet(): FormControl {
        return this.form.get('senderAddress.street') as FormControl;
    }

    get senderCity(): FormControl {
        return this.form.get('senderAddress.city') as FormControl;
    }

    get senderPostCode(): FormControl {
        return this.form.get('senderAddress.postCode') as FormControl;
    }

    get senderCountry(): FormControl {
        return this.form.get('senderAddress.country') as FormControl;
    }

    get clientStreet(): FormControl {
        return this.form.get('clientAddress.street') as FormControl;
    }

    get clientCity(): FormControl {
        return this.form.get('clientAddress.city') as FormControl;
    }

    get clientPostCode(): FormControl {
        return this.form.get('clientAddress.postCode') as FormControl;
    }

    get clientCountry(): FormControl {
        return this.form.get('clientAddress.country') as FormControl;
    }

    get status(): FormControl {
        return this.form.get('status') as FormControl;
    }

    get items(): FormArray {
        return this.form.get('items') as FormArray;
    }

}