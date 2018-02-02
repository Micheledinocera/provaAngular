import { Component } from '@angular/core';
import { SynonymousModalComponent } from '../synonimous/synonimous-modal/modal.component';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-stop-words',
  templateUrl: './stop-words.component.html',
  styleUrls: ['./stop-words.component.css']
})
export class StopWordsComponent {

  defaultWords = [];
  words= [];
  searchText;
  searchTextDefault;

  bsModalRef: BsModalRef;

  constructor(private ms: BsModalService) {
      this.defaultWords = [{word: 'il'}, {word: 'lo'}, {word: 'la'}, {word: 'i'}, {word: 'gli'}, {word: 'le'}];
      this.words = [{word: 'customWord2'}, {word: 'customWord1'}];
      for (const word of this.words){
          word.editable = false;
      }
  }

  addWord() {
      this.bsModalRef = this.ms.show(SynonymousModalComponent);
      this.bsModalRef.content.words = this.words;
  }

  removeWord(word) {
      const index = this.words.indexOf(word);

      if (index >= 0) {
          this.words.splice(index, 1);
      }
  }
}
