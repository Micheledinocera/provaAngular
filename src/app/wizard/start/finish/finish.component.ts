import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../service/data/data.service";
import {WizardController} from "../wizard-controller";
import {TreeviewConfig, TreeviewItem} from "ngx-treeview";

declare var $ :any;

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css'],
  animations:WizardController.animation
})

export class FinishComponent implements OnInit {

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
    ) {
        this.wizardController=new WizardController(this.router,this.dataservice);
    }

    ngOnInit() {
        this.info=this.wizardController.initialazeView();
        this.state=this.info.state;
    }

    slideOutLeft(){
        this.state="startDisappear";
    }

    slideOutRight(){
        this.state="startToRight";
    }

    navigate(event){
        this.wizardController.navigate(event,'/wizard/completed','/wizard/start/backResults');
    }

    onArrowClicked(item){
        item.collapsed=!item.collapsed;
    }
}
