import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaItemParameterComponent } from './sla-item-parameter.component';

describe('SlaItemParameterComponent', () => {
  let component: SlaItemParameterComponent;
  let fixture: ComponentFixture<SlaItemParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaItemParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaItemParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
