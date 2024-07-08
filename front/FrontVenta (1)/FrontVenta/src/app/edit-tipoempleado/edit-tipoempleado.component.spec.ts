import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoempleadoComponent } from './edit-tipoempleado.component';

describe('EditTipoempleadoComponent', () => {
  let component: EditTipoempleadoComponent;
  let fixture: ComponentFixture<EditTipoempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipoempleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTipoempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
