import { Component, OnInit } from '@angular/core';
import { MyService } from "../my-service";

@Component({
  selector: 'app-in-built-directives',
  templateUrl: './in-built-directives.component.html',
  styles: []
})
export class InBuiltDirectivesComponent implements OnInit {

  isTrue = false;

  switchCondition;

  myArr = [1,2,3,4,5]

  constructor(
    private serv: MyService
  ) { 
    setInterval(()=>{
      console.log(serv.value)
    }, 2000)
  }

  ngOnInit() {
  }

}
