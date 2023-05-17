import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-columns',
  templateUrl: './two-columns.component.html',
  styleUrls: ['./two-columns.component.css']
})
export class TwoColumnsComponent {
  @Input() title : string = '';
  @Input() text : string = '';
  @Input() images : string[] = [];
  @Input() aos : string = '';
  
}
