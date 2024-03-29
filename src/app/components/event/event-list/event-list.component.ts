import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { EventService} from '../../../services/event.service.client';
import { Event } from '../../../models/event.model.client';
import {SharedService} from '../../../services/shared.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  uid: String;
  events: Event[];
  user: any;
  org: any= {};
  constructor(private eventService: EventService, private router: ActivatedRoute,
              private sharedService: SharedService, private userService: UserService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.user = this.sharedService.user;
      this.eventService.findEventsByUser(this.uid)
        .subscribe(
          (events: Event[]) => {
            this.events = events;
            this.userService.findUserById(this.uid)
              .subscribe(
                (org: any) => {
                  this.org = org;
                }
              );
          }
        );
    });
  }

}
