import { Component } from '@angular/core';
import { Income } from 'src/app/models/income.model';
import { IncomesService } from 'src/app/services/incomes.service';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent {

  title_month: string = 'Enero';
  incomes_month: number = 223;
  title_total: string = 'Total';
  incomes_total: number = 678;
  title_fix: string = 'Fijos';
  fix_incomes: Income[] = [];
  title_variables: string = 'Variables';
  variable_incomes: Income[] = [];
    
  constructor(private incomesService: IncomesService){}

  ngOnInit(){

    this.fix_incomes = this.incomesService.getAllFixedIncomes();
    this.variable_incomes = this.incomesService.getAllOVariableIncomes();
  }}
