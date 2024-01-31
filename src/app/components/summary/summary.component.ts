import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  title_total: string = 'Total';
  title_incomes: string = 'Ahorros';
  title_outcomes: string = 'Gastos';
  total_incomes: number = 395;
  total_outcomes: number = 678;
  title_month: string = 'Enero';
  month_incomes: number = 102;
  month_outcomes: number = 917;
  title_categories: string = 'Categorías';
}
