import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostsEditComponent } from './admin-posts-edit.component';

describe('AdminPostsEditComponent', () => {
  let component: AdminPostsEditComponent;
  let fixture: ComponentFixture<AdminPostsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
