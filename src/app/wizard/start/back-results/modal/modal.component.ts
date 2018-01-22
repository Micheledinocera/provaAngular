import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class BackResultModalComponent {

    fields: any[]=[];
    searchText;

    constructor(public modalRef: BsModalRef) {
    }
}
