import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: []
})
export class PipesComponent implements OnInit {

  today = new Date();

  myString = 'Hello THIS is a String';

  num = 12345.98765;

  constructor() { }

  ngOnInit() {
  }

}
