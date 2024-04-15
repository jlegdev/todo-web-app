import { Routes } from '@angular/router';
import { RoutePathEnum } from '@model/route.path.enum';
import { CategoryViewContainerComponent } from './category-view/category-view-container/category-view-container.component';

// come from category/:id
export const CategoryRoutes: Routes = [
	{
		path: '',
		component: CategoryViewContainerComponent,
	},
	{
		path: '**',
		redirectTo: RoutePathEnum.HOME,
	},
];
