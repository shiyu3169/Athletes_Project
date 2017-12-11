import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from '../../services/home.service.client';
import { SharedService } from '../../services/shared.service.client';
import { UserService } from '../../services/user.service.client';
import {EventService} from '../../services/event.service.client';
import {Event} from '../../models/event.model.client';
import {Router} from '@angular/router';
import {User} from '../../models/user.model.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('f') homeForm: NgForm;

  event: Event;
  state: String;
  city: String;
  following: boolean;
  login: boolean;
  result: Object = '';
  role: String;
  key: String;
  org: any = {};
  user: any = {
    role: ''
  };
  events: [Event];
  userData: [User];
  eventData: [Event];

  constructor(private homeService: HomeService, private sharedService: SharedService,
              private userService: UserService, private eventService: EventService, private router: Router) { }

  searchWeather() {
    this.city = this.homeForm.value.city;
    this.state = this.homeForm.value.state;
    this.homeService.searchWeather(this.city, this.state)
      .subscribe(
        (data: any) => {
          this.result = data.current_observation;
        }
      );
  }

  deleteUser(uid) {
    this.userService.deleteUser(uid)
      .subscribe(
        (data: any) => {
          this.list('user');
        }
      );
  }

  deleteEvent(wid) {
    this.eventService.deleteEvent(wid)
      .subscribe(
        (data: any) => {
          this.list('event');
        }
      );
  }

  list(role) {
    if (role === 'user') {
      this.userService.findAll()
        .subscribe(
          (data: any) => {
            this.userData = data;
          }
        );
    } else {
      this.eventService.findAll()
        .subscribe(
          (data: any) => {
            this.eventData = data;
          }
        );
    }
  }

  searchEvents() {
    this.eventService.searchEvent(this.key)
      .subscribe(
        (events: any) => {
          this.events = events;
        }
      );
  }

  selectEvent(id) {
    this.eventService.findEventById(id)
      .subscribe(
        (event: any) => {
          this.event = event;
          this.router.navigate(['user', event.orgId, 'event', event._id, 'detail']);
        }
      );
  }

  follow(uid, oid) {
    this.userService.follow(uid, oid)
      .subscribe(
        (data: any) => {
          this.following = true;
        }
      );
  }

  loggedIn() {
    this.userService.checkLogin()
      .subscribe(
        (data: any) => {
          this.login = data;
          this.user = this.sharedService.user
        }
      );
  }

  unfollow(uid, oid) {
    this.userService.unfollow(uid, oid)
      .subscribe(
        (data: any) => {
          this.following = false;
        }
      );
  }
  selectOrg(orgId) {
    this.userService.findUserById(orgId)
      .subscribe(
        (org: User) => {
          this.org = org;
        }
      );
  }

  checkFollow(uid, oid) {
    this.userService.checkFollow(uid, oid)
      .subscribe(
        (data: any) => {
          console.log(data);
          if (data) {
            this.following = true;
          } else {
            this.following = false;
          }
        }
      );
  }

  ngOnInit() {
    this.loggedIn();
  }
}
