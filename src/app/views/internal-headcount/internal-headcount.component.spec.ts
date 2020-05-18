import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalHeadcountComponent } from './internal-headcount.component';

describe('InternalHeadcountComponent', () => {
  let component: InternalHeadcountComponent;
  let fixture: ComponentFixture<InternalHeadcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalHeadcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalHeadcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
