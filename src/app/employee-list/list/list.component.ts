import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeData } from 'src/app/models/EmployeeData.model';
import { List } from 'immutable';

const fibonacci = (num:number):number => {
  if(num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2); 
}

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent  {
  @Input() data: List<EmployeeData>;
  @Output() remove = new EventEmitter<EmployeeData>();

  calculate(num:number) {
    return fibonacci(num); 
  }
  
}
