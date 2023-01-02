import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionOverviewComponent } from './option-overview.component';

describe('OptionOverviewComponent', () => {
  let component: OptionOverviewComponent;
  let fixture: ComponentFixture<OptionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OptionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
