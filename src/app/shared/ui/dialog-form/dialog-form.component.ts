import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonCancelComponent } from '../button-cancel/button-cancel.component';
import { ButtonValidateComponent } from '../button-validate/button-validate.component';

@Component({
	selector: 'app-dialog-form',
	templateUrl: './dialog-form.component.html',
	styleUrls: ['./dialog-form.component.scss'],
	standalone: true,
	imports: [MatDialogModule, ButtonCancelComponent, ButtonValidateComponent],
})
export class DialogFormComponent {
	@Input()
	public title!: string;
	@Input()
	public isValidDisabled: boolean = false;
	@Output()
	public onEmitValidateClick: EventEmitter<void> = new EventEmitter<void>();
	@Output()
	public onEmitCloseClick: EventEmitter<void> = new EventEmitter<void>();
	ngOnInit(): void {}

	public constructor() {}

	public onCloseClick(): void {
		this.onEmitCloseClick.emit();
	}

	public onValidateClick(): void {
		this.onEmitValidateClick.emit();
	}
}
