import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == 'lowercase'){
      return value.toLowerCase();      
    } else if(args == 'uppercase'){
      return value.toUpperCase();
    } else{
      return value;
    }
  }

}
