import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LogoComponent } from './shared/header/logo/logo.component';
import { LoginComponent } from './shared/header/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';

import { MainModule } from './pages/main.module';
import { ModalConfirmComponent } from './shared/modal-confirm/modal-confirm.component';
import { ModalService } from './services/modal.service';
import { CoursesService } from './services/courses.service';
import { AuthorizationComponent } from './shared/authorization/authorization.component';
import { AuthorizationService } from './services/authorization.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        LoginComponent,
        FooterComponent,
        ModalConfirmComponent,
        AuthorizationComponent
    ],
    imports: [
        MainModule,
        BrowserModule,
        FormsModule
    ],
    providers: [
        ModalService,
        CoursesService,
        AuthorizationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
