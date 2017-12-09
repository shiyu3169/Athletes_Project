import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { EventEditComponent } from './components/event/event-edit/event-edit.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { EventNewComponent } from './components/event/event-new/event-new.component';
import { AuthenticationService } from './services/authentication.service.client';
import { HomeComponent } from './components/home/home.component';
import { ChooseComponent } from './components/user/choose/choose.component';
import { EventDetailComponent } from './components/event/event-detail/event-detail.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'choose', component: ChooseComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: ProfileComponent, canActivate: [AuthenticationService] },
  {path: 'user/:uid/event', component: EventListComponent, canActivate: [AuthenticationService] },
  {path: 'user/:uid/event/new', component: EventNewComponent, canActivate: [AuthenticationService] },
  {path: 'user/:uid/event/:wid', component: EventEditComponent, canActivate: [AuthenticationService] },
  {path: 'user/:uid/event/:wid/detail', component: EventDetailComponent, canActivate: [AuthenticationService] }
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
