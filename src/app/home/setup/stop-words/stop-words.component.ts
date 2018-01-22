import { Component, OnInit } from '@angular/core';
import { SynonymousModalComponent } from "../synonimous/synonimous-modal/modal.component";
import {BsModalRef} from "ngx-bootstrap/modal/bs-modal-ref.service";
import {BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-stop-words',
  templateUrl: './stop-words.component.html',
  styleUrls: ['./stop-words.component.css']
})
export class StopWordsComponent implements OnInit {

  words=[];
  searchText;

  bsModalRef: BsModalRef;

  constructor(private ms:BsModalService) {
      this.words= [{word:"il"},{word:"lo"},{word:"la"},{word:"i"},{word:"gli"},{word:"le"},{word:"supercalifragilistichestirapitoso"}];
  }

  addWord(){
      this.bsModalRef = this.ms.show(SynonymousModalComponent);
      this.bsModalRef.content.words=this.words;
  }

  removeWord(word){
      let index = this.words.indexOf(word);

      if (index >= 0) {
          this.words.splice(index, 1);
      }
  }

  ngOnInit() {
  }

}
