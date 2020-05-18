import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E4RelatedCostsComponent } from './e4-related-costs.component';

describe('E4RelatedCostsComponent', () => {
  let component: E4RelatedCostsComponent;
  let fixture: ComponentFixture<E4RelatedCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E4RelatedCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E4RelatedCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
