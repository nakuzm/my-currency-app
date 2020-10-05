import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyByDateComponent } from './currency-by-date.component';

describe('CurrencyByDateComponent', () => {
  let component: CurrencyByDateComponent;
  let fixture: ComponentFixture<CurrencyByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyByDateComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
