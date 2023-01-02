import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSimpleOverviewComponent } from './collapse-simple-overview.component';

describe('CollapseSimpleOverviewComponent', () => {
  let component: CollapseSimpleOverviewComponent;
  let fixture: ComponentFixture<CollapseSimpleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollapseSimpleOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CollapseSimpleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
