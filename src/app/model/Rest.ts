import { HttpHeaders } from '@angular/common/http';

export class Rest {
  static protocol = 'http://';
  // static protocol = 'https://';

  static host = 'accela.dev1.accelasearch.net/';
  // static host = 'svc10.accelasearch.io/';

  // get
  static URL_COUNTRIES= Rest.protocol + Rest.host + 'countries';
  static URL_LANGUAGES= Rest.protocol + Rest.host + 'languages';
  // post
  static URL_NEW_CUSTOMER= Rest.protocol + Rest.host + 'customers/newcustomer';
  // static URL_NEW_CUSTOMER= 'http://dev1.accelasearch.net/customers/newcustomer';

  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
}
