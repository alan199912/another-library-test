import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertOverviewComponent } from './alert-overview.component';

describe('AlertOverviewComponent', () => {
  let component: AlertOverviewComponent;
  let fixture: ComponentFixture<AlertOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
