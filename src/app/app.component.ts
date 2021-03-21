import { Component, OnInit } from '@angular/core';
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
    this.salesList = this.generator.generate(Names,NumRange, 10);
    this.rndList = this.generator.generate(Names,NumRange, 10);
    
  }
  salesList: EmployeeData[] = [];
  rndList: EmployeeData[] = [];
  label: string

  add(list: EmployeeData[], name: string) {
    list.unshift({employeeName:name,employeeValue:this.generator.generateNumber(NumRange)});
  }

  remove(list:EmployeeData[],node: EmployeeData) {
    list.splice(list.indexOf(node),1);
  }

}
