import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationOverviewComponent } from './pagination-overview.component';

describe('PaginationOverviewComponent', () => {
  let component: PaginationOverviewComponent;
  let fixture: ComponentFixture<PaginationOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
