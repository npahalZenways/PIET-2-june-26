import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-built-directives',
  templateUrl: './in-built-directives.component.html',
  styles: []
})
export class InBuiltDirectivesComponent implements OnInit {

  isTrue = false;

  switchCondition;

  myArr = [1,2,3,4,5]

  constructor() { }

  ngOnInit() {
  }

}
