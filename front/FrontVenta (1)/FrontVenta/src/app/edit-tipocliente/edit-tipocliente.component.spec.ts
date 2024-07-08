import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoclienteComponent } from './edit-tipocliente.component';

describe('EditTipoclienteComponent', () => {
  let component: EditTipoclienteComponent;
  let fixture: ComponentFixture<EditTipoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipoclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTipoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
