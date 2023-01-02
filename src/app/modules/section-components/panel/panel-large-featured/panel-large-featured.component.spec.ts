import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLargeFeaturedComponent } from './panel-large-featured.component';

describe('PanelLargeFeaturedComponent', () => {
  let component: PanelLargeFeaturedComponent;
  let fixture: ComponentFixture<PanelLargeFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelLargeFeaturedComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelLargeFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
