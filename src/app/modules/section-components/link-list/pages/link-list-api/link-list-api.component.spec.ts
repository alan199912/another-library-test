import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkListApiComponent } from './link-list-api.component';

describe('LinkListApiComponent', () => {
  let component: LinkListApiComponent;
  let fixture: ComponentFixture<LinkListApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkListApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LinkListApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
