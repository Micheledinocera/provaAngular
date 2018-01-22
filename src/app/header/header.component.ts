import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from "../service/data/data.service";
import {Router} from "@angular/router";
import {User} from "../model/User";
import {EventEmitterService} from "../service/event-emitter/event-emitter.service";
import {CookieService} from "ngx-cookie-service";
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

declare var jquery:any;
declare var $ :any;

@Component({
    host: {
        '(document:click)': 'onClick($event)'
    },
    encapsulation: ViewEncapsulation.None,
    selector: 'ittweb-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    animations:[
        trigger('appear',[
            state('hide',style({
                opacity:0,
            })),
            state('show',style({
                opacity:1,
            })),
            transition('hide <=> show',animate('100ms ease-in'))
        ])
    ]
})
export class HeaderComponent implements OnInit {

    showBack:boolean=false;
    user:User;
    state='hide';

    constructor(
        private dataservice:DataService,
        private router:Router,
        private ee:EventEmitterService,
        private cs:CookieService
    ) {
        ee.onLoginEvent.subscribe(
            (user) => {
                this.user= user;
            }
        );
    }

    ngOnInit() {
        this.user=this.dataservice.getUser();
    }

    backClick(){
        this.showBack=false;
        if(this.user.isEmpty()){
            this.router.navigate(['']);
        } else if(this.user.isAdmin())
            this.router.navigate(['superAdmin']);
        else
            this.router.navigate(['home']);
    }

    logoClick(){
        this.showBack=true;
    }

    userClick(){
        this.state= this.state=='hide'?'show':'hide';
    }

    wizardClick(){
        this.router.navigate(['wizard']);
    }

    logoutClick(){
        this.user= new User("");
        this.dataservice.setUser(this.user);
        this.cs.delete("username");
        this.cs.delete("password");
        this.router.navigate(['']);
    }

    onClick(event){
        if(event.target.parentElement!=null && event.target.parentElement.parentElement!=null && !event.target.parentElement.className.includes('header-user-action') && !event.target.parentElement.parentElement.className.includes('header-user-action'))
            this.state='hide';
    }
}
