import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsAddComponent } from './admin-posts-add.component';

describe('AdminPostsAddComponent', () => {
  let component: AdminPostsAddComponent;
  let fixture: ComponentFixture<AdminPostsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
