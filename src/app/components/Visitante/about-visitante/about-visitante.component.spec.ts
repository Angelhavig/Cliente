import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVisitanteComponent } from './about-visitante.component';

describe('AboutVisitanteComponent', () => {
  let component: AboutVisitanteComponent;
  let fixture: ComponentFixture<AboutVisitanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutVisitanteComponent]
    });
    fixture = TestBed.createComponent(AboutVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
