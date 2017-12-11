import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../../services/shared.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {

  constructor(private sharedService: SharedService, private router: Router) { }

  user: any;

  runnerRegister() {
    this.sharedService.role = 'runner';
    this.router.navigate(['/register']);
  }

  volunteerRegister() {
    this.sharedService.role = 'volunteer';
    this.router.navigate(['/register']);
  }

  organizationRegister() {
    this.sharedService.role = 'organization';
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

}
