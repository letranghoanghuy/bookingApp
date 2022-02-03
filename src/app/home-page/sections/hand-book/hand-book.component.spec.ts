import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandBookComponent } from './hand-book.component';

describe('HandBookComponent', () => {
  let component: HandBookComponent;
  let fixture: ComponentFixture<HandBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
