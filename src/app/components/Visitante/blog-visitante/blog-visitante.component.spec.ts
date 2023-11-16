import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogVisitanteComponent } from './blog-visitante.component';

describe('BlogVisitanteComponent', () => {
  let component: BlogVisitanteComponent;
  let fixture: ComponentFixture<BlogVisitanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogVisitanteComponent]
    });
    fixture = TestBed.createComponent(BlogVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
