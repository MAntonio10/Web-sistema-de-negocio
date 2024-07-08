import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleventasComponent } from './detalleventas.component';

describe('DetalleventasComponent', () => {
  let component: DetalleventasComponent;
  let fixture: ComponentFixture<DetalleventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleventasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
