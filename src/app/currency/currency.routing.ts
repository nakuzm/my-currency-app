import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {CurrencyComponent} from './currency.component';
import {CurrencyByDateComponent} from './currency-by-date/currency-by-date.component';
import {CurrencyByDateRangeComponent} from './currency-by-date-range/currency-by-date-range.component';

export const routes: Routes = [
    {
        path: '',
        component: CurrencyComponent,
        children: [
          {
            path: 'date',
            component: CurrencyByDateComponent,
          },
          {
            path: 'date-range',
            component: CurrencyByDateRangeComponent,
          },
        ]
    },
];

export const CurrencyRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

