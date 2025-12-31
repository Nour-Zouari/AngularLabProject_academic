import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEvenementComponent } from './modal-evenement.component';

describe('ModalEvenementComponent', () => {
  let component: ModalEvenementComponent;
  let fixture: ComponentFixture<ModalEvenementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEvenementComponent]
    });
    fixture = TestBed.createComponent(ModalEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
