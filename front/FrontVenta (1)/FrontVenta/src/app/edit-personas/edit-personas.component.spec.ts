import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonasComponent } from './edit-personas.component';

describe('EditPersonasComponent', () => {
  let component: EditPersonasComponent;
  let fixture: ComponentFixture<EditPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
