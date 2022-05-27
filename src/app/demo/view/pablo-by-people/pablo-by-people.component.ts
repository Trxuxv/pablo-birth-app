import { AppBreadcrumbService } from 'src/app/app.breadcrumb.service';
import { PabloByPeopleModel } from './models/people-by-people.model';
import { PabloByPeopleService } from './people-by-people.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './pablo-by-people.component.html'
})
export class PabloByPeopleComponent implements OnInit {

    hate: PabloByPeopleModel;

    constructor(private breadcrumbService: AppBreadcrumbService, private pabloBypeopleService: PabloByPeopleService, private route: ActivatedRoute) {
        this.breadcrumbService.setItems([
            { label: 'Utilities' },
            { label: 'Pablo by People', routerLink: ['/utilities/display'] }
        ]);
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.onGetData(params['id']);
        })
    }

    onGetData(id: number) {
        this.pabloBypeopleService.getCustomersMedium().then(x => {
            this.hate = x.find(x => x.id == id)
        })
    }

}