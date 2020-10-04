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
    private http: HttpClient
  ) { }

  get(params: string = 'latest'): Observable<Currency[]> {
    return this.http.get(this.url + params).pipe(
      map((res: any) => Object.keys(res.rates)
        .sort()
        .map((curr) => new Currency(curr, res.rates[curr]))
      ),
      catchError(error => {
        // todo show errors
        return of([]);
      })
    );
  }

  getRange(params: string): Observable<Currency[]> {
    return this.http.get(this.url + params).pipe(
      map((res: any) =>
        Object.keys(res.rates)
          .map((date) => Object.keys(res.rates[date])
            .sort()
            .map((curr) => new Currency(curr, res.rates[date][curr], date)))
      ),
      map((arrays) => [].concat.apply([], arrays)),

      catchError(error => {
        // todo show errors
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
