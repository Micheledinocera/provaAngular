import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../service/data/data.service';
import {WizardController} from '../wizard-controller';
import {TreeviewItem, TreeviewConfig} from 'ngx-treeview';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Sku } from '../../../model/Sku';
import { EventEmitterService } from '../../../service/event-emitter/event-emitter.service';
import { Query } from '../../../model/Query';
import { Facet } from '../../../model/Facet';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
  animations: WizardController.animation
})
export class FieldsComponent implements OnInit, AfterViewInit {

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
    categories= [
        new TreeviewItem({
            text: 'Category1', value: '1', children: [
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
    skus= [new Sku(
        {
            value: 'sku1',
            checked: true,
            isMain: false
        }), new Sku({
            value: 'sku2',
            checked: true,
            isMain: false
        }), new Sku({
            value: 'sku3',
            checked: true,
            isMain: true
        }), new Sku({
            value: 'sku4',
            checked: true,
            isMain: false
        })
    ];
    queries= [
        {
            value: 'title',
            checked: true
        }, {
            value: 'rating',
            checked: false
        }, {
            value: 'price',
            checked: false
        }, {
            value: 'description',
            checked: false
        }
    ];
    facetTypes= ['checkbox', 'slider', 'radio'];
    facets= [
        {
            value: 'color',
            type: 'checkbox',
            checked: 'true'
        }, {
            value: 'size',
            type: 'checkbox',
            checked: 'true'
        }, {
            value: 'price',
            type: 'slider',
            checked: 'true'
        }, {
            value: 'rating',
            type: 'radio',
            checked: 'true'
        },
    ];

    private mainSku: any;
    constructor(
        private router: Router,
        private dataservice: DataService,
        private ms: BsModalService,
        private ee: EventEmitterService
    ) {
        this.wizardController = new WizardController(this.router, this.dataservice);
        ee.onModalDismissEvent.subscribe(
          (data) => {
              switch (data.type) {
                case 'sku':
                  this.skus = data.data;
                  break;
                case 'query':
                  this.queries = data.data;
                  break;
                case 'facet':
                  this.facets = data.data;
                  break;
              }
          }
      );
    }

    ngAfterViewInit() {
      $('.ittweb-tabset').children(0).children(0)[2].classList.remove('avoid-clicks', 'tab-disabled');
      $('.ittweb-tabset').children(0).children(0)[3].classList.remove('avoid-clicks', 'tab-disabled');
      $('.ittweb-tabset').children(0).children(0)[4].classList.remove('avoid-clicks', 'tab-disabled');
    }

    onArrowClicked(item) {
        item.collapsed = !item.collapsed;
    }

    ngOnInit() {
        this.info = this.wizardController.initialazeView();
        this.state = this.info.state;
    }

    slideOutLeft() {
        this.state = 'startToLeft';
    }

    slideOutRight() {
        this.state = 'startToRight';
    }

    navigate(event) {
        this.wizardController.navigate(event, '/wizard/start/backResults', '/wizard/start/website');
    }

    onInvertClick() {
        for (const item of this.categories){
            if (!item.indeterminate)
                item.checked = !item.checked;
            this.iteratorOnChildren(item.children, 'invert');
        }
    }

    onSelectClick() {
        for (const item of this.categories){
            item.checked = true;
            this.iteratorOnChildren(item.children, 'select');
        }
    }

    onDeselectClick() {
        for (const item of this.categories){
            item.checked = false;
            this.iteratorOnChildren(item.children, 'deselect');
        }
    }

    iteratorOnChildren(children, type) {
        if (children != null && children.length > 0) {
            for (const child of children){
                switch (type) {
                    case 'select': { child.checked = true; break; }
                    case 'deselect': {child.checked = false; break; }
                    case 'invert': {if (!child.indeterminate)child.checked = !child.checked; break; }
                }
                this.iteratorOnChildren(child.children, type);
            }
        }
    }

    modalShowSku() {
        this.bsModalRef = this.ms.show(ModalComponent);
        this.bsModalRef.content.skus = this.skus;
        this.bsModalRef.content.type = 'sku';
        this.mainSku = this.getMainSku();
        this.bsModalRef.content.mainSku = this.mainSku;
        for (const sku of this.skus){
          this.bsModalRef.content.modalData.push(new Sku(sku));
        }
    }

    modalShowQuery() {
        this.bsModalRef = this.ms.show(ModalComponent);
        this.bsModalRef.content.queries = this.queries;
        this.bsModalRef.content.type = 'query';
        for (const query of this.queries){
          this.bsModalRef.content.modalData.push(new Query(query));
        }
    }

    modalShowFacets() {
      this.bsModalRef = this.ms.show(ModalComponent);
      this.bsModalRef.content.facets = this.facets;
      this.bsModalRef.content.type = 'facet';
      for (const facet of this.facets){
        this.bsModalRef.content.modalData.push(new Facet(facet));
      }
  }

    getMainSku() {
        for (const sku of this.skus){
            if (sku.isMain)
                return sku.value;
        }
    }

    customComparator(itemA, itemB) {
        if (itemA.isMain)
            return -1;
        else if (itemB.isMain)
            return 1;
        else
            return itemA.value > itemB.value ? 1 : -1;
    }
}
