import { TASK_MOCK, Task } from './task.model';

export interface Category {
	id: string;
	name: string;
	description: string;
	tasks: Task[];
}

export type CategoryNotYetCreated = Omit<Category, 'id'>;

export const CATEGORY_MOCK: Category = {
	id: '1',
	name: 'Category test',
	description: 'Description test',
	tasks: [TASK_MOCK],
};
