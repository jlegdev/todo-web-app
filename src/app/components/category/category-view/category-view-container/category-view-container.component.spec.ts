import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryViewContainerComponent } from './category-view-container.component';

describe('CategoryViewContainerComponent', () => {
  let component: CategoryViewContainerComponent;
  let fixture: ComponentFixture<CategoryViewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryViewContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
