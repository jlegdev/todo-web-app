import { Injectable } from '@angular/core';
import { TASK_MOCK, Task, TaskNotYetCreated } from '@model/task.model';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class TaskMockService {
	private currentCategories: Task[];
	constructor() {
		this.currentCategories = [
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,

			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,

			TASK_MOCK,

			TASK_MOCK,

			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,

			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,

			TASK_MOCK,

			TASK_MOCK,

			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,

			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,

			TASK_MOCK,

			TASK_MOCK,

			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,

			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,
			TASK_MOCK,

			TASK_MOCK,

			TASK_MOCK,

			TASK_MOCK,
		];
	}

	public getAll(): Observable<Task[]> {
		return of(this.currentCategories);
	}

	public getOne(idTaskToGet: string): Observable<Task | undefined> {
		const task: Task | undefined = this.currentCategories.find((task: Task) => task.id === idTaskToGet);
		return of(task);
	}

	public create(taskToCreate: TaskNotYetCreated): Observable<string> {
		const idOfLastTask: string = this.currentCategories[this.currentCategories.length - 1].id;
		const newTask: Task = { id: idOfLastTask + 1, ...taskToCreate };
		this.currentCategories.push(newTask);
		return of(newTask.id);
	}

	public update(idTaskToUpdate: string, taskToUpdate: Task): Observable<string> {
		const indexOfTask: number = this.currentCategories.findIndex((task: Task) => task.id === idTaskToUpdate);
		if (indexOfTask !== -1) {
			this.currentCategories[indexOfTask] = taskToUpdate;
		}
		return of(idTaskToUpdate);
	}

	public delete(idTaskToDelete: string): Observable<boolean> {
		this.currentCategories = this.currentCategories.filter((task: Task) => task.id != idTaskToDelete);
		return of(true);
	}
}
