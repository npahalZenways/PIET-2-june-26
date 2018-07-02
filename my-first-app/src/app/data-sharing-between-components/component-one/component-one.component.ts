import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styles: []
})
export class ComponentOneComponent implements OnInit {

  myInput = 'hello';

  print(e){
    console.log('outoout received', e);
  }

  constructor() { }

  ngOnInit() {
  }

}
