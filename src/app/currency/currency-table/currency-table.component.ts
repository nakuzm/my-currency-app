import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Currency} from '../models/currency.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit, AfterViewInit {
  @Input()
  public set currencyList(data: Currency[]) {
    this.dataSource.data = data || [];
  }

  @Input()
  public set isDateColumn(isDateColumn: boolean) {
    this.displayedColumns = isDateColumn ? ['date', 'currency', 'exchangeRate'] : ['currency', 'exchangeRate'];
  }
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Currency>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
