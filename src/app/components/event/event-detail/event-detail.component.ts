import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { EventService} from '../../../services/event.service.client';
import { Event } from '../../../models/event.model.client';
import {SharedService} from '../../../services/shared.service.client';
import DateTimeFormat = Intl.DateTimeFormat;
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';
import {HomeService} from "../../../services/home.service.client";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  uid: String;
  wid: String;
  events: [Event];
  runners: [User];
  vols: [User];
  name: String;
  description: String;
  address: String;
  city: String;
  state: String;
  time: DateTimeFormat;
  registered: boolean;
  result: Object = '';
  event: Event = {
    _id: '',
    name: '',
    orgId: '',
    description: '',
    address: '',
    city: '',
    state: '',
    time: new DateTimeFormat
  };
  user: any;

  constructor(private activeRouter: ActivatedRoute, private eventService: EventService,
              private sharedService: SharedService, private userService: UserService,
              private homeService: HomeService) { }

  rsvp() {
    this.eventService.register(this.user._id, this.event._id)
      .subscribe(
        (data: any) => {
          this.registered = true;
        }
      );
  }

  findRegister(wid) {
    this.userService.findRegister(wid, 'runner')
      .subscribe(
        (data: any) => {
          this.runners = data;
          this.userService.findRegister(wid, 'volunteer')
            .subscribe(
              (data2: any) => {
                this.vols = data2;
                this.searchWeather();
              }
            );
        }
      );
  }

  searchWeather() {
    this.homeService.searchWeather(this.city, this.state)
      .subscribe(
        (data: any) => {
          this.result = data.current_observation;
        }
      );
  }


  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.user = this.sharedService.user;
      this.registered = false;
      this.eventService.findEventsByUser(this.uid)
        .subscribe(
          (events: [Event]) => {
            this.events = events;
            this.eventService.findEventById(this.wid)
              .subscribe(
                (event: Event) => {
                  this.event = event;
                  this.name = this.event.name;
                  this.description = this.event.description;
                  this.address = this.event.address;
                  this.city = this.event.city;
                  this.state = this.event.state;
                  this.time = this.event.time;
                  this.findRegister(this.wid);
                }
              );
          }
        );
    });
  }
}
