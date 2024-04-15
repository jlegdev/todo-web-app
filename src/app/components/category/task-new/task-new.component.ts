import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from '@api/data/category.service';
import { Category } from '@model/category.model';
import { TaskNotYetCreated } from '@model/task.model';
import { DialogService } from '@shared/service/dialog.service';
import { TaskFormService } from '@shared/service/form/task-form.service';
import { take } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
	selector: 'app-task-new',
	templateUrl: './task-new.component.html',
	styleUrls: ['./task-new.component.scss'],
})
export class TaskNewComponent implements OnInit {
	public form: FormGroup;
	private _subsink: SubSink = new SubSink();
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: { category: Category },
		private dialog: DialogService,
		private taskFormService: TaskFormService,
		private categoryService: CategoryService
	) {
		this.form = this.taskFormService.getForm();
	}

	ngOnInit(): void {}
	ngOnDestroy(): void {
		this._subsink.unsubscribe();
	}

	public onValidate(): void {
		this.form.updateValueAndValidity();
		if (this.form.valid) {
			const task: TaskNotYetCreated = { ...this.taskFormService.getResult(), category: this.data.category, isFinish: false };
			this._subsink.add(
				this.categoryService
					.addTask(this.data.category.id, task)
					.pipe(take(1))
					.subscribe(() => {
						this.dialog.closeAll();
					})
			);
		}
	}

	public onClose(): void {
		this.taskFormService.resetForm();
		this.dialog.closeAll();
	}
}
