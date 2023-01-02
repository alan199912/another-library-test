import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSmallFeaturedComponent } from './panel-small-featured.component';

describe('PanelSmallFeaturedComponent', () => {
  let component: PanelSmallFeaturedComponent;
  let fixture: ComponentFixture<PanelSmallFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelSmallFeaturedComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelSmallFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
