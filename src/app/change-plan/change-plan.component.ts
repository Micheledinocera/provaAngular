import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-plan',
  templateUrl: './change-plan.component.html',
  styleUrls: ['./change-plan.component.scss']
})
export class ChangePlanComponent implements OnInit {

  skusValue= 5000;
  requestsValue= 5000;

  constructor() { }

  ngOnInit() {
  }

}
