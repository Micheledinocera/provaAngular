import { Component} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { PreviewModalComponent } from './preview-modal/preview-modal.component';
import { KitNotificationService } from '@ngx-kit/core';

@Component({
  selector: 'app-modal',
  templateUrl: './engage-search-modal.component.html',
  styleUrls: ['./engage-search-modal.component.css']
})
export class EngageSearchModalComponent {

    index= 0;
    emptyHTML= '<html><head><title></title></head><body></body></html>';
    templateSelection= 'Template';
    templates = [];
    engageSearchs;
    engagesearch= {
      title: '',
      description: '',
      keywords: [],
      template: ''
    };
    type;
    templateName= '';
    selectedTemplate= null;
    keywords: '';
    selectedTemplateHtml= '';
    previewModalRef: BsModalRef;
    constructor(
      public modalRef: BsModalRef,
      public ms: BsModalService,
      private notificationService: KitNotificationService) {
        notificationService.config({position: 'top-left'});
        // notificationService.config({duration: 50000});
      }

    add(engagesearch) {
        this.engagesearch.keywords = this.keywords.split(',');
        this.engagesearch.template = this.templateSelection === 'Template' ? this.selectedTemplate : this.selectedTemplateHtml;
        this.engageSearchs.templates = this.templates;
        if (this.type === 'add') {
            this.engageSearchs.data.push(engagesearch);
        } else {
            this.engageSearchs[this.index] = engagesearch;
        }
        this.modalRef.hide();
    }

    showPreview(html) {
      const htmlForPreview = this.templateSelection === 'Template' ? this.templates[this.selectedTemplate] : html;
      this.previewModalRef = this.ms.show(PreviewModalComponent, htmlForPreview);
      this.previewModalRef.content.innerHtml = htmlForPreview;
    }

    checkEmptyHtml() {
      if (this.templateSelection === 'Html' && (this.selectedTemplateHtml === '' ||
        this.selectedTemplateHtml.replace(/(\r\n\t|\n|\r\t|)/gm, '').replace(/\s/g, '') === this.emptyHTML))
        return true;
      else if (this.engagesearch.title === '' || this.engagesearch.description === '' || this.keywords === '')
        return true;
      else
        return false;
    }

    saveTemplate(templateName) {
      this.templates[templateName] = this.selectedTemplateHtml;
      this.notificationService.open({message: 'Template successfully saved', className: ''});
    }

    editTemplate(selectedTemplate) {
      this.templateSelection = 'Html';
      this.templateName = selectedTemplate;
      this.selectedTemplateHtml = this.templates[selectedTemplate];
    }

    deleteTemplate(selectedTemplate) {
      delete this.templates[selectedTemplate];
      this.selectedTemplate = null;
      this.notificationService.open({message: 'Template successfully deleted', className: ''});
    }
}
