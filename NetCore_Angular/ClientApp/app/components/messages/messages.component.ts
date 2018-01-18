import { Component, OnInit } from '@angular/core';
import { WebService } from '../_services/web.service';

@Component({
    selector: 'messages',
    templateUrl: 'messages.component.html',
    styleUrls: ['messages.component.css']
})
export class MessagesComponent {
    
    constructor(private webService: WebService) {}

    async ngOnInit() {
        var response = await this.webService.getMessages();
        this.messages = response.json();
    }

    messages = [];
}
 