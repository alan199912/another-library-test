import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessGroupOverviewComponent } from './access-group-overview.component';

describe('AccessGroupOverviewComponent', () => {
  let component: AccessGroupOverviewComponent;
  let fixture: ComponentFixture<AccessGroupOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessGroupOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessGroupOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
