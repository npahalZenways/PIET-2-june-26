import { Component } from '@angular/core';
import { MyService } from '../my-service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: ['.abc{color: blue}', '.active{font-weight: bold}']
})
export class DataBindingComponent{

  componentName = "Data binding";

  linkUrl = "https:www.google.com";

  isTrue = false;

  returnName(){
    return this.componentName;
  }

  print(...e){
    console.log(e)
  }
  constructor(
    private serv: MyService
  ) { 
    setInterval(()=>{
      console.log(serv.value)
    }, 2000)
  }

}
