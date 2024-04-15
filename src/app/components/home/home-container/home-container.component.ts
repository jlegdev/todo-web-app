import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryService } from '@api/data/category.service';
import { Category } from '@model/category.model';
import { RoutePathEnum } from '@model/route.path.enum';
import { DialogService } from '@shared/service/dialog.service';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { CategoryNewComponent } from '../category-new/category-new.component';

@Component({
	selector: 'app-home-container',
	templateUrl: './home-container.component.html',
	styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent implements OnInit {
	public $categories!: Observable<Category[]>;
	private _subsink: SubSink = new SubSink();

	constructor(private categoryService: CategoryService, private dialogService: DialogService, private router: Router) {}

	ngOnInit(): void {
		this._loadCategories();
	}

	ngOnDestroy(): void {
		this._subsink.unsubscribe();
	}

	private _loadCategories(): void {
		this.$categories = this.categoryService.getAll();
	}

	public onCreateCategory(): void {
		const dialogRef: MatDialogRef<CategoryNewComponent> = this.dialogService.open(CategoryNewComponent);
		this._subsink.add(dialogRef.afterClosed().subscribe((result) => this._loadCategories()));
	}

	public onCategoryView(category: Category): void {
		const url: string = `${RoutePathEnum.CATEGORY_VIEW.replace(':id', category.id)}`;
		this.router.navigate([url]);
	}
}
