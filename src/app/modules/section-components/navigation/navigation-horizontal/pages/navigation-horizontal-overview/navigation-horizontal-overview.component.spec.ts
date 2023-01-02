import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHorizontalOverviewComponent } from './navigation-horizontal-overview.component';

describe('NavigationHorizontalOverviewComponent', () => {
  let component: NavigationHorizontalOverviewComponent;
  let fixture: ComponentFixture<NavigationHorizontalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationHorizontalOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationHorizontalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
