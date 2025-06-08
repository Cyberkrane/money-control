import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyDropdownComponent } from './money-dropdown.component';

describe('MoneyDropdownComponent', () => {
  let component: MoneyDropdownComponent;
  let fixture: ComponentFixture<MoneyDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyDropdownComponent]
    });
    fixture = TestBed.createComponent(MoneyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
