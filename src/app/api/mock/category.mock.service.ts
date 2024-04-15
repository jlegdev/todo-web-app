import { Injectable } from '@angular/core';
import { Category, CATEGORY_MOCK, CategoryNotYetCreated } from '@model/category.model';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CategoryMockService {
	private currentCategories: Category[];
	constructor() {
		this.currentCategories = [CATEGORY_MOCK, CATEGORY_MOCK];
	}

	public getAll(): Observable<Category[]> {
		return of(this.currentCategories);
	}

	public getOne(idCategoryToGet: string): Observable<Category> {
		const category: Category = this.currentCategories.find((category: Category) => category.id === idCategoryToGet) as Category;
		return of(category);
	}

	public create(categoryToCreate: CategoryNotYetCreated): Observable<string> {
		const idOfLastCategory: string = this.currentCategories.length > 0 ? this.currentCategories[this.currentCategories.length - 1].id : '1';
		const newCategory: Category = { id: idOfLastCategory + 1, ...categoryToCreate };
		this.currentCategories.push(newCategory);
		return of(newCategory.id);
	}

	public update(idCategoryToUpdate: string, categoryToUpdate: Category): Observable<string> {
		const indexOfCategory: number = this.currentCategories.findIndex((category: Category) => category.id === idCategoryToUpdate);
		if (indexOfCategory !== -1) {
			this.currentCategories[indexOfCategory] = categoryToUpdate;
		}
		return of(idCategoryToUpdate);
	}

	public delete(idCategoryToDelete: string): Observable<boolean> {
		this.currentCategories = this.currentCategories.filter((category: Category) => category.id != idCategoryToDelete);
		return of(true);
	}
}
