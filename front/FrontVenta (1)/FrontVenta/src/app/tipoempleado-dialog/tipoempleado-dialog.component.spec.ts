import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoempleadoDialogComponent } from './tipoempleado-dialog.component';

describe('TipoempleadoDialogComponent', () => {
  let component: TipoempleadoDialogComponent;
  let fixture: ComponentFixture<TipoempleadoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoempleadoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoempleadoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
