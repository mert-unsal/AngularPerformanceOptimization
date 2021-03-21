import { Component, OnInit, Input, Output } from '@angular/core';
import { EmployeeData } from '../models/EmployeeData.model';
import { EventEmitter } from '@angular/core';

const fibonacci = (num:number):number => {
  if(num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2); 
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})
export class EmployeeListComponent implements OnInit {
  @Input() data: EmployeeData[];
  @Input() department: string;

  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<String>();

  label:string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
   }

  handleKey(event:any) {
    if(event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }

  calculate(num:number) {
    console.log('Calculating', this.department);
    return fibonacci(num); 
  }
}
