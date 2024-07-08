import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProveedoresComponent } from './edit-proveedores.component';

describe('EditProveedoresComponent', () => {
  let component: EditProveedoresComponent;
  let fixture: ComponentFixture<EditProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
