import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { EmployeeData } from '../models/EmployeeData.model';
import { List } from 'immutable';

@Component({
  selector: 'app-employee-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})
export class EmployeeListComponent {
  @Input() data: List<EmployeeData>;
  @Input() department: string;
  
  @Output() add = new EventEmitter<String>();
  @Output() remove = new EventEmitter<String>();
}
