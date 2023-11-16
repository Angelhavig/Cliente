import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactVisitanteComponent } from './contact-visitante.component';

describe('ContactVisitanteComponent', () => {
  let component: ContactVisitanteComponent;
  let fixture: ComponentFixture<ContactVisitanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactVisitanteComponent]
    });
    fixture = TestBed.createComponent(ContactVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
