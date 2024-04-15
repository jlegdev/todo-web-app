import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-button-cancel',
	templateUrl: './button-cancel.component.html',
	styleUrls: ['./button-cancel.component.scss'],
	standalone: true,
	imports: [MatButtonModule],
})
export class ButtonCancelComponent {
	@Input()
	public isDisabled: boolean = false;
	@Input()
	public text: string = '';
	@Output()
	public emitClick: EventEmitter<void> = new EventEmitter<void>();
	constructor() {}

	ngOnInit(): void {}

	public onClick(): void {
		this.emitClick.emit();
	}
}
