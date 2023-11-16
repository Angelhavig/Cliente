import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVisitanteComponent } from './home-visitante.component';

describe('HomeVisitanteComponent', () => {
  let component: HomeVisitanteComponent;
  let fixture: ComponentFixture<HomeVisitanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeVisitanteComponent]
    });
    fixture = TestBed.createComponent(HomeVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
