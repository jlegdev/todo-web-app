import { Routes } from '@angular/router';
import { HomeContainerComponent } from './components/home/home-container/home-container.component';
import { RoutePathEnum } from './model/route.path.enum';

export const appRoutes: Routes = [
	{
		path: RoutePathEnum.HOME,
		component: HomeContainerComponent,
	},
	{
		path: RoutePathEnum.CATEGORY_VIEW,
		loadChildren: () => import('@components/category/category.module').then((m) => m.CategoryModule),
	},
	{
		path: '**',
		redirectTo: RoutePathEnum.HOME,
	},
];
