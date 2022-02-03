import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutStandingDoctorComponent } from './out-standing-doctor.component';

describe('OutStandingDoctorComponent', () => {
  let component: OutStandingDoctorComponent;
  let fixture: ComponentFixture<OutStandingDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutStandingDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutStandingDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
