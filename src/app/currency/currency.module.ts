import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency.component';
import { CurrencyTableComponent } from './currency-table/currency-table.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {CurrencyRouting} from './currency.routing';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CurrencyByDateComponent } from './currency-by-date/currency-by-date.component';
import { CurrencyByDateRangeComponent } from './currency-by-date-range/currency-by-date-range.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    CurrencyComponent,
    CurrencyTableComponent,
    CurrencyByDateComponent,
    CurrencyByDateRangeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CurrencyRouting,

    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMomentDateModule,
    MatRadioModule,
    MatPaginatorModule,
    MatToolbarModule,
  ]
})
export class CurrencyModule { }
