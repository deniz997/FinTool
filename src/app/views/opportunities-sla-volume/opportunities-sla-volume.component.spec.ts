import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesSlaVolumeComponent } from './opportunities-sla-volume.component';

describe('OpportunitiesSlaVolumeComponent', () => {
  let component: OpportunitiesSlaVolumeComponent;
  let fixture: ComponentFixture<OpportunitiesSlaVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitiesSlaVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesSlaVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
