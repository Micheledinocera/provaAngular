import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'


@Injectable()
export class EventEmitterService {
    onLoginEvent: EventEmitter<any> = new EventEmitter();
}
