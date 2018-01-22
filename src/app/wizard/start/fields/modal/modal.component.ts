import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

    skus: any[] = [];
    mainSku: any;
    type: any;
    queries: any[]=[];

    constructor(public modalRef: BsModalRef) {
    }

    add(type){
        if(type=="sku")
            this.selectMainSku(this.mainSku);
        this.modalRef.hide();
    }
    selectMainSku(skuValue){
        for(let sku of this.skus){
            sku.isMain=(sku.value==skuValue);
        }
    }
}
