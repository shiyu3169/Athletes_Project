import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { EventService} from '../../../services/event.service.client';
import { Event } from '../../../models/event.model.client';
import { NgForm } from '@angular/forms';

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
  event: Event = {
    _id: '',
    name: '',
    orgId: '',
    description: ''
  };

  constructor(private activeRouter: ActivatedRoute, private eventService: EventService) { }

  rsvp() {}

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
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
