import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarApiComponent } from './status-bar-api.component';

describe('StatusBarApiComponent', () => {
  let component: StatusBarApiComponent;
  let fixture: ComponentFixture<StatusBarApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusBarApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusBarApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
