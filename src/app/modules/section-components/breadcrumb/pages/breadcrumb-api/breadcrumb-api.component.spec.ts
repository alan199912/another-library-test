import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbApiComponent } from './breadcrumb-api.component';

describe('BreadcrumbApiComponent', () => {
  let component: BreadcrumbApiComponent;
  let fixture: ComponentFixture<BreadcrumbApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
