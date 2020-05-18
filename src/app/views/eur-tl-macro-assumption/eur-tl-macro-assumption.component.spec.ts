import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EurTlMacroAssumptionComponent } from './eur-tl-macro-assumption.component';

describe('EurTlMacroAssumptionComponent', () => {
  let component: EurTlMacroAssumptionComponent;
  let fixture: ComponentFixture<EurTlMacroAssumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EurTlMacroAssumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EurTlMacroAssumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
