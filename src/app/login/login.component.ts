import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {LoginResponse} from '../service/responses/LoginResponse';
import {DataService} from '../service/data/data.service';
import {User} from '../model/User';
import {EventEmitterService} from '../service/event-emitter/event-emitter.service';
import { CookieService } from 'ngx-cookie-service';
import { KitNotificationService } from '@ngx-kit/core';

declare var jquery: any;
declare var $: any;

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    private user: User;
    public loading= false;

    constructor(
        private http: HttpClient,
        private router: Router,
        private dataservice: DataService,
        private ee: EventEmitterService,
        private cs: CookieService,
        private notificationService: KitNotificationService
    ) {}

    onSubmit (form: NgForm) {
        $('.form-control').removeClass('form-control-danger');
        this.login(form.value.username, form.value.password, true);
    }

    login(username, password, showError) {
          if (username === 'dummy' && password === 'dummy') {
          const data = {
            type: 'user',
            name: 'utente',
            surname: 'dummy',
            mail: 'dummy@dummy.com'
          };
          this.user = new User(data);
          this.dataservice.setUser(this.user);
          this.dataservice.getDummyWebsites();
          this.ee.onLoginEvent.emit({
            user: this.user,
            sites: this.dataservice.getSitesList()});
          if (this.dataservice.checkAtLeastOneCompletedSite()) {
            this.dataservice.setSelectedSite(this.dataservice.getSitesList()[0].name);
            this.router.navigate(['home/dashboard']);
          } else
            this.router.navigate(['wizard']);
          this.cs.set('username', username);
          this.cs.set('password', password);
        } else {
          const url = 'http://localhost:8080/api/roba?username=' + username + '&password=' + password;

          this.http.get<LoginResponse>(url).subscribe(
            data => {
              this.user = new User(data.user);
              this.dataservice.setUser(this.user);
              this.cs.set('username', username);
              this.cs.set('password', password);
              const sites = this.dataservice.getWebsites(data.websites);
              this.ee.onLoginEvent.emit({
                user: this.user,
                sites: this.dataservice.getSitesList()}
              );
              if (this.dataservice.checkAtLeastOneCompletedSite()) {
                this.dataservice.setSelectedSite(this.dataservice.getSitesList()[0].name);
                this.router.navigate(['home/dashboard']);
              } else
                this.router.navigate(['wizard']);
            }, err => {
              if (showError) {
                  this.notificationService.config({position: 'top-right'});
                  this.notificationService.open({message: err.error.message, className: 'warn'});
                  // $('.form-control').addClass('form-control-danger');
              }
            });
        }
    }

    ngOnInit() {
      window.scrollTo(0, 0);
    }

}
