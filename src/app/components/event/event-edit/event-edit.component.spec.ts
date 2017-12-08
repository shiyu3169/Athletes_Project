import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteEditComponent } from './event-edit.component';

describe('WebsiteEditComponent', () => {
  let component: WebsiteEditComponent;
  let fixture: ComponentFixture<WebsiteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
