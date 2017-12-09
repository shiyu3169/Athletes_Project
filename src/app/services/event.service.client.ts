import { Injectable } from '@angular/core';
import { Event } from '../models/event.model.client';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';


@Injectable()
export class EventService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}

  // adds the event parameter instance to the local events array. The new event's orgId is set to the userId parameter
  createEvent(userId: String, event: Event) {
    const url = this.baseUrl + '/api/user/' + userId + '/event';
    return this.http.post(url, event)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // retrieves the events in local events array whose developerId matches the parameter userId
  findEventsByUser(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/event';
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // retrieves the event in local events array whose _id matches the eventId parameter
  findEventById(eventId: String) {
    const url = this.baseUrl + '/api/event/' + eventId;
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // updates the event in local events array whose _id matches the eventId parameter
  updateEvent(eventId: String, event: Event) {
    const url = this.baseUrl + '/api/event/' + eventId;
    return this.http.put(url, event)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  // removes the event from local events array whose _id matches the eventId parameter
  deleteEvent(eventId: String) {
    const url = this.baseUrl + '/api/event/' + eventId;
    return this.http.delete(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
