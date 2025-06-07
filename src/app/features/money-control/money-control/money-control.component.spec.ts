import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyControlComponent } from './money-control.component';

describe('MoneyControlComponent', () => {
  let component: MoneyControlComponent;
  let fixture: ComponentFixture<MoneyControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyControlComponent]
    });
    fixture = TestBed.createComponent(MoneyControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
