import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSmallFeaturedExamplesComponent } from './panel-small-featured-examples.component';

describe('PanelSmallFeaturedExamplesComponent', () => {
  let component: PanelSmallFeaturedExamplesComponent;
  let fixture: ComponentFixture<PanelSmallFeaturedExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelSmallFeaturedExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelSmallFeaturedExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
