import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkListExamplesComponent } from './link-list-examples.component';

describe('LinkListExamplesComponent', () => {
  let component: LinkListExamplesComponent;
  let fixture: ComponentFixture<LinkListExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkListExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LinkListExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
