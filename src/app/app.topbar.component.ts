import { PeopleModel } from './pages/login/models/people.model';
import { Router } from '@angular/router';
import { LoginService } from './pages/login/login.service';
import { AppMainComponent } from './app.main.component';
import { AppComponent } from './app.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="layout-topbar">
            <div class="layout-topbar-wrapper">
                <div class="layout-topbar-left">
                    <div class="layout-topbar-logo" id="logolink" style="cursor: pointer; outline: none;" routerLink="/">
                        <img id="app-logo"
                             [src]="'assets/layout/images/pwhite.png'"
                             alt="poseidon-layout">
                    </div>
                </div>

                <div class="layout-topbar-right">
                    <a class="menu-button" href="#" (click)="appMain.onMenuButtonClick($event)">
                        <i class="pi pi-bars"></i>
                    </a>

                    <ul class="layout-topbar-actions">            
                        <li #profile class="topbar-item user-profile"
                            [ngClass]="{'active-topmenuitem':appMain.activeTopbarItem === profile}">
                            <a href="#" (click)="appMain.onTopbarItemClick($event,profile)">
                                <img class="profile-image" src="{{userLogged?.image}}" alt="demo">
                                <div class="profile-info">
                                    <h6>Peter Taylor</h6>
                                    <span>Webmaster</span>
                                </div>
                            </a>

                            <ul class="fadeInDown">
                                <li class="layout-submenu-header">
                                    <img class="profile-image" src="{{userLogged?.image}}" alt="demo">
                                    <div class="profile-info">
                                        <h6>Peter Taylor</h6>
                                        <span>Webmaster</span>
                                    </div>
                                </li>
                                <li role="menuitem">
                                    <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                        <i class="pi pi-cog"></i>
                                        <h6>Settings</h6>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                        <i class="pi pi-file-o"></i>
                                        <h6>Terms of Usage</h6>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="#" (click)="appMain.onTopbarSubItemClick($event)">
                                        <i class="pi pi-compass"></i>
                                        <h6>Support</h6>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a (click)="onLoggout()">
                                        <i class="pi pi-power-off"></i>
                                        <h6>Logout</h6>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `
})
export class AppTopBarComponent implements OnInit {

    userLogged: PeopleModel;

    constructor(public appMain: AppMainComponent, public app: AppComponent, private service: LoginService, private route: Router) {
    }

    ngOnInit() {
        this.service.getDataUserLoggedIn()
            .then(x => this.userLogged = x)
    }

    onLoggout() {
        this.service.logout();
        this.route.navigate([('/login')])
    }

}