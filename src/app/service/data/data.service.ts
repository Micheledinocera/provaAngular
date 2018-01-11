import { Injectable } from '@angular/core';
import {User} from "../../model/User"
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private user = new BehaviorSubject<User>(new User(""));

  constructor() { }

  setUser(user:User){
    this.user.next(user);
  }
  getUser(){
    return this.user.getValue();
  }

}
