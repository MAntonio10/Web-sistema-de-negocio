import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoclienteComponent } from './tipocliente.component';

describe('TipoclienteComponent', () => {
  let component: TipoclienteComponent;
  let fixture: ComponentFixture<TipoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
