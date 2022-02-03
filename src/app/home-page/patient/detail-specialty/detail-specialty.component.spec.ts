import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSpecialtyComponent } from './detail-specialty.component';

describe('DetailSpecialtyComponent', () => {
  let component: DetailSpecialtyComponent;
  let fixture: ComponentFixture<DetailSpecialtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSpecialtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
