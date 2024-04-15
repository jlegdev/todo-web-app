import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Injectable({
	providedIn: 'root',
})
export class DialogService {
	constructor(private dialog: MatDialog) {}

	public open<T, R = any>(component: ComponentType<T> | unknown, data?: any): MatDialogRef<T, R> {
		let config: MatDialogConfig = new MatDialogConfig();
		config.panelClass = 'default-theme';
		config.data = data;

		return this.dialog.open(component as ComponentType<any>, config);
	}

	public closeAll(): void {
		this.dialog.closeAll();
	}
}
