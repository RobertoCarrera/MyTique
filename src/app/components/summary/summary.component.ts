import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  total_title: string = 'Total';
  month_title: string = 'Enero';
  categories_title: string = 'Categorías';
}
