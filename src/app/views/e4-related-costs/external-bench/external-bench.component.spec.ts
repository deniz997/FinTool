import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalBenchComponent } from './external-bench.component';

describe('ExternalBenchComponent', () => {
  let component: ExternalBenchComponent;
  let fixture: ComponentFixture<ExternalBenchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalBenchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalBenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
