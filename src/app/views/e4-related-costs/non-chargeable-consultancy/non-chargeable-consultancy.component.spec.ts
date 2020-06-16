import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonChargeableConsultancyComponent } from './non-chargeable-consultancy.component';

describe('NonChargeableConsaltancyComponent', () => {
  let component: NonChargeableConsultancyComponent;
  let fixture: ComponentFixture<NonChargeableConsultancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonChargeableConsultancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonChargeableConsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
