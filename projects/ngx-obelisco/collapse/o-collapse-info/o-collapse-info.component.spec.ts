import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCollapseInfoComponent } from './o-collapse-info.component';

describe('OCollapseInfoComponent', () => {
  let component: OCollapseInfoComponent;
  let fixture: ComponentFixture<OCollapseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCollapseInfoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCollapseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
