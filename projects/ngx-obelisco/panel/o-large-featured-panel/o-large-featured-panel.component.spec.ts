import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OLargeFeaturedPanelComponent } from './o-large-featured-panel.component';

describe('OLargeFeaturedPanelComponent', () => {
  let component: OLargeFeaturedPanelComponent;
  let fixture: ComponentFixture<OLargeFeaturedPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OLargeFeaturedPanelComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OLargeFeaturedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
