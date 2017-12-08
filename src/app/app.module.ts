import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillEditorModule } from 'ngx-quill-editor';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteNewComponent } from './components/event/event-new/event-new.component';
import { WebsiteEditComponent } from './components/event/event-edit/event-edit.component';
import { WebsiteListComponent } from './components/event/event-list/event-list.component';

import { UserService } from './services/user.service.client';
import { WebsiteService } from './services/website.service.client';

import {SharedService} from './services/shared.service.client';
import {AuthenticationService} from './services/authentication.service.client';
import {HomeService} from './services/home.service.client';
import { ChooseComponent } from './components/user/choose/choose.component';
@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteEditComponent,
    WebsiteNewComponent,
    WebsiteListComponent,
    ChooseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    QuillEditorModule
  ],
  // Client Side services here
  providers: [
    UserService,
    WebsiteService,
    SharedService,
    AuthenticationService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
