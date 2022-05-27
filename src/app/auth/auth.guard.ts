import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        return this.canLoad();
    }

    canLoad(): boolean {
        if (localStorage.getItem("token") != null) {
            return true;
        } else {
            this.router.navigate(['/login'])
            return false;
        }
    }
}
