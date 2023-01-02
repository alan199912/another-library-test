import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessListOverviewComponent } from './access-list-overview.component';

describe('AccessListOverviewComponent', () => {
  let component: AccessListOverviewComponent;
  let fixture: ComponentFixture<AccessListOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessListOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
