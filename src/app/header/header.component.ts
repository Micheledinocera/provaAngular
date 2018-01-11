import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from "../service/data/data.service";
import {Router} from "@angular/router";
import {User} from "../model/User";
import {EventEmitterService} from "../service/event-emitter/event-emitter.service";
import {CookieService} from "ngx-cookie-service";

declare var jquery:any;
declare var $ :any;

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'ittweb-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    showBack:boolean=false;
    user:User;
    // private userMenu=[{title:"Account"},{title:"Plan"},{title:"Logout"}]
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
        $(".user-dropdown-menu").toggleClass("d-none");
    }

    wizardClick(){
        $(".user-dropdown-menu").addClass("d-none");
        this.router.navigate(['wizard']);
    }

    logoutClick(){
        $(".user-dropdown-menu").addClass("d-none");
        this.user= new User("");
        this.dataservice.setUser(this.user);
        this.cs.delete("username");
        this.cs.delete("password");
        this.router.navigate(['']);
    }
}
