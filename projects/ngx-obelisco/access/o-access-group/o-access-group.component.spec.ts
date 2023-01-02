import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OAccessGroupComponent } from './o-access-group.component';

describe('OAccessGroupComponent', () => {
  let component: OAccessGroupComponent;
  let fixture: ComponentFixture<OAccessGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OAccessGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OAccessGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
