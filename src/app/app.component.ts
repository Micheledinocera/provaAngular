import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {User} from "./model/User";
import {DataService} from "./service/data/data.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {LoginComponent} from "./login/login.component";
import {EventEmitterService} from "./service/event-emitter/event-emitter.service";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private user:User;
    public loading=false;
    constructor(
        private dataservice:DataService,
        private router:Router,
        private cs:CookieService,
        private lc:LoginComponent,
        private ee:EventEmitterService
        ){
        ee.onLoadingEvent.subscribe(
            (loading) => {
                this.loading= loading;
            }
        );
    }

    ngOnInit(){
        this.user=this.dataservice.getUser();
        if(this.dataservice.getUser().type==""){
            this.router.navigate(['']);
            this.lc.login(this.cs.get("username"),this.cs.get("password"),false);
        }
    }


    title = 'app';
}
