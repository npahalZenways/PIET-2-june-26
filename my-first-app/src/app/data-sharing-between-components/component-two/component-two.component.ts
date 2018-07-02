import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styles: [],
  inputs:[],
  outputs: []
})
export class ComponentTwoComponent{

  @Input('lkjhgfd') myprop;

  @Output('child') myoutput = new EventEmitter();

  test = "hello this is output string";

  constructor() { }

  ngOnInit() {

  }

}
