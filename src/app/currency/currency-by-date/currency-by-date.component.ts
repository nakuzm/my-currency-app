import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CurrencyService} from '../services/currency.service';
import {catchError, delay, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';
import {iif, Observable, of} from 'rxjs';
import {Currency} from '../models/currency.model';

@Component({
  selector: 'app-currency-by-date',
  templateUrl: './currency-by-date.component.html',
  styleUrls: ['./currency-by-date.component.scss']
})
export class CurrencyByDateComponent implements OnInit {
  currencyList$: Observable<Currency[]>;
  currencySelectList$: Observable<Currency[]>;
  maxDate: Date = new Date();

  currencyForm = new FormGroup({
    date: new FormControl(null),
    baseCurrency: new FormControl(''),
  });

  constructor(
    public currencyService: CurrencyService
  ) { }

  ngOnInit() {
    this.currencySelectList$ = this.currencyService.get();

    this.currencyList$ = this.currencyForm.valueChanges.pipe(
      startWith({date: null, baseCurrency: null}),

      delay(200),
      distinctUntilChanged((a, b) =>
        {
          return this.currencyService.isMomentValuesEqual(a.date, b.date) &&
            a.baseCurrency === b.baseCurrency;
        }
      ),

      switchMap((formState) => this.currencyService.get(formState)),
    );
  }

  onClearClick() {
    this.currencyForm.reset();
  }

}
