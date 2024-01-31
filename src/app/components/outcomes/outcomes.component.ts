import { Component, OnInit } from '@angular/core';
import { Outcome } from 'src/app/models/outcome.model';
import { OutcomesService } from 'src/app/services/outcomes.service';

@Component({
  selector: 'app-outcomes',
  templateUrl: './outcomes.component.html',
  styleUrls: ['./outcomes.component.css']
})
export class OutcomesComponent implements OnInit{

  title_variable: string = 'Variables';
  outcomes_variables: number = 223;
  title_fixed: string = 'Fijos';
  outcomes_fixed: number = 678;
  header_fixed: string = 'Fijos';
  fix_outcomes: Outcome[] = [];
  header_variables: string = 'Variables';
  variable_outcomes: Outcome[] = [];
  
  constructor(private outcomesService: OutcomesService){}

  ngOnInit(){

    this.fix_outcomes = this.outcomesService.getAllFixedOutcomes();
    this.variable_outcomes = this.outcomesService.getAllOVariableOutcomes();
  }
}
