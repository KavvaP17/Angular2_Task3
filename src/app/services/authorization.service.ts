import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {

    constructor() { }

    login(user: string, password: string): void {
        localStorage.setItem('user', JSON.stringify({user, password}));
    }

    logout(): void {
        localStorage.removeItem('user');

    }

    isAuthenticated(): boolean {
        if (localStorage.getItem('user')) {
            return true;
        }
        return false;
    }

    GetUserInfo() {
        return JSON.parse(localStorage.getItem('user')).user;
    }

}
