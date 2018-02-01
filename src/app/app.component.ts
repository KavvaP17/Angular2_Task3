import { Component, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';
import { AuthorizationService } from './services/authorization.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public modalInfo = {
        isShow: false,
        deletedItemId: -1
    };

    public authorizatedInfo = {
        isAuthorizated: false,
        user: ''
    };

    constructor(private modalService: ModalService,
                private authorizationService: AuthorizationService) { }

    ngOnInit() {
        this.modalInfo = this.modalService.modalIsShow();
        this.authorizatedInfo.isAuthorizated = this.authorizationService.isAuthenticated();
        if (this.authorizatedInfo.isAuthorizated) {
            this.authorizatedInfo.user = this.authorizationService.GetUserInfo();
        }
    }

    authorizated(data): void {
        this.authorizationService.login(data.login, data.password);
        this.authorizatedInfo.isAuthorizated = this.authorizationService.isAuthenticated();
        this.authorizatedInfo.user = data.login;
    }
}
