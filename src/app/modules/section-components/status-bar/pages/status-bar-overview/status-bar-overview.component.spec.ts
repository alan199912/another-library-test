import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarOverviewComponent } from './status-bar-overview.component';

describe('StatusBarOverviewComponent', () => {
  let component: StatusBarOverviewComponent;
  let fixture: ComponentFixture<StatusBarOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusBarOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusBarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
