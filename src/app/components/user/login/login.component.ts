import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../../services/shared.service.client';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: String;
  password: String;
  errorFlag: boolean;

  constructor(private sharedService: SharedService, private userService: UserService, private router: Router) { }

  login() {

    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.login(this.username, this.password)
      .subscribe(
        (user) => {
          if (!user) {
            this.errorFlag = true;
          } else {
          this.errorFlag = false;
          this.sharedService.user = user;
          this.sharedService.role = user.role;
          this.router.navigate(['/']);
          }
        },
        (error: any) => {
          this.errorFlag = true;
          }
      );
  }

  ngOnInit() {
  }

}
