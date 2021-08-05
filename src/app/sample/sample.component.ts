import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  hello: String = "Hello World";
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count++;
  }

}
