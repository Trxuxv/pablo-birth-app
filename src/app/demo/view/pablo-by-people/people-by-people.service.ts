import { PabloByPeopleModel } from './models/people-by-people.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PabloByPeopleService {

    constructor(private http: HttpClient) { }

    getCustomersMedium() {
        return this.http.get<any>('assets/demo/data/hates/hates.json')
            .toPromise()
            .then(res => res.data as PabloByPeopleModel[])
            .then(data => data);
    }

}
