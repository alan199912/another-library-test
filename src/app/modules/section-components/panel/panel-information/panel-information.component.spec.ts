import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInformationComponent } from './panel-information.component';

describe('PanelInformationComponent', () => {
  let component: PanelInformationComponent;
  let fixture: ComponentFixture<PanelInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelInformationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PanelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
