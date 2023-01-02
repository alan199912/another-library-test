import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInformationExamplesComponent } from './panel-information-examples.component';

describe('PanelInformationExamplesComponent', () => {
  let component: PanelInformationExamplesComponent;
  let fixture: ComponentFixture<PanelInformationExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelInformationExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelInformationExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
