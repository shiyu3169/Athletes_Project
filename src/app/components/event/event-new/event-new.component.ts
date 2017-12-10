import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { EventService} from '../../../services/event.service.client';
import { Event } from '../../../models/event.model.client';
import { NgForm } from '@angular/forms';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventNewComponent implements OnInit {

  @ViewChild('f') webForm: NgForm;

  uid: String;
  events: Event[];
  name: String;
  description: String;
  address: String;
  city: String;
  state: String;
  time: DateTimeFormat;

  constructor(private eventService: EventService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  create() {
    this.name = this.webForm.value.name;
    this.description = this.webForm.value.description;
    this.address = this.webForm.value.address;
    this.city = this.webForm.value.city;
    this.state = this.webForm.value.state;
    this.time = this.webForm.value.time;


    const newEvent: Event = {
      name: this.name,
      orgId: this.uid,
      description: this.description,
      address: this.address,
      city: this.city,
      state: this.state,
      time: this.time
    };
    this.eventService.createEvent(this.uid, newEvent)
      .subscribe(
        (events: Event[]) => {
          this.router.navigate(['user', this.uid, 'event']);
        }
      );
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.eventService.findEventsByUser(this.uid)
        .subscribe(
          (events: Event[]) => {
            this.events = events;
          }
        );
    });
  }

}
