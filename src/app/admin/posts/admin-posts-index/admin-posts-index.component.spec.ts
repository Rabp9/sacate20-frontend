import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsIndexComponent } from './admin-posts-index.component';

describe('AdminPostsIndexComponent', () => {
  let component: AdminPostsIndexComponent;
  let fixture: ComponentFixture<AdminPostsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
