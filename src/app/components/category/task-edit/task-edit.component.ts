import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '@api/data/task.service';
import { Task } from '@model/task.model';
import { DialogService } from '@shared/service/dialog.service';
import { TaskFormService } from '@shared/service/form/task-form.service';
import { take } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
	selector: 'app-task-edit',
	templateUrl: './task-edit.component.html',
	styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit {
	public form: FormGroup;
	private _subsink: SubSink = new SubSink();
	public currentTask!: Task;
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: { task: Task },
		private taskFormService: TaskFormService,
		private taskService: TaskService,
		private dialog: DialogService
	) {
		this.form = this.taskFormService.getForm();
	}

	ngOnInit(): void {
		if (!this.data.task) {
			this.dialog.closeAll();
		}
		this.currentTask = this.data.task;
		this.form.patchValue({ ...this.currentTask });
	}
	ngOnDestroy(): void {
		this._subsink.unsubscribe();
	}

	public onValidate(): void {
		this.form.updateValueAndValidity();
		if (this.form.valid) {
			const task: Task = {
				...this.taskFormService.getResult(),
				id: this.currentTask.id,
				category: this.currentTask.category,
				isFinish: this.currentTask.isFinish,
			};
			this._subsink.add(
				this.taskService
					.update(this.currentTask.id, task)
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
