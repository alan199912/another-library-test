import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseInfoOverviewComponent } from './collapse-info-overview.component';

describe('CollapseInfoOverviewComponent', () => {
  let component: CollapseInfoOverviewComponent;
  let fixture: ComponentFixture<CollapseInfoOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollapseInfoOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CollapseInfoOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
