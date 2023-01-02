import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseInfoExamplesComponent } from './collapse-info-examples.component';

describe('CollapseInfoExamplesComponent', () => {
  let component: CollapseInfoExamplesComponent;
  let fixture: ComponentFixture<CollapseInfoExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollapseInfoExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CollapseInfoExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
