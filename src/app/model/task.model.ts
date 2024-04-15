import { CATEGORY_MOCK, Category } from './category.model';

export interface Task {
	id: string;
	name: string;
	description: string;
	deadline: Date;
	category: Category;
	isFinish: boolean;
}

export type TaskNotYetCreated = Omit<Task, 'id'>;

export const TASK_MOCK: Task = {
	id: '1',
	name: 'Task name test',
	description: 'Task description test',
	deadline: new Date(Date.now()),
	category: CATEGORY_MOCK,
	isFinish: false,
};
