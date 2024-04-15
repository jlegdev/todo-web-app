import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotifService } from '@shared/service/notif.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
	private readonly _i18nNamespace: string = 'general.request';

	constructor(private router: Router, private notifService: NotifService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request).pipe(
			tap(
				(response: any) => {
					if (response instanceof HttpResponse) {
						this._handleSuccessResponse(response, request);
					}
				},
				(error: HttpErrorResponse) => {
					this._handleErrorResponse();
				}
			)
		);
	}

	/**
	 * Fonction qui gère les réponses succès
	 * @param response
	 * @param request
	 */
	private _handleSuccessResponse(response: HttpResponse<any>, request: HttpRequest<any>): void {
		if (request.method != 'GET') {
			this.notifService.success('Success');
		}
	}

	/**
	 * Fonction qui gère les erreurs réponses
	 * @param error
	 * @param request
	 */
	private _handleErrorResponse(): void {
		this.notifService.error('An error occured, please try again');
	}
}
