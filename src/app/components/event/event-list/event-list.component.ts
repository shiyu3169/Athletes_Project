import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { EventService} from '../../../services/event.service.client';
import { Event } from '../../../models/event.model.client';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  uid: String;
  events: Event[];

  constructor(private eventService: EventService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
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
