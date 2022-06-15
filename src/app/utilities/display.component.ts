import { AppBreadcrumbService } from '../app.breadcrumb.service';
import { PhotoService } from '../demo/service/photoservice';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './display.component.html'
})
export class DisplayComponent  implements OnInit{
    constructor(private breadcrumbService: AppBreadcrumbService, private photoService: PhotoService ) {
        this.breadcrumbService.setItems([
            { label: 'Utilities' },
            { label: 'Display', routerLink: ['/utilities/display'] }
        ]);
    }

    galleriaResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];


    images: any[];

    ngOnInit(): void {
        this.photoService.getImages().then(images => {
            this.images = images;
        });
    }
}