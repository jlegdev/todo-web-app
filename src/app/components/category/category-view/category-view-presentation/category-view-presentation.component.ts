import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Category } from '@model/category.model';
import { IconEnum } from '@model/enum/icon.enum';
import { Task } from '@model/task.model';

@Component({
	selector: 'app-category-view-presentation',
	templateUrl: './category-view-presentation.component.html',
	styleUrls: ['./category-view-presentation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryViewPresentationComponent implements OnInit, OnChanges {
	@Input()
	public category!: Category;
	@Input()
	public tasks: Task[] = [];
	public tasksNotFinished: Task[] = [];
	public tasksFinished: Task[] = [];

	@Output() public emitDeleteCategory: EventEmitter<void> = new EventEmitter<void>();
	@Output() public emitDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
	@Output() public emitUpdateTaskStatu: EventEmitter<Task> = new EventEmitter<Task>();

	@Output() public emitOnUpdateTaskView: EventEmitter<Task> = new EventEmitter<Task>();
	@Output() public emitOnCreateTaskView: EventEmitter<Category> = new EventEmitter<Category>();
	@Output() public emitOnUpdateCategoryView: EventEmitter<Category> = new EventEmitter<Category>();

	public readonly IconEnum = IconEnum;
	constructor() {}

	ngOnInit(): void {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['tasks']?.currentValue?.length) {
			this._initTasks();
		}
	}

	private _initTasks(): void {
		this.tasksNotFinished = this.tasks.filter((task: Task) => !task.isFinish);
		this.tasksFinished = this.tasks.filter((task: Task) => task.isFinish);
	}

	public onUpdateTaskStatu(task: Task): void {
		this.emitUpdateTaskStatu.emit(task);
	}

	public onDeleteTask(task: Task): void {
		this.emitDeleteTask.emit(task);
	}

	public onDeleteCurrentCategory(): void {
		this.emitDeleteCategory.emit();
	}

	public onUpdateTaskView(task: Task): void {
		this.emitOnUpdateTaskView.emit(task);
	}

	public onUpdateCategoryView(): void {
		this.emitOnUpdateCategoryView.emit(this.category);
	}
	public onNewTaskView(): void {
		this.emitOnCreateTaskView.emit(this.category);
	}
}
