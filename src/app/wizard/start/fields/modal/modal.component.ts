import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Sku } from '../../../../model/Sku';
import { EventEmitterService } from '../../../../service/event-emitter/event-emitter.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

    skus: any[] = [];
    modalData: any[] = [];
    type: any;
    queries: any[]= [];
    facets: any[]= [];
    mainSku: any;
    searchText;
    facetTypes= ['checkbox', 'slider', 'radio'];

    selectMainSku(skuValue) {
      for (const sku of this.modalData)
          sku.isMain = (sku.value === skuValue);
    }

    checkMain() {
      for (const sku of this.modalData){
        if (!sku.checked && sku.value === this.mainSku)
          return true;
      }
      return false;
    }

    constructor(
      public modalRef: BsModalRef,
      private ee: EventEmitterService
    ) {}

    add(type) {
      if (this.type === 'sku') {
        this.selectMainSku(this.mainSku);
      }
      this.ee.onModalDismissEvent.emit({
        type: this.type,
        data: this.modalData});
      this.modalRef.hide();
    }
}
