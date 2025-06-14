import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyModalComponent } from './money-modal.component';

describe('MoneyModalComponent', () => {
  let component: MoneyModalComponent;
  let fixture: ComponentFixture<MoneyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyModalComponent]
    });
    fixture = TestBed.createComponent(MoneyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
