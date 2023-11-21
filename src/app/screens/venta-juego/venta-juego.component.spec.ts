import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaJuegoComponent } from './venta-juego.component';

describe('VentaJuegoComponent', () => {
  let component: VentaJuegoComponent;
  let fixture: ComponentFixture<VentaJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaJuegoComponent]
    });
    fixture = TestBed.createComponent(VentaJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
