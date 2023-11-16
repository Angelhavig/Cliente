import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpresaAdminComponent } from './add-empresa-admin.component';

describe('AddEmpresaAdminComponent', () => {
  let component: AddEmpresaAdminComponent;
  let fixture: ComponentFixture<AddEmpresaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmpresaAdminComponent]
    });
    fixture = TestBed.createComponent(AddEmpresaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
