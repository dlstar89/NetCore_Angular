import { Component, Output, EventEmitter } from '@angular/core';
import { WebService } from '../../_services/web.service';

@Component({
    selector: 'new-message',
    templateUrl: './new-message.component.html',
    styleUrls: ['./new-message.component.css', '../../../../GlobalStyle.css']
})

export class NewMessageComponent {

    //@Output() onPosted = new EventEmitter();

    constructor(private webService: WebService) { }

    message = {
        owner: "",
        text: ""
    }

    post() {
        this.webService.postMessage(this.message);
        //this.onPosted.emit(this.message);
    }
}