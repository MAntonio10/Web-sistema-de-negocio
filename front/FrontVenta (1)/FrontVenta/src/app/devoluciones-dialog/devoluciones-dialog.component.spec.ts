import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionesDialogComponent } from './devoluciones-dialog.component';

describe('DevolucionesDialogComponent', () => {
  let component: DevolucionesDialogComponent;
  let fixture: ComponentFixture<DevolucionesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolucionesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolucionesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
