import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCenterParameterComponent } from './cost-center-parameter.component';

describe('CostCenterParameterComponent', () => {
  let component: CostCenterParameterComponent;
  let fixture: ComponentFixture<CostCenterParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostCenterParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostCenterParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
