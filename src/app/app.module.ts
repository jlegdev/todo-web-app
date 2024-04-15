import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CategoryNewComponent } from '@components/home/category-new/category-new.component';
import { HomeContainerComponent } from '@components/home/home-container/home-container.component';
import { DialogFormComponent } from '@shared/ui/dialog-form/dialog-form.component';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePresentationComponent } from './components/home/home-presentation/home-presentation.component';
import { HttpRequestInterceptor } from './core/interceptor/http.interceptor';
import { NavbarComponent } from './core/components/navbar/navbar.component';
const AngularMaterialModules: any[] = [
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatDividerModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatSnackBarModule,
];

const Components: any[] = [DialogFormComponent, NavbarComponent];

const AngularModule: any[] = [CommonModule, BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule];

const InternalModule: any[] = [AppRoutingModule, ToastrModule.forRoot()];

const Providers: Provider[] = [{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }];
@NgModule({
	declarations: [AppComponent, CategoryNewComponent, HomeContainerComponent, HomePresentationComponent],
	imports: [AngularModule, InternalModule, AngularMaterialModules, Components],
	exports: [],
	providers: Providers,
	bootstrap: [AppComponent],
})
export class AppModule {}
