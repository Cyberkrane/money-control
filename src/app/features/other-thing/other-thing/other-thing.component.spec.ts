import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherThingComponent } from './other-thing.component';

describe('OtherThingComponent', () => {
  let component: OtherThingComponent;
  let fixture: ComponentFixture<OtherThingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherThingComponent]
    });
    fixture = TestBed.createComponent(OtherThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
