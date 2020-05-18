import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalCostsParameterComponent } from './external-costs-parameter.component';

describe('ExternalCostsParameterComponent', () => {
  let component: ExternalCostsParameterComponent;
  let fixture: ComponentFixture<ExternalCostsParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalCostsParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalCostsParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
