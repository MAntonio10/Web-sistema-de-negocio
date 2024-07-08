import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlmacenComponent } from './edit-almacen.component';

describe('EditAlmacenComponent', () => {
  let component: EditAlmacenComponent;
  let fixture: ComponentFixture<EditAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAlmacenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
