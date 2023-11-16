import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsVisitanteComponent } from './blogs-visitante.component';

describe('BlogsVisitanteComponent', () => {
  let component: BlogsVisitanteComponent;
  let fixture: ComponentFixture<BlogsVisitanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsVisitanteComponent]
    });
    fixture = TestBed.createComponent(BlogsVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
