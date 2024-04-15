import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryViewPresentationComponent } from './category-view-presentation.component';

describe('CategoryViewPresentationComponent', () => {
  let component: CategoryViewPresentationComponent;
  let fixture: ComponentFixture<CategoryViewPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryViewPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryViewPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
