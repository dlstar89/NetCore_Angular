import { Component} from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { NewMessageComponent } from '../forms/message/new-message.component';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    /*
    @ViewChild(MessagesComponent) messages: MessagesComponent;
    onPosted(message: any) {
        this.messages.messages.push(message);
    }
    */
}
