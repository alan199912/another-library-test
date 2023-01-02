import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSimpleApiComponent } from './collapse-simple-api.component';

describe('CollapseSimpleApiComponent', () => {
  let component: CollapseSimpleApiComponent;
  let fixture: ComponentFixture<CollapseSimpleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollapseSimpleApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CollapseSimpleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
