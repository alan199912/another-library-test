import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkListOverviewComponent } from './link-list-overview.component';

describe('LinkListOverviewComponent', () => {
  let component: LinkListOverviewComponent;
  let fixture: ComponentFixture<LinkListOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkListOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LinkListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
