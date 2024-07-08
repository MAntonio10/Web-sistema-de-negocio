import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleventaDialogComponent } from './detalleventa-dialog.component';

describe('DetalleventaDialogComponent', () => {
  let component: DetalleventaDialogComponent;
  let fixture: ComponentFixture<DetalleventaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleventaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleventaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
