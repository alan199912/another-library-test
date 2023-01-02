import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardContainerHorizontalComponent } from './o-card-container-horizontal.component';

describe('OCardContainerHorizontalComponent', () => {
  let component: OCardContainerHorizontalComponent;
  let fixture: ComponentFixture<OCardContainerHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardContainerHorizontalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardContainerHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
