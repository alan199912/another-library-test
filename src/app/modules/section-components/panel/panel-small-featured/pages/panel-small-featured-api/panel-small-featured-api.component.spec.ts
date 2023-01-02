import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSmallFeaturedApiComponent } from './panel-small-featured-api.component';

describe('PanelSmallFeaturedApiComponent', () => {
  let component: PanelSmallFeaturedApiComponent;
  let fixture: ComponentFixture<PanelSmallFeaturedApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelSmallFeaturedApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelSmallFeaturedApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
