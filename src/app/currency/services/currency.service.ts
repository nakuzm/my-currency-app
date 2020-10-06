import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Currency } from '../models/currency.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  url = 'https://api.exchangeratesapi.io/';

  constructor(
    private http: HttpClient,
  ) { }

  getParams({date, baseCurrency}: {
    date: moment.Moment,
    baseCurrency: string,
  }): string {
    const dateFormatted = this.formatDate(date);
    return (dateFormatted ? dateFormatted : 'latest') +
      (baseCurrency ? '?base=' + baseCurrency : '');
  }

  getRangeParams({dateStart, dateEnd, baseCurrency}: {
    dateStart: moment.Moment,
    dateEnd: moment.Moment,
    baseCurrency: string,
  }): string {
    const dateStartFormatted = this.formatDate(dateStart);
    const dateEndFormatted = this.formatDate(dateEnd);

    if (dateStartFormatted && dateEndFormatted) {
      return `history?start_at=${dateStartFormatted}&end_at=${dateEndFormatted}` +
        (baseCurrency ? '&base=' + baseCurrency : '');
    }
  }

  get(formState?): Observable<Currency[]> {
    const params: string = formState ? this.getParams(formState) : 'latest';

    return this.http.get(this.url + params).pipe(
      map((res: any) => Object.keys(res.rates)
        .sort()
        .map((curr) => new Currency(curr, res.rates[curr]))
      ),
      catchError(error => {
        console.error(error);
        return of([]);
      })
    );
  }

  getRange(formState): Observable<Currency[]> {
    const params: string = this.getRangeParams(formState);
    if (!params) {
      return of([]);
    }

    return this.http.get(this.url + params).pipe(
      map((res: any) =>
        Object.keys(res.rates)
          .map((date) => Object.keys(res.rates[date])
            .sort()
            .map((curr) => new Currency(curr, res.rates[date][curr], date)))
      ),
      map((arrays) => [].concat.apply([], arrays)),

      catchError(error => {
        console.error(error);
        return of([]);
      })
    );
  }

  isMomentValuesEqual(a: moment.Moment, b: moment.Moment): boolean {
    return moment.isMoment(a) && moment.isMoment(b) && a.isSame(b) ||
      a === b;
  }

  formatDate(a: moment.Moment) {
    return moment.isMoment(a) ? a.format('YYYY-MM-DD') : null;
  }
}
