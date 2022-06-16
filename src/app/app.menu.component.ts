import { Component, OnInit } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-menu',
    template: `
        <ul class="layout-menu">
            <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
        </ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppComponent) { }

    ngOnInit() {
        this.model = [
            {
                // label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'],
                label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home']

            },
            {
                label: 'Pablo By People', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    { label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon' },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-images', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['utilities'],
                items: [
                    { label: 'Photos', icon: 'pi pi-fw pi-image', routerLink: ['utilities/display'] },
                    // { label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation'] },
                    // { label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox'] },
                    // { label: 'Icons', icon: 'pi pi-fw pi-search', routerLink: ['utilities/icons'] },
                    // { label: 'Text', icon: 'pi pi-fw pi-pencil', routerLink: ['utilities/text'] },
                    { label: 'Widgets', icon: 'pi pi-fw pi-star-o', routerLink: ['utilities/widgets'] },
                    // { label: 'Grid System', icon: 'pi pi-fw pi-th-large', routerLink: ['utilities/grid'] },
                    // { label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', routerLink: ['utilities/spacing'] },
                    // { label: 'Typography', icon: 'pi pi-fw pi-align-center', routerLink: ['utilities/typography'] }
                ]
            },
            {
                label: 'Others', icon: 'pi pi-fw pi-circle-off', routerLink: ['/pages'],
                items: [
                    { label: 'Pablo Quizz', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud'] },
                    // { label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar'] },
                    // { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline'] },
                    // { label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
                    // { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login'] },
                    // { label: 'Invoice', icon: 'pi pi-fw pi-dollar', routerLink: ['/pages/invoice'] },
                    // { label: 'Help', icon: 'pi pi-fw pi-question-circle', routerLink: ['/pages/help'] },
                    // { label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['/error'] },
                    // { label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['/access'] },
                    // { label: 'Final Considerations', icon: 'pi pi-fw pi-circle-off', routerLink: ['/pages/empty'] }
                ]
            }
        ];
    }
}
