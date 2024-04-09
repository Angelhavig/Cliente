import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesconComponent } from './detallescon.component';

describe('DetallesconComponent', () => {
  let component: DetallesconComponent;
  let fixture: ComponentFixture<DetallesconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesconComponent]
    });
    fixture = TestBed.createComponent(DetallesconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
