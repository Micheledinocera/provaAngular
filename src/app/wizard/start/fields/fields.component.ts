import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../service/data/data.service";
import {WizardController} from "../wizard-controller";
import {TreeviewItem, TreeviewConfig} from "ngx-treeview";
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from "./modal/modal.component";
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
  animations:WizardController.animation
})
export class FieldsComponent implements OnInit {

    bsModalRef: BsModalRef;
    state;
    wizardController;
    info;
    config = TreeviewConfig.create({
        hasAllCheckBox: false,
        hasFilter: true,
        hasCollapseExpand: false,
        decoupleChildFromParent: false,
        maxHeight: 400,
    });
    categories=[
        new TreeviewItem({
            text: 'Category1', value:"1", children: [
                { text: 'Sub-Category1-1', value: 11 },
                { text: 'Sub-Category1-2', value: 12 },
                { text: 'Sub-Category1-3', value: 13 }
            ]
        }),
        new TreeviewItem({
            text: 'Category2', value: 2, children: [
                {
                    text: 'Sub-Category2-1', value: 21, children: [{
                        text: 'Sub-Category2-1-1', value: 211, children: [
                            { text: 'Sub-Category2-1-1-1', value: 2111 },
                            { text: 'Sub-Category2-1-1-2', value: 2112 }
                        ]
                    }, {
                        text: 'Sub-Category2-1-2', value: 212, children: [
                            { text: 'Sub-Category2-1-2-1', value: 2121 },
                            { text: 'Sub-Category2-1-2-2', value: 2122 },
                        ]
                    }]
                },
                {
                    text: 'Sub-Category2-2', value: 22, children: [
                        { text: 'Sub-Category2-1-1', value: 221 },
                        { text: 'Sub-Category2-1-2', value: 222 }
                    ]
                }
            ]
        })
    ];
    skus=[
        {
            value:"sku1",
            checked:true,
            isMain:false
        },{
            value:"sku2",
            checked:true,
            isMain:false
        },{
            value:"sku3",
            checked:true,
            isMain:true
        },{
            value:"sku4",
            checked:true,
            isMain:false
        }
    ];
    queries=[
        {
            value: "title",
            checked: true
        },{
            value: "rating",
            checked: false
        },{
            value: "price",
            checked: false
        },{
            value: "description",
            checked: false
        }
    ];
    facetTypes=["checkbox","slider","radio"];
    facets=[
        {
            value:"color",
            type:"checkbox"
        },{
            value:"size",
            type:"checkbox"
        },{
            value:"price",
            type:"slider"
        },{
            value:"rating",
            type:"radio"
        },
    ];

    private mainSku: any;
    constructor(
        private router:Router,
        private dataservice:DataService,
        private ms:BsModalService
    ) {
        this.wizardController=new WizardController(this.router,this.dataservice);
    }

    onArrowClicked(item){
        item.collapsed=!item.collapsed;
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
        this.wizardController.navigate(event,'/wizard/start/backResults','/wizard/start/website');
    }

    onInvertClick(){
        for(let item of this.categories){
            if(!item.indeterminate)
                item.checked=!item.checked;
            this.iteratorOnChildren(item.children,"invert");
        }
    }

    onSelectClick(){
        for(let item of this.categories){
            item.checked=true;
            this.iteratorOnChildren(item.children,"select");
        }
    }

    onDeselectClick(){
        for(let item of this.categories){
            item.checked=false;
            this.iteratorOnChildren(item.children,"deselect");
        }
    }

    iteratorOnChildren(children,type){
        if(children!=null && children.length>0){
            for(let child of children){
                switch (type){
                    case "select": { child.checked=true; break;}
                    case "deselect": {child.checked=false; break;}
                    case "invert": {if(!child.indeterminate)child.checked=!child.checked;break;}
                }
                this.iteratorOnChildren(child.children,type);
            }
        }
    }

    modalShowSku(){
        this.bsModalRef = this.ms.show(ModalComponent);
        this.bsModalRef.content.skus = this.skus;
        this.bsModalRef.content.type = "sku";
        this.mainSku=this.getMainSku();
        this.bsModalRef.content.mainSku = this.mainSku;
    }

    modalShowQuery(){
        this.bsModalRef = this.ms.show(ModalComponent);
        this.bsModalRef.content.queries = this.queries;
        this.bsModalRef.content.type = "query";
        this.bsModalRef.content.mainSku = this.mainSku;
    }

    getMainSku(){
        for(let sku of this.skus){
            if(sku.isMain)
                return sku.value;
        }
    }

    customComparator(itemA, itemB) {
        if(itemA.isMain)
            return -1;
        else if (itemB.isMain)
            return 1;
        else
            return itemA.value > itemB.value ? 1 : -1;
    }
}
