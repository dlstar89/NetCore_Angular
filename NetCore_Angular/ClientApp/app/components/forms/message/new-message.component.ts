import { Component, Output, EventEmitter } from '@angular/core';
import { WebService } from '../../_services/web.service';
import { AuthService } from '../../_services/auth.service';

@Component({
    selector: 'new-message',
    templateUrl: './new-message.component.html',
    styleUrls: ['./new-message.component.css', '../../../../GlobalStyle.css']
})

export class NewMessageComponent {

    //@Output() onPosted = new EventEmitter();

    constructor(private webService: WebService, private auth: AuthService) { }

    message = {
        owner: "",//this.auth.name,
        text: ""
    }

    post() {
        //Owner is set here as otherwise the app throws an error
        this.message.owner = this.auth.name as string;
        this.webService.postMessage(this.message);
    }
}