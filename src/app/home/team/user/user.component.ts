import { Component, OnInit, Input } from '@angular/core';
import { Utility } from '../../../shared/Utility';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user;

  editable = false;
  types = ['user', 'admin', 'super-admin'];

  constructor() { }

  ngOnInit() {
  }

  toCustomSelectConverter(array) {
    return Utility.toCustomSelectConverter(array);
  }
}
