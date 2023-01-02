import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLargeFeaturedApiComponent } from './panel-large-featured-api.component';

describe('PanelLargeFeaturedApiComponent', () => {
  let component: PanelLargeFeaturedApiComponent;
  let fixture: ComponentFixture<PanelLargeFeaturedApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelLargeFeaturedApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelLargeFeaturedApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
