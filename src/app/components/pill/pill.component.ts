import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.css']
})
export class PillComponent {

  @Input() title1: string = '';
  @Input() quantity1: number = 0;
  @Input() title2: string = '';
  @Input() quantity2: number = 0;
}