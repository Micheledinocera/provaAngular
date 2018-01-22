import { Component} from '@angular/core';
import {DataService} from "../service/data/data.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.css'],
})
export class WizardComponent{

    constructor(
        private router:Router,
        private dataservice:DataService
    ){}

    toWizard(){
        this.router.navigate(['/wizard/start']);
        this.dataservice.setOrigin("");
    }
}
