import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSimpleExamplesComponent } from './collapse-simple-examples.component';

describe('CollapseSimpleExamplesComponent', () => {
  let component: CollapseSimpleExamplesComponent;
  let fixture: ComponentFixture<CollapseSimpleExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollapseSimpleExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CollapseSimpleExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
