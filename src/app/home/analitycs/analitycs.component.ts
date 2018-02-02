import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-analitycs',
  templateUrl: './analitycs.component.html',
  styleUrls: ['./analitycs.component.css']
})
export class AnalitycsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.ittweb-tabset').children(0).children(0).eq(1).removeClass('active');
  }

}
