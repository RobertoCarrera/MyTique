import { Component, Input } from '@angular/core';
import { Outcome } from 'src/app/models/outcome.model';

@Component({
  selector: 'app-outcome-card',
  templateUrl: './outcome-card.component.html',
  styleUrls: ['./outcome-card.component.css']
})
export class OutcomeCardComponent {
  
  @Input() fixed_outcome!: Outcome;
  @Input() variable_outcome!: Outcome;
  @Input() isFixed: boolean = false;
  @Input() isVariable: boolean = false;


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
