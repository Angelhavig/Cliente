import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasVisitanteComponent } from './empresas-visitante.component';

describe('EmpresasVisitanteComponent', () => {
  let component: EmpresasVisitanteComponent;
  let fixture: ComponentFixture<EmpresasVisitanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresasVisitanteComponent]
    });
    fixture = TestBed.createComponent(EmpresasVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
