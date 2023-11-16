import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpresaAdminComponent } from './view-empresa-admin.component';

describe('ViewEmpresaAdminComponent', () => {
  let component: ViewEmpresaAdminComponent;
  let fixture: ComponentFixture<ViewEmpresaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmpresaAdminComponent]
    });
    fixture = TestBed.createComponent(ViewEmpresaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
