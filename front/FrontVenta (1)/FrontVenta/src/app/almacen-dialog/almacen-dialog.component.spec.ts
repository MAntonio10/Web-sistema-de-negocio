import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenDialogComponent } from './almacen-dialog.component';

describe('AlmacenDialogComponent', () => {
  let component: AlmacenDialogComponent;
  let fixture: ComponentFixture<AlmacenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmacenDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmacenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
