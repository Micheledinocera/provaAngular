import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EventEmitterService } from '../../../../service/event-emitter/event-emitter.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class BackResultModalComponent {

    fields: any[]= [];
    searchText;

    constructor(
      public modalRef: BsModalRef,
      private ee: EventEmitterService
    ) {}

    add() {
      this.ee.onModalDismissEvent.emit({
        type: '',
        data: this.fields});
      this.modalRef.hide();
    }
}
