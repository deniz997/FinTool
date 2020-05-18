import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTravelRateComponent } from './department-travel-rate.component';

describe('DepartmentTravelRateComponent', () => {
  let component: DepartmentTravelRateComponent;
  let fixture: ComponentFixture<DepartmentTravelRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentTravelRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentTravelRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
