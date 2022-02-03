import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSpecialtyComponent } from './manage-specialty.component';

describe('ManageSpecialtyComponent', () => {
  let component: ManageSpecialtyComponent;
  let fixture: ComponentFixture<ManageSpecialtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSpecialtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
