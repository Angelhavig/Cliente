import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpresaAdminComponent } from './edit-empresa-admin.component';

describe('EditEmpresaAdminComponent', () => {
  let component: EditEmpresaAdminComponent;
  let fixture: ComponentFixture<EditEmpresaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEmpresaAdminComponent]
    });
    fixture = TestBed.createComponent(EditEmpresaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
