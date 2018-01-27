import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { MessagesComponent } from './components/messages/messages.component';
import { NewMessageComponent } from './components/forms/message/new-message.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

import { NavComponent } from './components/navmenu/nav.component';

import { WebService } from './components/_services/web.service';
import { AuthService } from './components/_services/auth.service';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,

        NavComponent,
        MessagesComponent,
        NewMessageComponent,
        RegisterComponent,
        LoginComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatSlideToggleModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule,
        MatToolbarModule,

        RouterModule.forRoot([
            //{ path: '', redirectTo: 'home', pathMatch: 'full' },
            //{ path: 'home', component: HomeComponent },
            //{ path: 'counter', component: CounterComponent },
            //{ path: 'fetch-data', component: FetchDataComponent },

            { path: '', component: HomeComponent },
            { path: 'messages', component: MessagesComponent },
            { path: 'messages/:name', component: MessagesComponent },

            { path: 'register', component: RegisterComponent },
            { path: 'login', component: LoginComponent },
            
            { path: 'user', component: UserComponent },

            { path: '**', redirectTo: '' },
            //{ path: '**', redirectTo: 'home' },
        ])
    ],
    providers: [
        WebService,
        AuthService
    ]
})
export class AppModuleShared {
}
