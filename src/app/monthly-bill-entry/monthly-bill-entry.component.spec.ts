import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyBillEntryComponent } from './monthly-bill-entry.component';

describe('MonthlyBillEntryComponent', () => {
  let component: MonthlyBillEntryComponent;
  let fixture: ComponentFixture<MonthlyBillEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyBillEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyBillEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
