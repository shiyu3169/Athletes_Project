import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { WebsiteService} from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  @ViewChild('f') webForm: NgForm;

  uid: String;
  wid: String;
  websites: Website[];
  name: String;
  description: String;
  website: Website;

  constructor(private websiteService: WebsiteService,
              private activeRouter: ActivatedRoute, private router: Router) { }

  update() {
    this.name = this.webForm.value.name;
    this.description = this.webForm.value.description;

    const updatedWeb: Website = {
      _id: this.websiteService.nextId(),
      name: this.name,
      developerId: this.uid,
      description: this.description
    };
    this.websiteService.updateWebsite(this.wid, updatedWeb);
    this.router.navigate(['user', this.uid, 'website']);
  }

  remove() {
    this.websiteService.deleteWebsite(this.wid);
    this.router.navigate(['user', this.uid, 'website']);
  }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.websites = this.websiteService.findWebsitesByUser(this.uid);
      this.website = this.websiteService.findWebsiteById(this.wid);
      this.name = this.website.name;
      this.description = this.website.description;
    });
  }

}
