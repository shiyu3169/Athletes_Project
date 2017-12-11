import { Component, OnInit } from '@angular/core';
import {User} from '../../../../models/user.model.client';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../../services/user.service.client';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  uid: String;
  user: User = {
    _id: this.uid,
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    role: '',
    gender: '',
    intro: ''
  };

  constructor(private activeRouter: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.uid = params['uid'];
      this.userService.findUserById(this.uid)
        .subscribe(
          (user: User) => {
            this.user = user;
          }
        );
    });
  }

}
