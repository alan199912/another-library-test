import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationVerticalOverviewComponent } from './navigation-vertical-overview.component';

describe('NavigationVerticalOverviewComponent', () => {
  let component: NavigationVerticalOverviewComponent;
  let fixture: ComponentFixture<NavigationVerticalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationVerticalOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationVerticalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
