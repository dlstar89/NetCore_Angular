import { Component } from '@angular/core';
import { WebService } from '../_services/web.service';
import { AuthService } from '../_services/auth.service';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css', '../../../GlobalStyle.css']
})

export class UserComponent {

    model = {
        firstName: '',
        lastName: ''
    }

    constructor(private webService: WebService, private auth: AuthService) { }

    ngOnInit() {
        this.webService.getUser().subscribe(res => {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        })
    }

    saveUser(userData: any) {
        this.webService.saveUser(userData).subscribe(res => {
            this.auth.updateUserCookieData(res);
        });
    }
}