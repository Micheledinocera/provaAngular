import { HttpHeaders } from '@angular/common/http';

export class Rest {
  // get
  static URL_COUNTRIES= 'http://dev1.accelasearch.net/countries';
  static URL_LANGUAGES= 'http://dev1.accelasearch.net/languages';
  // post
  static URL_NEW_CUSTOMER= 'http://accela.dev1.accelasearch.net/customers/newcustomer';
  // static URL_NEW_CUSTOMER= 'http://dev1.accelasearch.net/customers/newcustomer';

  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
}
