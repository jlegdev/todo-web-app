import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '@api/data/category.service';
import { Category } from '@model/category.model';
import { DialogService } from '@shared/service/dialog.service';
import { CategoryFormService } from '@shared/service/form/category-form.service';
import { take } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
	selector: 'app-category-edit',
	templateUrl: './category-edit.component.html',
	styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent implements OnInit {
	public form: FormGroup;
	private _subsink: SubSink = new SubSink();
	private currentCategory!: Category;
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: { category: Category },
		private categoryFormService: CategoryFormService,
		private categoryService: CategoryService,
		private dialog: DialogService
	) {
		this.form = this.categoryFormService.getForm();
	}

	ngOnInit(): void {
		if (!this.data.category) {
			this.dialog.closeAll();
		}
		this.currentCategory = this.data.category;
		this.form.patchValue(this.currentCategory);
	}

	ngOnDestroy(): void {
		this._subsink.unsubscribe();
	}

	public onValidate(): void {
		this.form.updateValueAndValidity();
		if (this.form.valid) {
			const category: Category = { ...this.categoryFormService.getResult(), id: this.currentCategory.id };

			this._subsink.add(
				this.categoryService
					.update(this.currentCategory.id, category)
					.pipe(take(1))
					.subscribe(() => {
						this.dialog.closeAll();
					})
			);
		}
	}

	public onClose(): void {
		this.categoryFormService.resetForm();
		this.dialog.closeAll();
	}
}
