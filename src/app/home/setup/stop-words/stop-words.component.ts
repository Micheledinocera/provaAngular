import { Component, OnDestroy } from '@angular/core';
import { SynonymousModalComponent } from '../synonimous/synonimous-modal/modal.component';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import { DataService } from '../../../service/data/data.service';
import { EventEmitterService } from '../../../service/event-emitter/event-emitter.service';
import { StopWords } from '../../../model/Home/StopWords';
import { Word } from '../../../model/Home/Word';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AnimationController } from '../../../animationController';

@Component({
  selector: 'app-stop-words',
  templateUrl: './stop-words.component.html',
  styleUrls: ['./stop-words.component.css'],
  animations: AnimationController.animation
})
export class StopWordsComponent implements OnInit, OnDestroy {

  time;
  state;
  defaultWords = [];
  words= [];
  searchText;
  searchTextDefault;

  bsModalRef: BsModalRef;

  constructor(
    private ms: BsModalService,
    private ds: DataService,
    private ee: EventEmitterService) {
      ee.onSelectSiteEvent.subscribe((selectedSite) => {
        this.defaultWords = ds.getStopWords()[ds.getSelectedSite()]['defaultWords'];
        this.words = ds.getStopWords()[ds.getSelectedSite()]['words'];
      });
      ee.onComponentAppear.subscribe((data) => {
        this.time++;
      });
  }

  ngOnInit() {
    this.time = 1;
    this.defaultWords = this.ds.getStopWords()[this.ds.getSelectedSite()]['defaultWords'];
    this.words = this.ds.getStopWords()[this.ds.getSelectedSite()]['words'];
  }

  ngOnDestroy() {
    this.ds.setWizardSite('stopWords', {words: this.words}, this.ds.getSelectedSite());
  }

  addWord() {
    const word = new Word({word: ''});
    word.editable = true;
    this.words.push(word);
  }

  removeWord(word) {
      const index = this.words.indexOf(word);

      if (index >= 0) {
          this.words.splice(index, 1);
      }
  }

  editWord(event, word) {
    if (word.editable)
      word.word = event.target.parentElement.children[0].value;
    word.editable = !word.editable;
  }

  startAnimation() {
    AnimationController.startAnimation(this.ee);
  }

  endAnimation() {
    AnimationController.endAnimation(this.ee);
  }
}
