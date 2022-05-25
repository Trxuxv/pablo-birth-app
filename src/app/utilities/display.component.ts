import { AppBreadcrumbService } from '../app.breadcrumb.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: './display.component.html'
})
export class DisplayComponent {
    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Utilities' },
            { label: 'Display', routerLink: ['/utilities/display'] }
        ]);
    }
}