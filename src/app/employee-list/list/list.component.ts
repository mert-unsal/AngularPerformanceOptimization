import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeData } from 'src/app/models/EmployeeData.model';
import { List } from 'immutable';



@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent  {
  @Input() data: List<EmployeeData>;
  @Output() remove = new EventEmitter<EmployeeData>();
  
}
