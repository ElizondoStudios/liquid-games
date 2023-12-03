import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaRealizadaComponent } from './venta-realizada.component';

describe('VentaRealizadaComponent', () => {
  let component: VentaRealizadaComponent;
  let fixture: ComponentFixture<VentaRealizadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaRealizadaComponent]
    });
    fixture = TestBed.createComponent(VentaRealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
