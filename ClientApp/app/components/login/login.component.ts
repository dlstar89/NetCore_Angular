import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    constructor(private auth: AuthService) { }

    loginData: any = {
        email: '',
        password: ''
    }

    login() {
        this.auth.login(this.loginData);
    }
}