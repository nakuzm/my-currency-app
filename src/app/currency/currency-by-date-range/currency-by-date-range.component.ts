import { Component, OnInit } from '@angular/core';
import {iif, Observable, of} from 'rxjs';
import {Currency} from '../models/currency.model';
import {FormControl, FormGroup} from '@angular/forms';
import {CurrencyService} from '../services/currency.service';
import {catchError, delay, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-currency-by-date-range',
  templateUrl: './currency-by-date-range.component.html',
  styleUrls: ['./currency-by-date-range.component.scss']
})
export class CurrencyByDateRangeComponent implements OnInit {
  currencyList$: Observable<Currency[]>;
  currencySelectList$: Observable<Currency[]>;

  maxDate: Date = new Date();

  currencyForm = new FormGroup({
    baseCurrency: new FormControl(''),
    dateStart: new FormControl(''),
    dateEnd: new FormControl(''),
  });

  constructor(
    public currencyService: CurrencyService
  ) { }

  ngOnInit() {
    this.currencySelectList$ = this.currencyService.get();

    this.currencyList$ = this.currencyForm.valueChanges.pipe(
      startWith({baseCurrency: null, dateStart: null, dateEnd: null}),

      delay(200),
      distinctUntilChanged((a, b) =>
        {
          return this.currencyService.isMomentValuesEqual(a.dateStart, b.dateStart) &&
            this.currencyService.isMomentValuesEqual(a.dateEnd, b.dateEnd) &&
            a.baseCurrency === b.baseCurrency;
        }
      ),
      switchMap((formState) => this.currencyService.getRange(formState)),
    );
  }

  onClearClick() {
    this.currencyForm.reset();
  }

}
