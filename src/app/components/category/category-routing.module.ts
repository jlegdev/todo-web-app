import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryRoutes } from './category.routes';

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(CategoryRoutes)],
})
export class CategoryRoutingModule {}
