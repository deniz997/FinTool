import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgkCostsParameterComponent } from './pgk-costs-parameter.component';

describe('PgkCostsParameterComponent', () => {
  let component: PgkCostsParameterComponent;
  let fixture: ComponentFixture<PgkCostsParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgkCostsParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgkCostsParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
