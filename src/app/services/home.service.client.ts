import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class HomeService {

  constructor(private http: Http) {}

  searchWeather(city: String, state: String) {
    const url
      = 'https://api.wunderground.com/api/5aef84f6a4fe075e/conditions/q/' + state + '/' + city + '.json';
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
