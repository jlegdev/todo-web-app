import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Task, TaskNotYetCreated } from '@model/task.model';
import { Observable } from 'rxjs';
import { HeadersConfigurationDefault } from '../http-configurations';

@Injectable({
	providedIn: 'root',
})
export class TaskService {
	constructor(private httpClient: HttpClient) {}

	public getAll(): Observable<Task[]> {
		const url: string = `${environment.apiUrl}/${environment.api.task.url}`;
		const headersOptions: { headers: HttpHeaders } = HeadersConfigurationDefault;
		return this.httpClient.get<Task[]>(url, headersOptions);
	}

	public getOne(idTaskToGet: string): Observable<Task> {
		const url: string = `${environment.apiUrl}/${environment.api.task.one.replace('{id}', idTaskToGet)}`;
		const headersOptions: { headers: HttpHeaders } = HeadersConfigurationDefault;
		return this.httpClient.get<Task>(url, headersOptions);
	}

	public create(taskToCreate: TaskNotYetCreated): Observable<string> {
		const url: string = `${environment.apiUrl}/${environment.api.task.url}`;
		const headersOptions: { headers: HttpHeaders } = HeadersConfigurationDefault;
		return this.httpClient.post<string>(url, taskToCreate, headersOptions);
	}

	public update(idTaskToUpdate: string, taskToUpdate: Task): Observable<string> {
		const url: string = `${environment.apiUrl}/${environment.api.task.one.replace('{id}', idTaskToUpdate)}`;
		const headersOptions: { headers: HttpHeaders } = HeadersConfigurationDefault;
		return this.httpClient.put<string>(url, taskToUpdate, headersOptions);
	}

	public delete(idTaskToDelete: string): Observable<void> {
		const url: string = `${environment.apiUrl}/${environment.api.task.one.replace('{id}', idTaskToDelete)}`;
		const headersOptions: { headers: HttpHeaders } = HeadersConfigurationDefault;
		return this.httpClient.delete<void>(url, headersOptions);
	}
}
