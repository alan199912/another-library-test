import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OBreadcrumbComponent } from './o-breadcrumb.component';

describe('OBreadcrumbComponent', () => {
  let component: OBreadcrumbComponent;
  let fixture: ComponentFixture<OBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OBreadcrumbComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
