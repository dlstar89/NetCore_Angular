import { Component, OnInit } from '@angular/core';
import { WebService } from '../_services/web.service';

@Component({
    selector: 'messages',
    templateUrl: 'messages.component.html',
    styleUrls: ['messages.component.css','../../../GlobalStyle.css']
})
export class MessagesComponent {
    
    constructor(private webService: WebService) {}
}
 