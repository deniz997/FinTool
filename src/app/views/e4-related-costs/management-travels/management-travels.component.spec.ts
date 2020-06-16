import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTravelsComponent } from './management-travels.component';

describe('ManagementTravelsComponent', () => {
  let component: ManagementTravelsComponent;
  let fixture: ComponentFixture<ManagementTravelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementTravelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
