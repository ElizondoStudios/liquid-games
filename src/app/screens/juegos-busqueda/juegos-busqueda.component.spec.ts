import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosBusquedaComponent } from './juegos-busqueda.component';

describe('JuegosBusquedaComponent', () => {
  let component: JuegosBusquedaComponent;
  let fixture: ComponentFixture<JuegosBusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegosBusquedaComponent]
    });
    fixture = TestBed.createComponent(JuegosBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
