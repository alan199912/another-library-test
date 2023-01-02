import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarOverviewComponent } from './progress-bar-overview.component';

describe('ProgressBarOverviewComponent', () => {
  let component: ProgressBarOverviewComponent;
  let fixture: ComponentFixture<ProgressBarOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressBarOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
