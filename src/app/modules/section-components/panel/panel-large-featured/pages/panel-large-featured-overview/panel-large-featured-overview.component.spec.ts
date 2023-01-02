import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLargeFeaturedOverviewComponent } from './panel-large-featured-overview.component';

describe('PanelLargeFeaturedOverviewComponent', () => {
  let component: PanelLargeFeaturedOverviewComponent;
  let fixture: ComponentFixture<PanelLargeFeaturedOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelLargeFeaturedOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelLargeFeaturedOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
