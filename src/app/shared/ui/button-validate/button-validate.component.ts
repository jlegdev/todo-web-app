import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-button-validate',
	templateUrl: './button-validate.component.html',
	styleUrls: ['./button-validate.component.scss'],
	standalone: true,
	imports: [MatButtonModule],
})
export class ButtonValidateComponent implements OnInit {
	@Input()
	public text!: string;
	@Input()
	public isDisabled: boolean = false;
	@Output()
	public emitClick: EventEmitter<void> = new EventEmitter<void>();
	constructor() {}

	ngOnInit(): void {}

	public onClick(): void {
		this.emitClick.emit();
	}
}
