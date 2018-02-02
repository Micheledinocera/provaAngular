import { Component} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal',
  templateUrl: './engage-search-modal.component.html',
  styleUrls: ['./engage-search-modal.component.css']
})
export class EngageSearchModalComponent {

    index= 0;
    templateSelection= 'Template';
    templates = ['Template1', 'Template2', 'Template3'];
    engageSearchs: any []= [];
    engagesearch= {
        title: '',
        description: '',
        keywords: [],
        template: ''
    };
    type;
    selectedTemplate= this.templates[0];
    keywords: '';
    selectedTemplateHtml= '';

    constructor(public modalRef: BsModalRef) {}

    add(engagesearch) {
        this.engagesearch.keywords = this.keywords.split(',');
        this.engagesearch.template = this.templateSelection === 'Template' ? this.selectedTemplate : this.selectedTemplateHtml;
        if (this.type === 'add') {
            this.engageSearchs.push(engagesearch);
        } else {
            this.engageSearchs[this.index] = engagesearch;
        }
        this.modalRef.hide();
    }
}
