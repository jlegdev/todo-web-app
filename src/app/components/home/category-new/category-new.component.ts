import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '@api/data/category.service';
import { CategoryNotYetCreated } from '@model/category.model';
import { DialogService } from '@shared/service/dialog.service';
import { CategoryFormService } from '@shared/service/form/category-form.service';
import { take } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
	selector: 'app-category-new',
	templateUrl: './category-new.component.html',
	styleUrls: ['./category-new.component.scss'],
})
export class CategoryNewComponent implements OnInit {
	public form: FormGroup;
	private _subsink: SubSink = new SubSink();
	constructor(
		private categoryFormService: CategoryFormService,
		private categoryService: CategoryService,
		private dialog: DialogService,
		private router: Router
	) {
		this.form = this.categoryFormService.getForm();
	}

	ngOnInit(): void {}
	ngOnDestroy(): void {
		this._subsink.unsubscribe();
	}

	public onValidate(): void {
		this.form.updateValueAndValidity();
		if (this.form.valid) {
			const category: CategoryNotYetCreated = this.categoryFormService.getResult();
			this._subsink.add(
				this.categoryService
					.create(category)
					.pipe(take(1))
					.subscribe(() => {
						this.dialog.closeAll();
					})
			);
		}
	}

	public onClose(): void {
		this.dialog.closeAll();
	}
}
