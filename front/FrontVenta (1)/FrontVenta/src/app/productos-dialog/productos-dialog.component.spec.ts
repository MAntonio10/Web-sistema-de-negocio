import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDialogComponent } from './productos-dialog.component';

describe('ProductosDialogComponent', () => {
  let component: ProductosDialogComponent;
  let fixture: ComponentFixture<ProductosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
