import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { EventService} from '../../../services/event.service.client';
import { Event } from '../../../models/event.model.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  uid: String;
  wid: String;
  events: Event[];
  name: String;
  description: String;
  registered: boolean;
  submitSuccess: boolean;
  event: Event = {
    _id: '',
    name: '',
    orgId: '',
    description: ''
  };
  user: any;

  constructor(private activeRouter: ActivatedRoute, private eventService: EventService,
              private sharedService: SharedService) { }

  rsvp() {
    this.eventService.register(this.user._id, this.event._id)
      .subscribe(
        (data: any) => {
          this.registered = true;
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
          (events: Event[]) => {
            this.events = events;
            this.eventService.findEventById(this.wid)
              .subscribe(
                (event: Event) => {
                  this.event = event;
                  this.name = this.event.name;
                  this.description = this.event.description;
                }
              );
          }
        );
    });
  }
}
