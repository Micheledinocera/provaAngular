import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class SynonymousModalComponent {

    word: any;
    words: any []=[];
    constructor(public modalRef: BsModalRef) {
    }

    add(word) {
        this.words.push(
            {
                word: word,
                synonyms: []
            }
        );
        this.modalRef.hide();
    }
}
