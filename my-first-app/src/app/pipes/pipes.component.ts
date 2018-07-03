import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyService } from '../my-service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [],
  providers: [MyService]
})
export class PipesComponent {

  today = new Date();

  myString = 'Hello THIS is a String';

  num = 12345.98765;

  constructor(
    private ar: ActivatedRoute
  ) { 
    console.log(ar)
  }

  ngOnInit() {
    console.log('pipes initalised')
  }

}
