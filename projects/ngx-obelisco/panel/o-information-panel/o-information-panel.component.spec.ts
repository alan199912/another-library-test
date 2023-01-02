import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OInformationPanelComponent } from './o-information-panel.component';

describe('OInformationPanelComponent', () => {
  let component: OInformationPanelComponent;
  let fixture: ComponentFixture<OInformationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OInformationPanelComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OInformationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
