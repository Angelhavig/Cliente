import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpersonalComponent } from './addpersonal.component';

describe('AddpersonalComponent', () => {
  let component: AddpersonalComponent;
  let fixture: ComponentFixture<AddpersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpersonalComponent]
    });
    fixture = TestBed.createComponent(AddpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
