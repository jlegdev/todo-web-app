import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmComponent } from '@shared/ui/confirm/confirm.component';
import { DialogFormComponent } from '@shared/ui/dialog-form/dialog-form.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryViewContainerComponent } from './category-view/category-view-container/category-view-container.component';
import { CategoryViewPresentationComponent } from './category-view/category-view-presentation/category-view-presentation.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskNewComponent } from './task-new/task-new.component';
const AngularMaterialModules: any[] = [
	MatButtonModule,
	MatCardModule,
	MatDividerModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatSnackBarModule,
	MatProgressSpinnerModule,
];

@NgModule({
	declarations: [CategoryViewContainerComponent, CategoryViewPresentationComponent, CategoryEditComponent, TaskNewComponent, TaskEditComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModules, CategoryRoutingModule, ConfirmComponent, DialogFormComponent],
	exports: [CategoryViewContainerComponent],
	providers: [],
})
export class CategoryModule {}
