import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDevolucionesComponent } from './edit-devoluciones.component';

describe('EditDevolucionesComponent', () => {
  let component: EditDevolucionesComponent;
  let fixture: ComponentFixture<EditDevolucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDevolucionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDevolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
