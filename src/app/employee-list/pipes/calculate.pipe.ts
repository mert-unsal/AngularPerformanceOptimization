import { Pipe, PipeTransform } from '@angular/core';

const fibonacci = (num:number):number => {
  if(num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2); 
}

@Pipe({
  name: 'calculate',
  pure: true        // Just to be more explicitly presentation
})
export class CalculatePipe implements PipeTransform {
  transform(value: number, ...args: any[]): number {
    console.log("Calculating ", value);
    return fibonacci(value);
  }

}
