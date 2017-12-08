import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HomeService } from '../../services/home.service.client';
import {SharedService} from '../../services/shared.service.client';
import {UserService} from '../../services/user.service.client';
import {User} from '../../models/user.model.client';

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
  user = this.sharedService.user;

  constructor(private homeService: HomeService, private sharedService: SharedService, private userService: UserService) { }

  searchEvents() {

  }

  selectEvent(event) {

  }

  searchWeather() {
    this.city = this.homeForm.value.city;
    this.state = this.homeForm.value.state;
    this.homeService.searchWeather(this.city, this.state)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.result = data.current_observation;
        }
      );

  }

  ngOnInit() {
  }

}
