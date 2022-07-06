import { PeopleModel } from './../login/models/people.model';
import { ActivatedRoute, Params } from '@angular/router';
import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

    user: PeopleModel;

    constructor(private service: LoginService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.service.getDataUserById(params['id']).then(x => {
                console.log(x)
                this.user = x
            });
        })
    }
}