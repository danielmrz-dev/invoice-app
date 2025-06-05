import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { debounceTime, exhaustMap, mergeMap } from "rxjs";

export class InvoiceFormController {

    form!: FormGroup;

    constructor(readonly fb: FormBuilder) {
        this.form = fb.group({
            createdAt: fb.control('', [Validators.required]),
            paymentDue: fb.control(''),
            description: fb.control('', [Validators.required, Validators.minLength(5)]),
            paymentTerms: fb.control(null, [Validators.required]),
            clientName: fb.control('', [Validators.required]),
            clientEmail: fb.control(''),
            status: fb.control('pending', [Validators.required]),
            senderAddress: fb.group({
                senderStreet: fb.control('', [Validators.required, Validators.minLength(5)]),
                senderCity: fb.control('', [Validators.required]),
                senderPostCode: fb.control('', [Validators.required, Validators.minLength(5)]),
                senderCountry: fb.control('', [Validators.required]),
            }),
            clientAddress: fb.group({
                clientStreet:fb.control(''),
                clientCity:fb.control(''),
                clientPostCode:fb.control('', [Validators.minLength(5)]),
                clientCountry:fb.control(''),
            }),
            items: fb.array([], [Validators.required]),
            total: fb.control('')
        })
    }

    addNewItem(item?: any) {
        const group = this.fb.group({
            name: this.fb.control(item?.name || '', [Validators.required]),
            quantity: this.fb.control(item?.quantity || '', [Validators.required]),
            price: this.fb.control(item?.price || '', [Validators.required]),
            total: this.fb.control({ value: item?.total || '', disabled: true })
        });
        this.items.push(group);
        group.valueChanges.pipe(
            debounceTime(200),
        ).subscribe((value) => {
            const total = parseFloat(value.price) * parseFloat(value.quantity);
            const totalFormatted = total ? `£ ${total.toFixed(2)}` : '';
            group.get('total')?.setValue(totalFormatted, { emitEvent: false });
            group.get('total')?.updateValueAndValidity({ onlySelf: true, emitEvent: false });
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
        return this.form.get('senderAddress.senderStreet') as FormControl;
    }

    get senderCity(): FormControl {
        return this.form.get('senderAddress.senderCity') as FormControl;
    }

    get senderPostCode(): FormControl {
        return this.form.get('senderAddress.senderPostCode') as FormControl;
    }

    get senderCountry(): FormControl {
        return this.form.get('senderAddress.senderCountry') as FormControl;
    }

    get clientStreet(): FormControl {
        return this.form.get('clientAddress.clientStreet') as FormControl;
    }

    get clientCity(): FormControl {
        return this.form.get('clientAddress.clientCity') as FormControl;
    }

    get clientPostCode(): FormControl {
        return this.form.get('clientAddress.clientPostCode') as FormControl;
    }

    get clientCountry(): FormControl {
        return this.form.get('clientAddress.clientCountry') as FormControl;
    }

    get status(): FormControl {
        return this.form.get('status') as FormControl;
    }

    get items(): FormArray {
        return this.form.get('items') as FormArray;
    }

}