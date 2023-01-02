import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSimpleComponent } from './collapse-simple.component';

describe('CollapseSimpleComponent', () => {
  let component: CollapseSimpleComponent;
  let fixture: ComponentFixture<CollapseSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollapseSimpleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CollapseSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
