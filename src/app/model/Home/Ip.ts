export class Ip {

  ip: string;
  editable: boolean;

  constructor(data: any) {
      this.ip = data.ip;
      this.editable = false;
  }

  static getDummyIps() {
    return [
      {word: '192.168.0.1', editable: false},
      {word: '192.168.0.0/16', editable: false},
      {word: '127.0.0.0/8', editable: false}
    ];
  }
}
