import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresDialogComponent } from './proveedores-dialog.component';

describe('ProveedoresDialogComponent', () => {
  let component: ProveedoresDialogComponent;
  let fixture: ComponentFixture<ProveedoresDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoresDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
