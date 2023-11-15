import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosCategoriaComponent } from './juegos-categoria.component';

describe('JuegosCategoriaComponent', () => {
  let component: JuegosCategoriaComponent;
  let fixture: ComponentFixture<JuegosCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegosCategoriaComponent]
    });
    fixture = TestBed.createComponent(JuegosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
