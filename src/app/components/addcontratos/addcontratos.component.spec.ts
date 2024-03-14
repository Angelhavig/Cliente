import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcontratosComponent } from './addcontratos.component';

describe('AddcontratosComponent', () => {
  let component: AddcontratosComponent;
  let fixture: ComponentFixture<AddcontratosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcontratosComponent]
    });
    fixture = TestBed.createComponent(AddcontratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
