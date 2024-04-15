import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface TaskFormModel {
	name: string;
	description: string;
	deadline: Date;
}

@Injectable({
	providedIn: 'root',
})
export class TaskFormService {
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
			name: new FormControl(null, [Validators.maxLength(60)]),
			description: new FormControl(null, [Validators.maxLength(120)]),
			deadline: new FormControl(null, [Validators.required]),
		});

		return this._form;
	}

	public getResult(): TaskFormModel {
		const category: TaskFormModel = { ...this._form.value } as TaskFormModel;
		category.deadline = new Date(category.deadline);
		this._form.reset();
		return category;
	}

	public resetForm(): void {
		this._form.reset();
	}
}
