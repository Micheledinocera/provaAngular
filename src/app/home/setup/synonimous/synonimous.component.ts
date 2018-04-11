import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {SynonymousModalComponent} from './synonimous-modal/modal.component';
import { debug } from 'util';
import { DataService } from '../../../service/data/data.service';
import { EventEmitterService } from '../../../service/event-emitter/event-emitter.service';
import { AnimationController } from '../../../animationController';

@Component({
  selector: 'app-synonimous',
  templateUrl: './synonimous.component.html',
  styleUrls: ['./synonimous.component.css'],
  animations: AnimationController.animation
})
export class SynonimousComponent implements OnInit, OnDestroy {

  time;
  state;
  bsModalRef: BsModalRef;
  words= [];
  visible= true;
  selectable= true;
  removable= true;
  addOnBlur= true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  constructor(
    private ms: BsModalService,
    private ds: DataService,
    private ee: EventEmitterService
  ) {
    ee.onSelectSiteEvent.subscribe((selectedSite) => {
      this.words = ds.getSynonyms()[ds.getSelectedSite()];
    });
    ee.onComponentAppear.subscribe((data) => {
      this.time++;
    });
  }

  ngOnInit() {
    this.time = 1;
    this.words = this.ds.getSynonyms()[this.ds.getSelectedSite()];
    for (const word of this.words){
      word.selected = false;
    }
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    this.ds.setWizardSite('synonimous', {synonims: this.words}, this.ds.getSelectedSite());
  }

  add(word, event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
          word.synonyms.push( value.trim() );
      }

      // Reset the input value
      if (input) {
          input.value = '';
      }
  }

  remove(word, synonym: any): void {
      const index = word.synonyms.indexOf(synonym);
      if (index >= 0) {
          word.synonyms.splice(index, 1);
      }
  }

  addWord() {
      this.bsModalRef = this.ms.show(SynonymousModalComponent);
      this.bsModalRef.content.words = this.words;
  }

  removeWords() {
    const indexesToRemove = [];
    for (const word of this.words){
      if (word.selected)
        indexesToRemove.push(this.words.indexOf(word));
    }
    indexesToRemove.sort(function(a, b){ return b - a; });
    for ( const index of indexesToRemove) {
      this.words.splice(index, 1);
    }
  }

  selectAll() {
    for (const word of this.words){
      word.selected = true;
    }
  }

  deselectAll() {
    for (const word of this.words){
      word.selected = false;
    }
  }

  startAnimation() {
    AnimationController.startAnimation(this.ee);
  }

  endAnimation() {
    AnimationController.endAnimation(this.ee);
  }
}
