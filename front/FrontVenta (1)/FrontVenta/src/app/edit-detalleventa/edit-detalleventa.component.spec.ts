import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetalleventaComponent } from './edit-detalleventa.component';

describe('EditDetalleventaComponent', () => {
  let component: EditDetalleventaComponent;
  let fixture: ComponentFixture<EditDetalleventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDetalleventaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDetalleventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
