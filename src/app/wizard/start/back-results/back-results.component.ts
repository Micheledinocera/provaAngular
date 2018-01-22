import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../service/data/data.service";
import {WizardController} from "../wizard-controller";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BackResultModalComponent } from "./modal/modal.component";
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

declare var $ :any;

@Component({
  selector: 'app-back-results',
  templateUrl: './back-results.component.html',
  styleUrls: ['./back-results.component.css'],
  animations:WizardController.animation
})
export class BackResultsComponent implements OnInit {

    bsModalRef: BsModalRef;
    state;
    wizardController;
    info;
    searchText;
    fields=[
        {
            value: "title",
            checked: true
        },{
            value: "description",
            checked: true
        },{
            value: "tag",
            checked: false
        },{
            value: "price",
            checked: false
        }
    ];

    constructor(
        private router:Router,
        private dataservice:DataService,
        private ms:BsModalService
    ) {
        this.wizardController=new WizardController(this.router,this.dataservice);
    }

    ngOnInit() {
        this.info=this.wizardController.initialazeView();
        this.state=this.info.state;
    }

    slideOutLeft(){
        this.state="startToLeft";
    }

    slideOutRight(){
        this.state="startToRight";
    }

    navigate(event){
        this.wizardController.navigate(event,'/wizard/start/overview','/wizard/start/fields');
    }

    modalShow(){
        this.bsModalRef = this.ms.show(BackResultModalComponent);
        this.bsModalRef.content.fields= this.fields;
    }
}