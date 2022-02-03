import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClinicComponent } from './detail-clinic.component';

describe('DetailClinicComponent', () => {
  let component: DetailClinicComponent;
  let fixture: ComponentFixture<DetailClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailClinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
