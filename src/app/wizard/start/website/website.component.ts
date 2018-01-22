import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../service/data/data.service";
import {WizardController} from "../wizard-controller";

declare var jquery:any;
declare var $ :any;

@Component({
    selector: 'app-website',
    templateUrl: './website.component.html',
    styleUrls: ['./website.component.css'],
    animations:WizardController.animation
})

export class WebsiteComponent implements OnInit {
    state;
    wizardController;
    info;
    searchText;
    siteValue;

    sites=["Sito1.com","Sito2.com","Sito2.eu","Sito2.it","Sito3.org"];
    
    constructor(
        private router:Router,
        private dataservice:DataService
    ) {
        this.wizardController=new WizardController(this.router,this.dataservice);
    }

    ngOnInit() {
        this.info=this.wizardController.initialazeView();
        this.state=this.info.state;
    }

    slideOutLeft(){
        this.state="startToLeft";
    }

    slideOutRight(){
        this.state="startToRight";
    }

    navigate(event){
        this.wizardController.navigate(event,'/wizard/start/fields','/wizard/start/cms');
    }
}
