import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcontratosComponent } from './editcontratos.component';

describe('EditcontratosComponent', () => {
  let component: EditcontratosComponent;
  let fixture: ComponentFixture<EditcontratosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditcontratosComponent]
    });
    fixture = TestBed.createComponent(EditcontratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
