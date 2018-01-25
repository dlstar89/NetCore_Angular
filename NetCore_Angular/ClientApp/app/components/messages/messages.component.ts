import { Component, OnInit } from '@angular/core';
import { WebService } from '../_services/web.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'messages',
    templateUrl: 'messages.component.html',
    styleUrls: ['messages.component.css', '../../../GlobalStyle.css']
})
export class MessagesComponent {

    constructor(private webService: WebService, private route: ActivatedRoute) { }

    ngOnInit() {
        console.log(this.route.snapshot.params.name);
    }
}
