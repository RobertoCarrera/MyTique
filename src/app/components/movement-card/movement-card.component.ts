import { Component, Input } from '@angular/core';
import { Income } from 'src/app/models/income.model';
import { Outcome } from 'src/app/models/outcome.model';

@Component({
  selector: 'app-movement-card',
  templateUrl: './movement-card.component.html',
  styleUrls: ['./movement-card.component.css']
})
export class MovementCardComponent {
  
  @Input() fixed_outcome!: Outcome;
  @Input() variable_outcome!: Outcome;
  @Input() isFixed: boolean = false;
  @Input() isVariable: boolean = false;
  @Input() fixed_income!: Income;
  @Input() variable_income!: Income;
  @Input() isFixedIncome: boolean = false;
  @Input() isVariableIncome: boolean = false;


  dayName = '';

  ngOnInit(){

  }

  ngOnChanges(){

    if(this.variable_outcome){

      const options: Intl.DateTimeFormatOptions = {weekday: 'long', day: '2-digit', month: 'long'};
      let formattedDate = this.variable_outcome.date!.toLocaleDateString('es-ES', options);
      formattedDate = formattedDate.replace(/(^\w|\s\w)/g, l => l.toUpperCase());
      this.dayName = formattedDate.replace(/\bDe\b/g, 'de');
    }
  }
}
