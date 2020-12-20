import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsViewComponent } from './admin-posts-view.component';

describe('AdminPostsViewComponent', () => {
  let component: AdminPostsViewComponent;
  let fixture: ComponentFixture<AdminPostsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
