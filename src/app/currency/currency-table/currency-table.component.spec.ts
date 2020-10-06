import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyTableComponent } from './currency-table.component';

describe('CurrencyTableComponent', () => {
  let component: CurrencyTableComponent;
  let fixture: ComponentFixture<CurrencyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if isDateColumn is truthy, show date column', () => {
    component.isDateColumn = true;
    expect(component.displayedColumns).toContain('date');
  });

  it('if isDateColumn is falsy, do not show date column', () => {
    component.isDateColumn = false;
    expect(component.displayedColumns).not.toContain('date');
  });
});
