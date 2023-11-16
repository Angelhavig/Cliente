import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosVisitanteComponent } from './servicios-visitante.component';

describe('ServiciosVisitanteComponent', () => {
  let component: ServiciosVisitanteComponent;
  let fixture: ComponentFixture<ServiciosVisitanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosVisitanteComponent]
    });
    fixture = TestBed.createComponent(ServiciosVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
