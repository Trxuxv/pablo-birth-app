import { Component } from '@angular/core';
import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
    templateUrl: './pablo-by-people.component.html'
})
export class DisplayComponent {
    constructor(private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Utilities' },
            { label: 'Display', routerLink: ['/utilities/display'] }
        ]);
    }
}
