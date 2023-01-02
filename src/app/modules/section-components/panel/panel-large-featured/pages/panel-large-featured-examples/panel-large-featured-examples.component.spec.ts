import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLargeFeaturedExamplesComponent } from './panel-large-featured-examples.component';

describe('PanelLargeFeaturedExamplesComponent', () => {
  let component: PanelLargeFeaturedExamplesComponent;
  let fixture: ComponentFixture<PanelLargeFeaturedExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelLargeFeaturedExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelLargeFeaturedExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
