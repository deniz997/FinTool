import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserParameterComponent } from './user-parameter.component';

describe('UserParameterComponent', () => {
  let component: UserParameterComponent;
  let fixture: ComponentFixture<UserParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
