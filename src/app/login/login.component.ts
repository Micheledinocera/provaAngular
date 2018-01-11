import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {LoginResponse} from "../service/responses/LoginResponse";
import {MyToasterService} from "../service/toaster/my-toaster.service";
import {DataService} from "../service/data/data.service";
import {User} from "../model/User"
import {EventEmitterService} from "../service/event-emitter/event-emitter.service";
import { CookieService } from 'ngx-cookie-service';

declare var jquery:any;
declare var $ :any;

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private user:User;

    constructor(
        private http : HttpClient,
        private router: Router,
        private toaster: MyToasterService,
        private dataservice:DataService,
        private ee:EventEmitterService,
        private cs:CookieService
    ){}

    onSubmit (form: NgForm) {
        $(".form-control").removeClass("form-control-danger");
        this.login(form.value.username,form.value.password,true);
    }

    login(username,password,showError){
        if(username=="dummy" && password=="dummy"){
            let data={
                type:"user",
                name:"utente",
                surname:"dummy"
            };
            this.user = new User(data);
            this.dataservice.setUser(this.user);
            this.ee.onLoginEvent.emit(this.user);
            this.router.navigate(['wizard']);
        } else {
            var url = 'http://localhost:8080/api/roba?username=' + username + '&password=' + password;

            this.http.get<LoginResponse>(url).subscribe(
                data => {
                    this.user = new User(data);
                    this.dataservice.setUser(this.user);
                    this.ee.onLoginEvent.emit(this.user);
                    if (this.user.isAdmin())
                        this.router.navigate(['superAdmin']);
                    else
                        this.router.navigate(['wizard']);
                }, err => {
                    if(showError) {
                        this.toaster.showToast('error', err.error.message, '');
                        $(".form-control").addClass("form-control-danger");
                    }
                });
        }
        this.cs.set("username",username);
        this.cs.set("password",password);
    }

    ngOnInit() {}

}