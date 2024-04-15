import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '@model/category.model';
import { IconEnum } from '@model/enum/icon.enum';

@Component({
	selector: 'app-home-presentation',
	templateUrl: './home-presentation.component.html',
	styleUrls: ['./home-presentation.component.scss'],
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePresentationComponent implements OnInit {
	@Input()
	public categories!: Category[];

	@Output()
	public onEmitCreateCategory: EventEmitter<void> = new EventEmitter<void>();
	@Output()
	public onEmitOnCategoryView: EventEmitter<Category> = new EventEmitter<Category>();

	public readonly IconEnum = IconEnum;
	constructor(private router: Router) {}

	ngOnInit(): void {}

	public onCreateCategory(): void {
		this.onEmitCreateCategory.emit();
	}

	public onCategoryView(category: Category): void {
		this.onEmitOnCategoryView.emit(category);
	}

	public trackCategory(index: number, category: Category): string {
		return category.id;
	}
}
