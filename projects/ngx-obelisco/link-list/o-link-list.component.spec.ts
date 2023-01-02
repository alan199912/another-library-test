import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OLinkListComponent } from './o-link-list.component';

describe('OLinkListComponent', () => {
  let component: OLinkListComponent;
  let fixture: ComponentFixture<OLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OLinkListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
