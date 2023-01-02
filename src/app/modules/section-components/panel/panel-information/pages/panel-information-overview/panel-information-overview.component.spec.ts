import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInformationOverviewComponent } from './panel-information-overview.component';

describe('PanelInformationOverviewComponent', () => {
  let component: PanelInformationOverviewComponent;
  let fixture: ComponentFixture<PanelInformationOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelInformationOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelInformationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
