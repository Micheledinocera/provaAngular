import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fine-tuning',
  templateUrl: './fine-tuning.component.html',
  styleUrls: ['./fine-tuning.component.css']
})
export class FineTuningComponent implements OnInit {

  currency;
  currencies=[];
  separator;
  constructor() {
      this.currencies=[
          "Euro - €",
          "Dollar - $"
      ]
  }

  ngOnInit() {
  }

}
