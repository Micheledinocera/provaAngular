import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm, FormControl, FormGroup, Validators} from '@angular/forms';
import {Rest} from '../model/Rest';
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
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

    public loading= false;
    public countriesISO= [];
    public languagesISO= [];
    public countryISO= 'Country';
    public languageISO= 'Language';
    // public emailPattern= '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]';
    public emailPattern= '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}';
    public params = {
      contact_name: null,
      company: null,
      address: null,
      address2: null,
      country_iso: this.countryISO,
      state: null,
      zip_code: null,
      city: null,
      vat: null,
      phone: null,
      website: null,
      email: null,
      account_name: null,
      first_name: null,
      last_name: null,
      lang_iso: this.languageISO,
      user_phone: null,
      user_email: null,
      password: null,
      datetime_format_id: null,
      timezone_id: null,
      number_format_id: null
    };
    constructor(
        private http: HttpClient,
        private router: Router,
        private dataservice: DataService,
        private ee: EventEmitterService,
        private cs: CookieService,
        private notificationService: KitNotificationService
    ) {
      notificationService.config({position: 'top-left'});
    }

    ngOnInit() {
      this.http.get<any>(Rest.URL_COUNTRIES).subscribe(
        data => {this.countriesISO = data; } , err => {}
      );
      this.http.get<any>(Rest.URL_LANGUAGES).subscribe(
        data => {this.languagesISO = data; } , err => {}
      );
    }

    onSubmit (form: NgForm) {
        if (form.form.valid) {
          this.http.post<any>(Rest.URL_NEW_CUSTOMER, this.params, Rest.httpOptions).subscribe(
            data => {
              this.notificationService.open({message: data.message, className: ''});
            },
            err => {debugger; }
          );
        } else {
          this.notificationService.open({message: 'Check the inserted fields', className: 'warn'});
        }
    }
}
