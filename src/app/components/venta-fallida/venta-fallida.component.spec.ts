import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaFallidaComponent } from './venta-fallida.component';

describe('VentaFallidaComponent', () => {
  let component: VentaFallidaComponent;
  let fixture: ComponentFixture<VentaFallidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaFallidaComponent]
    });
    fixture = TestBed.createComponent(VentaFallidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
