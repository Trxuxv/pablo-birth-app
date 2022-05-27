import { PeopleModel } from './models/people.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(user: string, password: string) {
        return this.http.get<any>('assets/demo/data/people/people.json')
            .toPromise()
            .then(res => res.data as PeopleModel[])
            .then(data => {
                var userAuthenticated = data.find(x => x.user == user && x.password == password)

                if (userAuthenticated) {
                    localStorage.setItem("token", userAuthenticated.token)
                    return userAuthenticated;
                }
                else {
                    localStorage.clear();
                }
            });
    }

    getDataUserLoggedIn() {
        return this.http.get<any>('assets/demo/data/people/people.json')
            .toPromise()
            .then(res => res.data as PeopleModel[])
            .then(data => {
                var token = localStorage.getItem("token")
                var userAuthenticated = data.find(x => x.token == token)
                return userAuthenticated;
            });
    }

    logout() {
        localStorage.clear();
    }
}
