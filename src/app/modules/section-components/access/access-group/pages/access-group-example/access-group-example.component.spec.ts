import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessGroupExampleComponent } from './access-group-example.component';

describe('AccessGroupExampleComponent', () => {
  let component: AccessGroupExampleComponent;
  let fixture: ComponentFixture<AccessGroupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessGroupExampleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessGroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
