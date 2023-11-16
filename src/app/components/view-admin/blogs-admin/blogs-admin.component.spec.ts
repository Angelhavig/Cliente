import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsAdminComponent } from './blogs-admin.component';

describe('BlogsAdminComponent', () => {
  let component: BlogsAdminComponent;
  let fixture: ComponentFixture<BlogsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsAdminComponent]
    });
    fixture = TestBed.createComponent(BlogsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
