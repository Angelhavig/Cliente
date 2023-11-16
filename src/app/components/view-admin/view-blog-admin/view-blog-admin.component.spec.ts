import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBlogAdminComponent } from './view-blog-admin.component';

describe('ViewBlogAdminComponent', () => {
  let component: ViewBlogAdminComponent;
  let fixture: ComponentFixture<ViewBlogAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBlogAdminComponent]
    });
    fixture = TestBed.createComponent(ViewBlogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
