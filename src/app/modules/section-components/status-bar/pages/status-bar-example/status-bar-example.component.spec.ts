import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarExampleComponent } from './status-bar-example.component';

describe('StatusBarExampleComponent', () => {
  let component: StatusBarExampleComponent;
  let fixture: ComponentFixture<StatusBarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusBarExampleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusBarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
