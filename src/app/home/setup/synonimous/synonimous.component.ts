import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {SynonymousModalComponent} from './synonimous-modal/modal.component';
import { debug } from 'util';

@Component({
  selector: 'app-synonimous',
  templateUrl: './synonimous.component.html',
  styleUrls: ['./synonimous.component.css']
})
export class SynonimousComponent {

    bsModalRef: BsModalRef;
    words= [];
    visible= true;
    selectable= true;
    removable= true;
    addOnBlur= true;

    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];

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

    constructor(private ms: BsModalService) {
        this.words = [{
            word: 'word1',
            synonyms: ['synonim1', 'synonim2', 'synonim3']
        }, {
            word: 'word2',
            synonyms: ['synonim1-2', 'synonim2-2', 'synonim3-2']
        }];
        for (const word of this.words){
            word.selected = false;
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
}
