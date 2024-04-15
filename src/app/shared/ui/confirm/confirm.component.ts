import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryFormService } from '@shared/service/form/category-form.service';
import { SubSink } from 'subsink';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';

@Component({
	selector: 'app-confirm',
	templateUrl: './confirm.component.html',
	styleUrls: ['./confirm.component.scss'],
	imports: [DialogFormComponent],
	standalone: true,
})
export class ConfirmComponent {
	public form: FormGroup;
	private _subsink: SubSink = new SubSink();
	constructor(public dialogRef: MatDialogRef<ConfirmComponent>, private categoryFormService: CategoryFormService) {
		this.form = this.categoryFormService.getForm();
	}

	ngOnInit(): void {}

	ngOnDestroy(): void {
		this._subsink.unsubscribe();
	}

	public onValidate(): void {
		this.dialogRef.close(true);
	}

	public onClose(): void {
		this.dialogRef.close(false);
	}
}
