import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/toPromise';

/**
 * Web service which will handle API calls
 */

@Injectable()
export class WebService {

    constructor(private http: Http) { }

    getMessages() {
        return this.http.get('http://localhost:57635/api/messages').toPromise();
    }
}