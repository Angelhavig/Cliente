import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpersonalComponent } from './editpersonal.component';

describe('EditpersonalComponent', () => {
  let component: EditpersonalComponent;
  let fixture: ComponentFixture<EditpersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditpersonalComponent]
    });
    fixture = TestBed.createComponent(EditpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
