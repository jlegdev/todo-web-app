import { HttpHeaders } from '@angular/common/http';

export const HeadersConfigurationDefault = {
	headers: new HttpHeaders({
		Accept: 'application/json',
		'Content-Type': 'application/json',
	}),
};
