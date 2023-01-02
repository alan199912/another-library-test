import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarDemoComponent } from './status-bar-demo.component';

describe('StatusBarDemoComponent', () => {
  let component: StatusBarDemoComponent;
  let fixture: ComponentFixture<StatusBarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusBarDemoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusBarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
