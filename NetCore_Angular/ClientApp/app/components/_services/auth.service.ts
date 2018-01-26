import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

    BASE_URL = 'http://localhost:57635/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';

    constructor(private http: Http) { }

    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    register(user: any) {
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
            localStorage.setItem(this.TOKEN_KEY, res.json().token)
            localStorage.setItem(this.NAME_KEY, res.json().firstName)
        });
    }

    logout() {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
    }
}