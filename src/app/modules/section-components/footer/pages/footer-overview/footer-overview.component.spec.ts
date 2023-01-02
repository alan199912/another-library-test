import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOverviewComponent } from './footer-overview.component';

describe('FooterOverviewComponent', () => {
  let component: FooterOverviewComponent;
  let fixture: ComponentFixture<FooterOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
