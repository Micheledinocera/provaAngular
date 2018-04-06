import { Component, OnInit } from '@angular/core';
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
    boosting: any[] = [];
    titles: any[] = [];
    images: any[] = [];
    prices: any[] = [];
    modalData: any[] = [];
    type: any;
    queries: any[]= [];
    facets: any[]= [];
    mainSku: any;
    selectedBoost;
    searchText;
    filteredData= [];
    facetTypes= ['checkbox', 'slider', 'radio'];

    constructor(
      public modalRef: BsModalRef,
      private ee: EventEmitterService
    ) {}

    onClicked(query) {
      this.filteredData = this.modalData.filter((data) => data.checked);
      if (this.filteredData.length === 1 ) {
        this.modalData.map((data) => data.isMain = false);
        this.modalData[this.modalData.indexOf(this.filteredData[0])].isMain = true;
      }
    }

    selectMainSku(skuValue) {
      for (const item of this.modalData)
      item.isMain = (item.value === skuValue);
    }

    remove() {
      this.mainSku = null;
    }

    checkMain() {
      for (const sku of this.modalData){
        if (!sku.checked && sku.value === this.mainSku)
          return true;
      }
      return false;
    }

    add(type) {
      if (this.type === 'sku' || this.type === 'boosting' || this.type === 'image') {
        this.selectMainSku(this.mainSku);
      }
      this.ee.onModalDismissEvent.emit({
        type: this.type,
        data: this.modalData});
      this.modalRef.hide();
    }
}
