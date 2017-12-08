import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  uid: String;
  websites: Website[];

  constructor(private websiteService: WebsiteService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.uid = params['uid'];
      this.websiteService.findWebsitesByUser(this.uid)
        .subscribe(
          (websites: Website[]) => {
            this.websites = websites;
          }
        );
    });
  }

}
