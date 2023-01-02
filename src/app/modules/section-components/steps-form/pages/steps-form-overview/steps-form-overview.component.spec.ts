import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsFormOverviewComponent } from './steps-form-overview.component';

describe('StepsFormOverviewComponent', () => {
  let component: StepsFormOverviewComponent;
  let fixture: ComponentFixture<StepsFormOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepsFormOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StepsFormOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
