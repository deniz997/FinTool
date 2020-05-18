import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualSlaVolumeComponent } from './actual-sla-volume.component';

describe('ActualSlaVolumeComponent', () => {
  let component: ActualSlaVolumeComponent;
  let fixture: ComponentFixture<ActualSlaVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualSlaVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualSlaVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
