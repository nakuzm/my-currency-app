import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyByDateRangeComponent } from './currency-by-date-range.component';

describe('CurrencyByDateRangeComponent', () => {
  let component: CurrencyByDateRangeComponent;
  let fixture: ComponentFixture<CurrencyByDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyByDateRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyByDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
