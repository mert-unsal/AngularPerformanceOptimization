import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';
import { EmployeeData } from './models/EmployeeData.model'
import { ListGeneratorService } from './shared/list-generator.service';
import { Names } from './shared/names';
const NumRange: [number,number] = [23,28];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(private generator: ListGeneratorService) {}

  ngOnInit(): void {
    this.salesList = List(this.generator.generate(Names,NumRange, 140));
    this.rndList = List(this.generator.generate(Names,NumRange, 140));
    
  }
  salesList: List<EmployeeData>;
  rndList: List<EmployeeData>;
  label: string

  add(list: List<EmployeeData>, name: string) {
    return list.unshift({employeeName:name,employeeValue:this.generator.generateNumber(NumRange)});
  }

  remove(list:List<EmployeeData>,node: EmployeeData) {
    return list.splice(list.indexOf(node),1);
  }

}
