import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { RoutePathEnum } from '@model/route.path.enum';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	standalone: true,
	imports: [MatToolbarModule],
})
export class NavbarComponent {
	public constructor(private router: Router) {}
	public onHomeView(): void {
		this.router.navigate([RoutePathEnum.HOME]);
	}
}
