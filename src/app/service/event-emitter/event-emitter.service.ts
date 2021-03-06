import {Component, Injectable, Input, Output, EventEmitter} from '@angular/core';

@Injectable()
export class EventEmitterService {
    onLoginEvent: EventEmitter<any> = new EventEmitter();

    onSelectSiteEvent: EventEmitter<any> = new EventEmitter();

    onHomeEvent: EventEmitter<any> = new EventEmitter();

    onModalDismissEvent: EventEmitter<any> = new EventEmitter();

    onCompletedEvent: EventEmitter<any> = new EventEmitter();

    onEditWizardEvent: EventEmitter<any> = new EventEmitter();

    onComponentAppear: EventEmitter<any> = new EventEmitter();
}
