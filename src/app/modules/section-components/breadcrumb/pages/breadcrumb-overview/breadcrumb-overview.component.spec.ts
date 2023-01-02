import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbOverviewComponent } from './breadcrumb-overview.component';

describe('BreadcrumbOverviewComponent', () => {
  let component: BreadcrumbOverviewComponent;
  let fixture: ComponentFixture<BreadcrumbOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
