import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaVisitanteComponent } from './empresa-visitante.component';

describe('EmpresaVisitanteComponent', () => {
  let component: EmpresaVisitanteComponent;
  let fixture: ComponentFixture<EmpresaVisitanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaVisitanteComponent]
    });
    fixture = TestBed.createComponent(EmpresaVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
