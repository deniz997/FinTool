import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaReferenceComponent } from './sla-reference.component';

describe('SlaReferenceComponent', () => {
  let component: SlaReferenceComponent;
  let fixture: ComponentFixture<SlaReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
