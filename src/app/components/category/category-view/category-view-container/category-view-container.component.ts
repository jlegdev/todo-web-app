import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '@api/data/category.service';
import { TaskService } from '@api/data/task.service';
import { CategoryEditComponent } from '@components/category/category-edit/category-edit.component';
import { TaskEditComponent } from '@components/category/task-edit/task-edit.component';
import { TaskNewComponent } from '@components/category/task-new/task-new.component';
import { Category } from '@model/category.model';
import { RoutePathEnum } from '@model/route.path.enum';
import { Task } from '@model/task.model';
import { DialogService } from '@shared/service/dialog.service';
import { ConfirmComponent } from '@shared/ui/confirm/confirm.component';
import { Observable, take } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
	selector: 'app-category-view-container',
	templateUrl: './category-view-container.component.html',
	styleUrls: ['./category-view-container.component.scss'],
})
export class CategoryViewContainerComponent implements OnInit {
	public idCategory: string;

	public $category!: Observable<Category>;
	// public $tasks!: Observable<Task[]>;

	private _subsink: SubSink = new SubSink();
	constructor(
		private activatedRoute: ActivatedRoute,
		private categoryService: CategoryService,
		private dialog: DialogService,
		private router: Router,
		private taskService: TaskService
	) {
		this.idCategory = this.activatedRoute.snapshot.paramMap.get('id') as string;
	}

	ngOnInit(): void {
		this._loadCurrentCategory();
	}

	ngOnDestroy(): void {
		this._subsink.unsubscribe();
	}

	private _loadCurrentCategory(): void {
		this.$category = this.categoryService.getOne(this.idCategory);
	}

	public onUpdateTaskStatu(task: Task): void {
		const taskUpdated: Task = { ...task, isFinish: !task.isFinish };
		const obs: Observable<string> = this.taskService.update(task.id, taskUpdated);
		this._onReloadTasksAfterObs(obs);
	}

	public onDeleteTask(task: Task): void {
		const obs: Observable<void> = this.taskService.delete(task.id);
		this._onReloadTasksAfterObs(obs);
	}

	public onDeleteCurrentCategory(): void {
		const dialogRef: MatDialogRef<ConfirmComponent> = this.dialog.open(ConfirmComponent);
		this._subsink.add(
			dialogRef.afterClosed().subscribe((result: boolean) => {
				if (result) {
					this._subsink.add(
						this.categoryService.delete(this.idCategory).subscribe(() => {
							this.router.navigate([RoutePathEnum.HOME]);
						})
					);
				}
			})
		);
	}

	public onUpdateTaskView(task: Task): void {
		const dialogRef: MatDialogRef<TaskEditComponent> = this.dialog.open(TaskEditComponent, { task: task });
		const obs: Observable<any> = dialogRef.afterClosed();
		this._onReloadTasksAfterObs(obs);
	}

	public onUpdateCategoryView(category: Category): void {
		const dialogRef: MatDialogRef<CategoryEditComponent> = this.dialog.open(CategoryEditComponent, { category: category });
		const obs: Observable<any> = dialogRef.afterClosed();
		this._onReloadCategoryAfterObs(obs);
	}

	public onNewTaskView(category: Category): void {
		const dialogRef: MatDialogRef<TaskNewComponent> = this.dialog.open(TaskNewComponent, { category: category });
		const obs: Observable<any> = dialogRef.afterClosed();
		this._onReloadTasksAfterObs(obs);
	}

	private _onReloadTasksAfterObs(obsToWait: Observable<any>): void {
		this._subsink.add(obsToWait.pipe(take(1)).subscribe(() => this._loadCurrentCategory()));
	}

	private _onReloadCategoryAfterObs(obsToWait: Observable<any>): void {
		this._subsink.add(obsToWait.pipe(take(1)).subscribe(() => this._loadCurrentCategory()));
	}
}
