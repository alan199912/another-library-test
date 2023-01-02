import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInformationApiComponent } from './panel-information-api.component';

describe('PanelInformationApiComponent', () => {
  let component: PanelInformationApiComponent;
  let fixture: ComponentFixture<PanelInformationApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelInformationApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelInformationApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
