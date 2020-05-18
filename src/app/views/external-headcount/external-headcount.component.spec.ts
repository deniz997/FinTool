import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalHeadcountComponent } from './external-headcount.component';

describe('ExternalHeadcountComponent', () => {
  let component: ExternalHeadcountComponent;
  let fixture: ComponentFixture<ExternalHeadcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalHeadcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalHeadcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
