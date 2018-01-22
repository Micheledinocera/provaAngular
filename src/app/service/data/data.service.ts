import { Injectable } from '@angular/core';
import { User } from "../../model/User"
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private user = new BehaviorSubject<User>(new User(""));
  private origin = new BehaviorSubject<String>("");
  private static timeRanges=["Last Week","Last Month","Last Year"];
  constructor() { }

  setUser(user:User){
    this.user.next(user);
  }
  getUser(){
    return this.user.getValue();
  }

  setOrigin(origin:String){
      this.origin.next(origin);
  }
  getOrigin(){
      return this.origin.getValue();
  }

  static getTimeRanges(){
      return this.timeRanges;
  }
}
