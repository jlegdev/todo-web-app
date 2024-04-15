import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeadersConfigurationDefault } from '@api/http-configurations';
import { environment } from '@environments/environment';
import { Category, CategoryNotYetCreated } from '@model/category.model';
import { Task, TaskNotYetCreated } from '@model/task.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CategoryService {
	constructor(private httpClient: HttpClient) {}

	public getAll(): Observable<Category[]> {
		const url: string = `${environment.apiUrl}/${environment.api.category.url}`;
		const headersOptions: { headers: HttpHeaders } = HeadersConfigurationDefault;
		return this.httpClient.get<Category[]>(url, headersOptions);
	}

	public getTasks(idCategoryOfTasks: string): Observable<Task[]> {
		const url: string = `${environment.apiUrl}/${environment.api.category.getTasks.replace('{id}', idCategoryOfTasks)}`;
		const headersOptions: { headers: HttpHeaders } = HeadersConfigurationDefault;
		return this.httpClient.get<Task[]>(url, headersOptions);
	}

	public getOne(idCategoryToGet: string): Observable<Category> {
		const url: string = `${environment.apiUrl}/${environment.api.category.one.replace('{id}', idCategoryToGet)}`;
		const headersOptions: { headers: HttpHeaders } = HeadersConfigurationDefault;
		return this.httpClient.get<Category>(url, headersOptions);
	}

	public create(categoryToCreate: CategoryNotYetCreated): Observable<string> {
		const url: string = `${environment.apiUrl}/${environment.api.category.url}`;
		const headersOptions: { headers: HttpHeaders } = HeadersConfigurationDefault;
		return this.httpClient.post<string>(url, categoryToCreate, headersOptions);
	}

	public update(idCategoryToUpdate: string, categoryToUpdate: Category): Observable<string> {
		const url: string = `${environment.apiUrl}/${environment.api.category.one.replace('{id}', idCategoryToUpdate)}`;
		const headersOptions: { headers: HttpHeaders } = HeadersConfigurationDefault;
		return this.httpClient.put<string>(url, categoryToUpdate, headersOptions);
	}

	public delete(idCategoryToDelete: string): Observable<string> {
		const url: string = `${environment.apiUrl}/${environment.api.category.one.replace('{id}', idCategoryToDelete)}`;
		const headersOptions: { headers: HttpHeaders } = HeadersConfigurationDefault;
		return this.httpClient.delete<string>(url, headersOptions);
	}

	public addTask(idCategory: string, task: TaskNotYetCreated): Observable<Task> {
		const url: string = `${environment.apiUrl}/${environment.api.category.addTask.replace('{id}', idCategory)}`;
		const headersOptions: { headers: HttpHeaders } = HeadersConfigurationDefault;
		return this.httpClient.post<Task>(url, task, headersOptions);
	}
}
