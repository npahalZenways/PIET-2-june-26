import { Component } from '@angular/core';

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
  constructor() { }

}
