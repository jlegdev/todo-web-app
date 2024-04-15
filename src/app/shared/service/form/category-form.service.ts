import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryNotYetCreated } from '@model/category.model';

@Injectable({
	providedIn: 'root',
})
export class CategoryFormService {
	private _form!: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	public getForm(): FormGroup {
		if (!this._form) {
			this._form = this._initForm();
		}
		return this._form;
	}

	private _initForm(): FormGroup {
		this._form = this.formBuilder.group({
			name: new FormControl(null, [Validators.maxLength(30)]),
			description: new FormControl(null, [Validators.maxLength(120)]),
		});
		return this._form;
	}

	public getResult(): CategoryNotYetCreated {
		const category: CategoryNotYetCreated = { ...this._form.value } as CategoryNotYetCreated;
		this._form.reset();
		return category;
	}

	public resetForm(): void {
		this._form.reset();
	}
}
