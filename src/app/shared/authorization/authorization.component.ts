import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {
    public login: string;
    public password: string;

    @Output() authorizated = new EventEmitter<any>();

    constructor(private authorizationService: AuthorizationService) { }

    ngOnInit() {
    }

    clickEnter(): void {
    }

    authorizatedUser(): void {
        this.authorizated.emit({login: this.login, password: this.password});
    }
}
