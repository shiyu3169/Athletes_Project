import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { EventService} from '../../../services/event.service.client';
import { Event } from '../../../models/event.model.client';
import { NgForm } from '@angular/forms';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  @ViewChild('f') webForm: NgForm;

  uid: String;
  wid: String;
  events: Event[];
  name: String;
  description: String;
  address: String;
  city: String;
  state: String;
  time: DateTimeFormat;
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

  constructor(private eventService: EventService,
              private activeRouter: ActivatedRoute, private router: Router) { }

  update() {
    this.name = this.webForm.value.name;
    this.description = this.webForm.value.description;
    this.address = this.webForm.value.address;
    this.city = this.webForm.value.city;
    this.state = this.webForm.value.state;
    this.time = this.webForm.value.time;


    const updatedWeb: Event = {
      name: this.name,
      orgId: this.uid,
      description: this.description,
      address: this.address,
      city: this.city,
      state: this.state,
      time: this.time
    };
    this.eventService.updateEvent(this.wid, updatedWeb)
      .subscribe(
        (event: Event) => {
          this.router.navigate(['user', this.uid, 'event']);
        }
      );
  }

  remove() {
    this.eventService.deleteEvent(this.wid)
      .subscribe(
        (events: Event[]) => {
          this.router.navigate(['user', this.uid, 'event']);
    }
      );
  }

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
                  this.address = this.event.address;
                  this.city = this.event.city;
                  this.state = this.event.state;
                  this.time = this.event.time;
                }
              );
          }
        );
    });
  }

}
