export class User {

    type= '';
    name= '';
    surname= '';
    mail= '';
    picture;

    constructor(response: any) {
        if (!!response.type) {
            this.type = response.type;
            this.name = response.name;
            this.surname = response.surname ? response.surname : '';
            this.mail = response.mail;
            this.picture = response.picture ? response.picture : 'assets/saitama.png';
        }
    }

    static getDummyUsers() {
      return [
        {
          type: 'admin',
          name: 'utente2',
          mail: 'utente2.1@dummy.com'
        }, {
          type: 'user',
          name: 'utente2',
          mail: 'utente2.2@dummy.com',
        }, {
          type: 'super-admin',
          name: 'utente2',
          mail: 'utente2.3@dummy.com',
        }, {
          type: 'user',
          name: 'utente2',
          mail: 'utente2.4@dummy.com',
        }, {
          type: 'user',
          name: 'utente2',
          mail: 'utente2.5@dummy.com',
        }
      ];
    }

    static getDummyUsers2() {
      return [
        {
          type: 'admin',
          name: 'utente1',
          mail: 'utente1.1@dummy.com',
        }, {
          type: 'user',
          name: 'utente1',
          mail: 'utente1.2@dummy.com',
        }, {
          type: 'super-admin',
          name: 'utente1',
          mail: 'utente1.3@dummy.com',
        }
      ];
    }

    isAdmin() {
        return this.type === 'admin';
    }

    isEmpty() {
        return this.type === '';
    }
}
