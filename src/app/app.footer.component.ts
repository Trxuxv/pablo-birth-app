import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer">
            <a id="footerlogolink">
                <img id="footer-logo"
                     src="assets/layout/images/pwhite.png" width="40px"/>
            </a>
            <div class="social-icons">
                <a href="https://github.com/Trxuxv"><i class="pi pi-github"></i></a>
            </div>
        </div>
    `
})
export class AppFooterComponent {
    constructor(public app: AppComponent) { }
}