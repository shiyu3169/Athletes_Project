import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import {SharedService} from './shared.service.client';
import {Router} from '@angular/router';

@Injectable()
export class UserService {

  baseUrl = environment.baseUrl;

  options = new RequestOptions();

  constructor(private http: Http, private sharedService: SharedService, private router: Router) {}

  register(username, password) {
    let url = this.baseUrl + '/api/register?role=';
    url += this.sharedService.role;
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  login(username: String, password: String) {
    const url = this.baseUrl + '/api/login';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  logout() {
    const url = this.baseUrl + '/api/logout';
    this.options.withCredentials = true;
    return this.http.post(url, {}, this.options)
      .map(
        (response: Response) => {
          return response;
        }
      );
  }
  checkLogin() {
    const url = this.baseUrl + '/api/loggedIn';
    this.options.withCredentials = true;
    return this.http.post(url, {}, this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user;
            return true;
          } else {
            return false;
          }
        }
      );
  }

  loggedIn() {
    const url = this.baseUrl + '/api/loggedIn';
    this.options.withCredentials = true;
    return this.http.post(url, {}, this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user;
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  // returns the user whose username and password match the username and password parameters
  findUserByCredentials(username: String, password: String) {
    const url =  this.baseUrl + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
      });
  }

  // returns the user in local users array whose _id matches the userId parameter
  findUserById(uid: String) {
    const url =  this.baseUrl + '/api/user/' + uid;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  //  adds the user parameter instance to the local users array
  createUser(user: User) {
    const url =  this.baseUrl + '/api/user';
    return this.http.post(url, user)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  //  returns the user in local users array whose username matches the parameter username
  findUserByUsername(username: String) {
    const url =  this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        });
  }

  // updates the user in local users array whose _id matches the userId parameter
  updateUser(userId: String, user: User) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  follow(uid, oid) {
    const url = this.baseUrl + '/api/user/follow?uid=' + uid + '&oid=' + oid;
    return this.http.put(url, null)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  unfollow(uid, oid) {
    const url = this.baseUrl + '/api/user/unfollow?uid=' + uid + '&oid=' + oid;
    return this.http.put(url, null)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  cancel(uid, wid) {
    const url = this.baseUrl + '/api/user/cancel?uid=' + uid + '&wid=' + wid;
    return this.http.put(url, null)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  checkFollow(uid, oid) {
    const url = this.baseUrl + '/api/user/checkFollow?uid=' + uid + '&oid=' + oid;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  findFollowing(uid) {
    const url = this.baseUrl + '/api/user/' + uid + '/findFollowing';
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  findRegister(wid, role) {
    const url = this.baseUrl + '/api/user/' + wid + '/findRegister/' + role;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  findAll() {
    const url = this.baseUrl + '/api/user/findAll';
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  deleteUser(uid) {
    const url = this.baseUrl + '/api/user/' + uid;
    return this.http.delete(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
