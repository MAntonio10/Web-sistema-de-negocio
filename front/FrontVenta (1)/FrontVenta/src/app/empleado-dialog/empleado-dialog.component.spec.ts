import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDialogComponent } from './empleado-dialog.component';

describe('EmpleadoDialogComponent', () => {
  let component: EmpleadoDialogComponent;
  let fixture: ComponentFixture<EmpleadoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
