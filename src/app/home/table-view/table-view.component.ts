import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  @Input() data;
  @Input() timeRange;

  constructor() { }

  ngOnInit() {
  }

}
