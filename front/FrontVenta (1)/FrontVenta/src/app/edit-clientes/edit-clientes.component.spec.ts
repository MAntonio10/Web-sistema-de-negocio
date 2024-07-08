import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientesComponent } from './edit-clientes.component';

describe('EditClientesComponent', () => {
  let component: EditClientesComponent;
  let fixture: ComponentFixture<EditClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
