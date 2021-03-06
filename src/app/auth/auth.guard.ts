import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    url: String;
    constructor(
        private router: Router,
        private authenticationService: AuthentificationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            this.url = route.url.join('');
            console.log(this.url+"L3asba");
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}