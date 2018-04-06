import { Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import { Router} from '@angular/router';
import { DataService} from '../../../service/data/data.service';
import { WizardController} from '../wizard-controller';
import { TreeviewItem, TreeviewConfig} from 'ngx-treeview';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Sku } from '../../../model/Sku';
import { EventEmitterService } from '../../../service/event-emitter/event-emitter.service';
import { Query } from '../../../model/Query';
import { Facet } from '../../../model/Facet';
import { Website } from '../../../model/Website';
import { Fields } from '../../../model/Fields';
import { Category } from '../../../model/Category';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
  animations: WizardController.animation
})
export class FieldsComponent implements OnInit, AfterViewInit, OnDestroy {

    bsModalRef: BsModalRef;
    state;
    wizardController;
    info;
    fields: Fields;
    categoryExclude= false;
    config = TreeviewConfig.create({
        hasAllCheckBox: false,
        hasFilter: true,
        hasCollapseExpand: false,
        decoupleChildFromParent: false,
        maxHeight: 400,
    });
    wizardSite: Website;
    categories = [];
    skus: Sku[];
    titles: Sku[];
    prices: Sku[];
    boosting: Sku[];
    images: Sku[];
    queries: Query[] = [];
    facets = [];
    facetTypes= Facet.TYPES;
    facetsUnselectedDynamic;

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
            case 'title':
              this.titles = data.data;
              break;
            case 'image':
              this.images = data.data;
              break;
            case 'boosting':
              this.boosting = data.data;
              break;
            case 'price':
              this.prices = data.data;
              break;
          }
        }
      );
    }

    ngAfterViewInit() {
      $('.ittweb-tabset').children(0).children(0).addClass('avoid-clicks', 'tab-disabled');
      $('.ittweb-tabset').children(0).children(0)[2].classList.remove('avoid-clicks', 'tab-disabled');
      $('.ittweb-tabset').children(0).children(0)[3].classList.remove('avoid-clicks', 'tab-disabled');
      $('.ittweb-tabset').children(0).children(0)[4].classList.remove('avoid-clicks', 'tab-disabled');
      this.ee.onEditWizardEvent.emit(true);
    }

    checkSelection() {
      if (this.skus.filter((item) => item.checked).length === 0) {
        this.disableTabs();
        return true;
      } else if (this.titles.filter((item) => item.checked).length === 0) {
        this.disableTabs();
        return true;
      } else if (this.categories.filter((item) => item.checked).length === 0 &&
        this.categories.filter((item) => item.indeterminate).length === 0) {
        this.disableTabs();
        return true;
      }else if (this.facets.filter((item) => item.checked).length === 0 || this.facets.filter((item) => item.type !== '').length === 0) {
        this.disableTabs();
        return true;
      } else {
        this.activateTabs();
        return false;
      }
    }

    disableTabs() {
      $('.ittweb-tabset').children(0).children(0)[3].classList.add('avoid-clicks', 'tab-disabled');
      $('.ittweb-tabset').children(0).children(0)[4].classList.add('avoid-clicks', 'tab-disabled');
    }

    activateTabs() {
      $('.ittweb-tabset').children(0).children(0)[3].classList.remove('avoid-clicks', 'tab-disabled');
      $('.ittweb-tabset').children(0).children(0)[4].classList.remove('avoid-clicks', 'tab-disabled');
    }

    onArrowClicked(item) {
      item.collapsed = !item.collapsed;
    }

    ngOnInit() {
      this.info = this.wizardController.initialazeView();
      this.state = this.info.state;
      this.wizardSite = this.dataservice.getWizardSite();
      this.fields = this.dataservice.getFields(this.wizardSite.name);
      if ( this.fields ) {
        this.categories = this.fields.categories;
        this.skus = this.fields.skus;
        this.titles = this.fields.titles;
        this.prices = this.fields.prices;
        this.images = this.fields.images;
        this.boosting = this.fields.boosting;
        this.queries = this.fields.queries;
        this.facets = this.fields.facets;
        this.facetsUnselectedDynamic = this.fields.facetsUnselectedDynamic;
        this.categoryExclude = this.fields.categoryExclude;
      } else {
        this.categories = Category.getDummyCategoriesUnchecked();
        this.skus = Sku.getDummySkusUnchecked();
        this.titles = Sku.getDummySkusUnchecked();
        this.boosting = Sku.getDummySkusChecked();
        this.prices = Sku.getDummySkusUnchecked();
        this.images = Sku.getDummySkusUnchecked();
        this.skus = Sku.getDummySkusUnchecked();
        this.queries = Query.getDummyQueriesUnchecked();
        this.facets = Facet.getDummyFacetsUnchecked();
        this.facetsUnselectedDynamic = false;
        this.categoryExclude = false;
      }
    }

    ngOnDestroy() {
      if (!this.checkSelection()) {
        this.dataservice.setWizardSite('fields', {
          fields: {
            categoryExclude: this.categoryExclude,
            categories: this.categories,
            skus: this.skus,
            titles: this.titles,
            images: this.images,
            prices: this.prices,
            boosting: this.boosting,
            queries: this.queries,
            facets: this.facets,
            facetsUnselectedDynamic: this.facetsUnselectedDynamic
          }
        }, this.wizardSite.name);
      }
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

    modalShowSku(type) {
      this.bsModalRef = this.ms.show(ModalComponent);
      this.bsModalRef.content.type = type;
      this.mainSku = this.getMainSku(type);
      this.bsModalRef.content.mainSku = this.mainSku;
      if (type === 'boosting') {
        this.bsModalRef.content.skus = this.boosting;
        for (const boost of this.boosting){
          this.bsModalRef.content.modalData.push(new Sku(boost));
        }
      } else if (type === 'image') {
        this.bsModalRef.content.queries = this.images;
        for (const query of this.images){
          this.bsModalRef.content.modalData.push(new Sku(query));
        }
      } else {
        this.bsModalRef.content.skus = this.skus;
        for (const sku of this.skus){
          this.bsModalRef.content.modalData.push(new Sku(sku));
        }
      }
    }

    modalShowQuery(type) {
      this.bsModalRef = this.ms.show(ModalComponent);
      this.bsModalRef.content.type = type;
      if (type === 'title') {
        this.bsModalRef.content.queries = this.titles;
        this.mainSku = this.getMainSku(type);
        this.bsModalRef.content.mainSku = this.mainSku;
        for (const query of this.titles){
          this.bsModalRef.content.modalData.push(new Sku(query));
          this.bsModalRef.content.filteredData = this.bsModalRef.content.modalData.filter((data) => data.checked);
        }
      } else if (type === 'price') {
        this.bsModalRef.content.queries = this.prices;
        this.mainSku = this.getMainSku(type);
        this.bsModalRef.content.mainSku = this.mainSku;
        for (const query of this.prices){
          this.bsModalRef.content.modalData.push(new Sku(query));
          this.bsModalRef.content.filteredData = this.bsModalRef.content.modalData.filter((data) => data.checked);
        }
      } else {
        this.bsModalRef.content.queries = this.queries;
        for (const query of this.queries){
          this.bsModalRef.content.modalData.push(new Query(query));
        }
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

    getMainSku(type) {
      if (type === 'sku') {
        for (const sku of this.skus){
          if (sku.isMain)
            return sku.value;
        }
      } else if (type === 'boosting') {
        for (const boost of this.boosting){
          if (boost.isMain)
            return boost.value;
        }
      } else if (type === 'image') {
        for (const image of this.images){
          if (image.isMain)
            return image.value;
        }
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
