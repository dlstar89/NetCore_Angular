import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthService } from './auth.service'

import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';

/**
 * Web service which will handle API calls
 */

@Injectable()
export class WebService {

    BASE_URL = 'http://localhost:57635/api';

    private messageStore: any = [];

    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

    constructor(private http: Http, private sb: MatSnackBar, private auth: AuthService) { }

    getMessages(user?: String) {
        user = (user) ? '/' + user : '';
        this.http.get(this.BASE_URL + '/messages' + user).subscribe(
            response => {
                this.messageStore = response.json();
                this.messageSubject.next(this.messageStore);
            }, error => {
                this.handleError('Unable to GET messages!');
            });
    }

    async postMessage(message: any) {
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubject.next(this.messageStore);
        } catch (e) {
            this.handleError('Unable to POST message!');
        }
    }

    getUser() {
        return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeader).map(res => res.json());
    }

    saveUser(userDate: any) {
        return this.http.post(this.BASE_URL + '/users/me', userDate, this.auth.tokenHeader).map(res => res.json());
    }

    private handleError(error: any) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 3000 });
    }
}