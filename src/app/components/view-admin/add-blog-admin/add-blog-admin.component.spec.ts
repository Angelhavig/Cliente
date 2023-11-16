import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogAdminComponent } from './add-blog-admin.component';

describe('AddBlogAdminComponent', () => {
  let component: AddBlogAdminComponent;
  let fixture: ComponentFixture<AddBlogAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBlogAdminComponent]
    });
    fixture = TestBed.createComponent(AddBlogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
