import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from '../../services/home.service.client';
import { SharedService } from '../../services/shared.service.client';
import { UserService } from '../../services/user.service.client';
import {EventService} from '../../services/event.service.client';
import {Event} from '../../models/event.model.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('f') homeForm: NgForm;

  searchText: String;
  results: [String];
  state: String;
  city: String;
  result: Object = '';
  role: String;
  key: String;
  user: any = {
    role: ''
  };
  events: [Event];

  constructor(private homeService: HomeService, private sharedService: SharedService,
              private userService: UserService, private eventService: EventService) { }

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

  searchEvents() {
    this.eventService.searchEvent(this.key)
      .subscribe(
        (events: any) => {
          console.log(events);
          this.events = events;
        }
      );
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    console.log(this.user);
    if (this.user === '') {
      this.role = '';
    } else {
      this.role = this.user.role;
    }
  }
}
