import {Router} from "@angular/router";
import {DataService} from "../../service/data/data.service";
import {animate, style, transition, trigger,keyframes} from "@angular/animations";
declare var $ :any

export class WizardController{

    static animation =[
        trigger('slide',[
            transition('* => startToLeft',animate('0.75s ease-out', style({
                transform: 'translateX(-100%)',
                opacity:0
            }))),
            transition('* => startToRight',animate('0.75s ease-out', style({
                transform: 'translateX(100%)',
                opacity:0
            }))),
            transition('* => startFromOut',animate('0.75s ease-out', style({
                transform: 'translateX(0%)',
                opacity:1
            }))),
            transition('* => startDisappear',
                animate('0.5s ease-in', keyframes([
                    // style({opacity: 1, transform: 'scale(1.1)', offset: 0}),
                    style({opacity: 0, transform: 'scale(0.1)'})
                ]))
            ),
        ])
    ];
    wizardContainer;
    origin;
    state;

    constructor(
        private router:Router,
        private dataservice:DataService
    ){}

    initialazeView(){
        this.wizardContainer=$(".wizard-container");
        this.origin=this.dataservice.getOrigin();
        if(this.origin=="right"){
            this.wizardContainer.css("transform","translateX(-100%)");
            this.wizardContainer.css("opacity","0");
            this.state='startFromOut';
            this.dataservice.setOrigin("");
        } else if(this.origin=="left"){
            this.wizardContainer.css("transform","translateX(100%)");
            this.wizardContainer.css("opacity","0");
            this.state='startFromOut';
            this.dataservice.setOrigin("");
        }
        return {
            wizardContainer:this.wizardContainer,
            state:this.state
        };
    };

    navigate(event,backUrl,nextUrl){
        if(event.toState=="startToLeft") {
            this.dataservice.setOrigin("left");
            this.router.navigate([backUrl]);
        } else  if(event.toState=="startDisappear") {
            this.dataservice.setOrigin("left");
            this.router.navigate([backUrl]);
        } else if(event.toState=="startToRight") {
            this.dataservice.setOrigin("right");
            this.router.navigate([nextUrl]);
        } else if(event.toState=="startFromOut") {
            this.wizardContainer.css("transform", "translateX(0%)");
            this.wizardContainer.css("opacity", "1");
        }
    }
}