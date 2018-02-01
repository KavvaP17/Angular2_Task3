import { Component, OnInit, Input} from '@angular/core';
import { AuthorizationService } from '../../../services/authorization.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @Input() userInfo;

    constructor(private authorizationService: AuthorizationService) { }

    ngOnInit() {
    }

    logOff(): void {
        this.userInfo.isAuthorizated = false;
        this.authorizationService.logout();
    }
}
