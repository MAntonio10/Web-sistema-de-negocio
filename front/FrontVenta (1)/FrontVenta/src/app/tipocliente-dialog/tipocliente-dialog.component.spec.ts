import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoclienteDialogComponent } from './tipocliente-dialog.component';

describe('TipoclienteDialogComponent', () => {
  let component: TipoclienteDialogComponent;
  let fixture: ComponentFixture<TipoclienteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoclienteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoclienteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
