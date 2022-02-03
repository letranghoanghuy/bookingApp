import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorExtraInforComponent } from './doctor-extra-infor.component';

describe('DoctorExtraInforComponent', () => {
  let component: DoctorExtraInforComponent;
  let fixture: ComponentFixture<DoctorExtraInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorExtraInforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorExtraInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
