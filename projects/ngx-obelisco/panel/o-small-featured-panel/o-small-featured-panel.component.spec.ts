import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSmallFeaturedPanelComponent } from './o-small-featured-panel.component';

describe('OSmallFeaturedPanelComponent', () => {
  let component: OSmallFeaturedPanelComponent;
  let fixture: ComponentFixture<OSmallFeaturedPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OSmallFeaturedPanelComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OSmallFeaturedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
