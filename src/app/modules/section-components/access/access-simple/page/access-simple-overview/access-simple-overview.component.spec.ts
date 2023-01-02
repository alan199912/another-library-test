import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSimpleOverviewComponent } from './access-simple-overview.component';

describe('AccessSimpleOverviewComponent', () => {
  let component: AccessSimpleOverviewComponent;
  let fixture: ComponentFixture<AccessSimpleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessSimpleOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessSimpleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
