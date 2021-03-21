import { Injectable } from '@angular/core';
import { EmployeeData } from '../models/EmployeeData.model';

@Injectable({
  providedIn: 'root'
})
export class ListGeneratorService {

  constructor() {}

  generateNumber(numRange: [number,number]) {
    return Math.floor(Math.random() * (numRange[1]-numRange[0])) + numRange[0]
  }

  generate(Names:string[], NumRange:[number,number], numberOfInstance): EmployeeData[] {
    let data:EmployeeData[] = [];
    for(let i=0; i< numberOfInstance; i++) {
      const randomNumber = this.generateNumber([0,Names.length]);
      data.push({employeeName:Names[randomNumber],employeeValue:this.generateNumber(NumRange)})
    }
    return data;
    console.log(data);
  }

}
