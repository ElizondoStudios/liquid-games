import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccioneMetodoComponent } from './seleccione-metodo.component';

describe('SeleccioneMetodoComponent', () => {
  let component: SeleccioneMetodoComponent;
  let fixture: ComponentFixture<SeleccioneMetodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccioneMetodoComponent]
    });
    fixture = TestBed.createComponent(SeleccioneMetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
