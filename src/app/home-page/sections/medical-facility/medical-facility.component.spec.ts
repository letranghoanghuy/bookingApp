import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFacilityComponent } from './medical-facility.component';

describe('MedicalFacilityComponent', () => {
  let component: MedicalFacilityComponent;
  let fixture: ComponentFixture<MedicalFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
