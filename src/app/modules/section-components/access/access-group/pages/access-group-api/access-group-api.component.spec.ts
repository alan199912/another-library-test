import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessGroupApiComponent } from './access-group-api.component';

describe('AccessGroupApiComponent', () => {
  let component: AccessGroupApiComponent;
  let fixture: ComponentFixture<AccessGroupApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessGroupApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessGroupApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
