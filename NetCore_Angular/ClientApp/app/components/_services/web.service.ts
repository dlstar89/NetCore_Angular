import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { MatSnackBar } from '@angular/material';

/**
 * Web service which will handle API calls
 */

@Injectable()
export class WebService {

    BASE_URL = 'http://localhost:57635/api';

    messages:any = [];

    constructor(private http: Http, private sb: MatSnackBar) {
        this.getMessages();
    }

    async getMessages() {
        try {
            var response = await this.http.get(this.BASE_URL + '/messages').toPromise();
            this.messages = response.json();
        } catch (e) {
            this.handleError('Unable to GET messages!');
        }        
    }

    async postMessage(message: any) {
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messages.push(response.json());
        } catch (e) {
            this.handleError('Unable to POST message!');
        }        
    }

    private handleError(error:any) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 3000 });
    }
}