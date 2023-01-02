import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseInfoApiComponent } from './collapse-info-api.component';

describe('CollapseInfoApiComponent', () => {
  let component: CollapseInfoApiComponent;
  let fixture: ComponentFixture<CollapseInfoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollapseInfoApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CollapseInfoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
