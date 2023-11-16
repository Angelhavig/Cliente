import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogAdminComponent } from './edit-blog-admin.component';

describe('EditBlogAdminComponent', () => {
  let component: EditBlogAdminComponent;
  let fixture: ComponentFixture<EditBlogAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBlogAdminComponent]
    });
    fixture = TestBed.createComponent(EditBlogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
