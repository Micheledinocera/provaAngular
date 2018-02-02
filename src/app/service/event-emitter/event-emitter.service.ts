import {Component, Injectable, Input, Output, EventEmitter} from '@angular/core';

@Injectable()
export class EventEmitterService {
    onLoginEvent: EventEmitter<any> = new EventEmitter();

    onSelectSiteEvent: EventEmitter<any> = new EventEmitter();

    onLoadingEvent: EventEmitter<any> = new EventEmitter();

    onModalDismissEvent: EventEmitter<any> = new EventEmitter();
}
