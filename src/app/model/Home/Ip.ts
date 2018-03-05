export class Ip {

  ip: string;
  editable: boolean;

  constructor(data: any) {
      this.ip = data.ip;
      this.editable = data.editable ? data.editable : false;
  }

  static getDummyIps() {
    return [
      {ip: '192.168.0.1'},
      {ip: '192.168.0.0/16'},
      {ip: '127.0.0.0/8'}
    ];
  }

  static getDummyIps2() {
    return [
      {ip: '192.168.0.255'},
      {ip: '192.168.0.0/32'},
      {ip: '127.0.0.0/8'}
    ];
  }
}
