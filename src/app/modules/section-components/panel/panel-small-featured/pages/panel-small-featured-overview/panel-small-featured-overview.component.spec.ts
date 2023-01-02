import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSmallFeaturedOverviewComponent } from './panel-small-featured-overview.component';

describe('PanelSmallFeaturedOverviewComponent', () => {
  let component: PanelSmallFeaturedOverviewComponent;
  let fixture: ComponentFixture<PanelSmallFeaturedOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelSmallFeaturedOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelSmallFeaturedOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
