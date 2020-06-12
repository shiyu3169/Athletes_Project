webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Meta tags for making event for mobile-->\r\n<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\r\n<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\r\n<meta name=\"viewport\" content=\"initial-scale=1.25, user-scalable=no\">\r\n<meta charset=\"UTF-8\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\"/>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__ = __webpack_require__("./node_modules/ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_event_event_new_event_new_component__ = __webpack_require__("./src/app/components/event/event-new/event-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_event_event_edit_event_edit_component__ = __webpack_require__("./src/app/components/event/event-edit/event-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_event_event_list_event_list_component__ = __webpack_require__("./src/app/components/event/event-list/event-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_event_service_client__ = __webpack_require__("./src/app/services/event.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_shared_service_client__ = __webpack_require__("./src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__ = __webpack_require__("./src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_home_service_client__ = __webpack_require__("./src/app/services/home.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_user_choose_choose_component__ = __webpack_require__("./src/app/components/user/choose/choose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_event_event_detail_event_detail_component__ = __webpack_require__("./src/app/components/event/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_profile_detail_detail_component__ = __webpack_require__("./src/app/components/user/profile/detail/detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_event_event_edit_event_edit_component__["a" /* EventEditComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_event_event_new_event_new_component__["a" /* EventNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_event_event_list_event_list_component__["a" /* EventListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_user_choose_choose_component__["a" /* ChooseComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_event_event_detail_event_detail_component__["a" /* EventDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_user_profile_detail_detail_component__["a" /* DetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_15__services_event_service_client__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_16__services_shared_service_client__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_17__services_authentication_service_client__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_18__services_home_service_client__["a" /* HomeService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_event_event_edit_event_edit_component__ = __webpack_require__("./src/app/components/event/event-edit/event-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_event_event_list_event_list_component__ = __webpack_require__("./src/app/components/event/event-list/event-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_event_event_new_event_new_component__ = __webpack_require__("./src/app/components/event/event-new/event-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authentication_service_client__ = __webpack_require__("./src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_choose_choose_component__ = __webpack_require__("./src/app/components/user/choose/choose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_event_event_detail_event_detail_component__ = __webpack_require__("./src/app/components/event/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_profile_detail_detail_component__ = __webpack_require__("./src/app/components/user/profile/detail/detail.component.ts");












var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'choose', component: __WEBPACK_IMPORTED_MODULE_9__components_user_choose_choose_component__["a" /* ChooseComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/detail', component: __WEBPACK_IMPORTED_MODULE_11__components_user_profile_detail_detail_component__["a" /* DetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/event', component: __WEBPACK_IMPORTED_MODULE_5__components_event_event_list_event_list_component__["a" /* EventListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/event/new', component: __WEBPACK_IMPORTED_MODULE_6__components_event_event_new_event_new_component__["a" /* EventNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/event/:wid', component: __WEBPACK_IMPORTED_MODULE_4__components_event_event_edit_event_edit_component__["a" /* EventEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'user/:uid/event/:wid/detail', component: __WEBPACK_IMPORTED_MODULE_10__components_event_event_detail_event_detail_component__["a" /* EventDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_authentication_service_client__["a" /* AuthenticationService */]] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "./src/app/components/event/event-detail/event-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/event/event-detail/event-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- top navbar-->\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-4 hidden-xs\">\r\n      <div class=\"container-fluid\">\r\n        <p class=\"navbar-text pull-left\">\r\n          <a routerLink=\"/user/{{uid}}/event\"\r\n             class=\"navbar-link sw-text-white\">\r\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n          </a>\r\n        </p>\r\n        <a routerLink=\"/user/{{uid}}/event\"\r\n           class=\"pull-left navbar-brand thick\">\r\n          <b class=\"sw-text-white\">Events</b>\r\n        </a>\r\n        <a routerLink=\"/user/{{uid}}/event/new\"\r\n           class=\"navbar-link navbar-text pull-right sw-icon-padding\">\r\n          <span class=\"glyphicon glyphicon-plus sw-text-white\"></span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-8 pull-right\">\r\n      <div class=\"container-fluid\">\r\n        <a routerLink=\"/user/{{uid}}/event/{{wid}}\"\r\n           class=\"pull-left navbar-brand thick\">\r\n          <b class=\"sw-text-white\">Event Detail</b>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!--left events-->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-4 hidden-xs\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item sw-borderless\"\r\n            *ngFor=\"let event of events\">\r\n          <a class=\"sw-link\"\r\n             routerLink=\"/user/{{uid}}/event/{{event._id}}/detail\">{{event.name}}</a>\r\n          <a routerLink=\"/user/{{uid}}/event/{{event._id}}\">\r\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <!--right editor-->\r\n    <div class=\"col-sm-8 col-xs-12\">\r\n      <div *ngIf=\"registered\"\r\n           class=\"alert alert-success\" >\r\n        Register successfully!\r\n      </div>\r\n      <form (ngSubmit)=\"update()\"\r\n            #f =\"ngForm\"\r\n            id=\"webForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\"\r\n                 id=\"name\"\r\n                 name=\"name\"\r\n                 readonly\r\n                 ngModel=\"{{event.name}}\"\r\n                 #name=\"ngModel\"\r\n                 class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"description\">Event Desciption</label>\r\n          <textarea id=\"description\"\r\n                    name=\"description\"\r\n                    rows=\"5\"\r\n                    readonly\r\n                    ngModel=\"{{event.description}}\"\r\n                    #description=\"ngModel\"\r\n                    class=\"form-control\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"address\">Street</label>\r\n          <input type=\"text\"\r\n                 id=\"address\"\r\n                 name=\"address\"\r\n                 readonly\r\n                 ngModel=\"{{event.address}}\"\r\n                 #address=\"ngModel\"\r\n                 class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"col-xs-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"city\">City</label>\r\n            <input type=\"text\"\r\n                   id=\"city\"\r\n                   name=\"city\"\r\n                   readonly\r\n                   ngModel=\"{{event.city}}\"\r\n                   #city=\"ngModel\"\r\n                   class=\"form-control\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">State</label>\r\n            <input type=\"text\"\r\n                   id=\"state\"\r\n                   name=\"state\"\r\n                   readonly\r\n                   ngModel=\"{{event.state}}\"\r\n                   #state=\"ngModel\"\r\n                   class=\"form-control\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"time\">Event Time</label>\r\n          <input type=\"datetime-local\"\r\n                 id=\"time\"\r\n                 name=\"time\"\r\n                 readonly\r\n                 ngModel=\"{{event.time}}\"\r\n                 #time=\"ngModel\"\r\n                 class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-4\" *ngIf=\"user.role !== 'organization'\">\r\n            <a (click)=\"rsvp()\"\r\n               class=\"btn btn-success btn-block\">RSVP</a>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"col-xs-3\" *ngIf=\"user.role==='organization'\">\r\n        <div class=\"panel panel-info\">\r\n          <div class = \"panel-heading\">\r\n            <h3 class = \"panel-title\">Registered Runner</h3>\r\n          </div>\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item sw-borderless\"\r\n                *ngFor=\"let runner of runners\">\r\n              <button class=\"btn sw-button-transparent\"\r\n                      routerLink=\"/user/{{runner._id}}/detail\">{{runner.username}}</button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-3\" *ngIf=\"user.role==='organization'\">\r\n        <div class=\"panel panel-info\">\r\n          <div class = \"panel-heading\">\r\n            <h3 class = \"panel-title\">Registered Volunteers</h3>\r\n          </div>\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item sw-borderless\"\r\n                *ngFor=\"let vol of vols\">\r\n              <button class=\"btn sw-button-transparent\"\r\n                      routerLink=\"/user/{{vol._id}}/detail\">{{vol.username}}</button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"col-xs-4\">\r\n        </div>\r\n        <div class=\"col-xs-8\">\r\n          <img src={{result.icon_url}}>\r\n        </div>\r\n        <hr/>\r\n        <hr/>\r\n        <div class=\"panel panel-default\" *ngIf=\"result !== ''\">\r\n          <div class=\"panel-body\">Today's Weather: {{result.weather}}</div>\r\n          <div class=\"panel-body\">Temprature: {{result.temperature_string}}</div>\r\n          <div class=\"panel-body\">Feels like: {{result.feelslike_string}}</div>\r\n          <div class=\"panel-body\">Wind: {{result.wind_string}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"/user\"\r\n       class=\"navbar-text pull-right\">\r\n      <span class=\"glyphicon glyphicon-user sw-icon-padding sw-text-white\"></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/event/event-detail/event-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service_client__ = __webpack_require__("./src/app/services/event.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("./src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_home_service_client__ = __webpack_require__("./src/app/services/home.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DateTimeFormat = Intl.DateTimeFormat;


var EventDetailComponent = (function () {
    function EventDetailComponent(activeRouter, eventService, sharedService, userService, homeService) {
        this.activeRouter = activeRouter;
        this.eventService = eventService;
        this.sharedService = sharedService;
        this.userService = userService;
        this.homeService = homeService;
        this.result = '';
        this.event = {
            _id: '',
            name: '',
            orgId: '',
            description: '',
            address: '',
            city: '',
            state: '',
            time: new DateTimeFormat
        };
    }
    EventDetailComponent.prototype.rsvp = function () {
        var _this = this;
        this.eventService.register(this.user._id, this.event._id)
            .subscribe(function (data) {
            _this.registered = true;
        });
    };
    EventDetailComponent.prototype.findRegister = function (wid) {
        var _this = this;
        this.userService.findRegister(wid, 'runner')
            .subscribe(function (data) {
            _this.runners = data;
            _this.userService.findRegister(wid, 'volunteer')
                .subscribe(function (data2) {
                _this.vols = data2;
                _this.searchWeather();
            });
        });
    };
    EventDetailComponent.prototype.searchWeather = function () {
        var _this = this;
        this.homeService.searchWeather(this.city, this.state)
            .subscribe(function (data) {
            _this.result = data.current_observation;
        });
    };
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.user = _this.sharedService.user;
            _this.registered = false;
            _this.eventService.findEventsByUser(_this.uid)
                .subscribe(function (events) {
                _this.events = events;
                _this.eventService.findEventById(_this.wid)
                    .subscribe(function (event) {
                    _this.event = event;
                    _this.name = _this.event.name;
                    _this.description = _this.event.description;
                    _this.address = _this.event.address;
                    _this.city = _this.event.city;
                    _this.state = _this.event.state;
                    _this.time = _this.event.time;
                    _this.findRegister(_this.wid);
                });
            });
        });
    };
    return EventDetailComponent;
}());
EventDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-event-detail',
        template: __webpack_require__("./src/app/components/event/event-detail/event-detail.component.html"),
        styles: [__webpack_require__("./src/app/components/event/event-detail/event-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_event_service_client__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_event_service_client__["a" /* EventService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_home_service_client__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_home_service_client__["a" /* HomeService */]) === "function" && _e || Object])
], EventDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=event-detail.component.js.map

/***/ }),

/***/ "./src/app/components/event/event-edit/event-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".sw-nav-blue {\r\n  background-color: #337ab7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/event/event-edit/event-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- top navbar-->\r\n<nav class=\"navbar navbar-fixed-top navbar-inverse\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-4 hidden-xs\">\r\n      <div class=\"container-fluid\">\r\n        <p class=\"navbar-text pull-left\">\r\n          <a routerLink=\"/user\"\r\n             class=\"navbar-link sw-text-white\">\r\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n          </a>\r\n        </p>\r\n        <a routerLink=\"/user/{{uid}}/event\"\r\n           class=\"pull-left navbar-brand thick\">\r\n          <b class=\"sw-text-white\">Events</b>\r\n        </a>\r\n        <a routerLink=\"/user/{{uid}}/event/new\"\r\n           class=\"navbar-link navbar-text pull-right sw-icon-padding\">\r\n          <span class=\"glyphicon glyphicon-plus sw-text-white\"></span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-8 pull-right\">\r\n      <div class=\"container-fluid\">\r\n        <a routerLink=\"/user/{{uid}}/event/{{wid}}\"\r\n           class=\"pull-left navbar-brand thick\">\r\n          <b class=\"sw-text-white\">Edit Event</b>\r\n        </a>\r\n        <button type=\"submit\"\r\n                [disabled]=\"!f.valid\"\r\n                form=\"webForm\"\r\n                class=\"btn btn-xs sw-button-transparent navbar-link navbar-text pull-right sw-icon-padding\">\r\n          <span class=\"glyphicon glyphicon-ok sw-text-white\"></span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!--left events-->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-4 hidden-xs\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item sw-borderless\"\r\n            *ngFor=\"let event of events\">\r\n          <a class=\"sw-link\"\r\n             routerLink=\"/user/{{uid}}/event/{{event._id}}/page\">{{event.name}}</a>\r\n          <a routerLink=\"/user/{{uid}}/event/{{event._id}}\">\r\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <!--right editor-->\r\n    <div class=\"col-sm-8 col-xs-12\">\r\n      <form (ngSubmit)=\"update()\"\r\n            #f =\"ngForm\"\r\n            id=\"webForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\"\r\n                 id=\"name\"\r\n                 name=\"name\"\r\n                 required\r\n                 placeholder=\"any name\"\r\n                 ngModel=\"{{event.name}}\"\r\n                 #name=\"ngModel\"\r\n                 class=\"form-control\"/>\r\n        </div>\r\n        <span class=\"help-block\"\r\n              *ngIf=\"!name.valid && name.touched\">Name can't be empty!</span>\r\n        <div class=\"form-group\">\r\n          <label for=\"description\">Event Desciption</label>\r\n          <textarea id=\"description\"\r\n                    name=\"description\"\r\n                    rows=\"5\"\r\n                    placeholder=\"anything related to this event\"\r\n                    ngModel=\"{{event.description}}\"\r\n                    #description=\"ngModel\"\r\n                    class=\"form-control\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"address\">Street</label>\r\n          <input type=\"text\"\r\n                 id=\"address\"\r\n                 name=\"address\"\r\n                 placeholder=\"Address of the event\"\r\n                 ngModel=\"{{event.address}}\"\r\n                 #address=\"ngModel\"\r\n                 class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"col-xs-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"city\">City</label>\r\n            <input type=\"text\"\r\n                   id=\"city\"\r\n                   name=\"city\"\r\n                   placeholder=\"City of event\"\r\n                   ngModel=\"{{event.city}}\"\r\n                   #city=\"ngModel\"\r\n                   class=\"form-control\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">State</label>\r\n            <input type=\"text\"\r\n                   id=\"state\"\r\n                   name=\"state\"\r\n                   placeholder=\"state of the event\"\r\n                   ngModel=\"{{event.state}}\"\r\n                   #state=\"ngModel\"\r\n                   class=\"form-control\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"time\">Event Time</label>\r\n          <input type=\"datetime-local\"\r\n                 id=\"time\"\r\n                 name=\"time\"\r\n                 placeholder=\"Event Time\"\r\n                 ngModel=\"{{event.time}}\"\r\n                 #time=\"ngModel\"\r\n                 class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-4\">\r\n            <a (click)=\"remove()\"\r\n               class=\"btn btn-danger btn-block\">Delete</a>\r\n          </div>\r\n          <div class=\"col-xs-4 pull-right\">\r\n            <a routerLink=\"/user/{{uid}}/event\"\r\n               class=\"btn btn-warning btn-block\">Cancel</a>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"/user\"\r\n       class=\"navbar-text pull-right\">\r\n      <span class=\"glyphicon glyphicon-user sw-icon-padding sw-text-white\"></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/event/event-edit/event-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service_client__ = __webpack_require__("./src/app/services/event.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DateTimeFormat = Intl.DateTimeFormat;
var EventEditComponent = (function () {
    function EventEditComponent(eventService, activeRouter, router) {
        this.eventService = eventService;
        this.activeRouter = activeRouter;
        this.router = router;
        this.event = {
            _id: '',
            name: '',
            orgId: '',
            description: '',
            address: '',
            city: '',
            state: '',
            time: new DateTimeFormat
        };
    }
    EventEditComponent.prototype.update = function () {
        var _this = this;
        this.name = this.webForm.value.name;
        this.description = this.webForm.value.description;
        this.address = this.webForm.value.address;
        this.city = this.webForm.value.city;
        this.state = this.webForm.value.state;
        this.time = this.webForm.value.time;
        var updatedWeb = {
            name: this.name,
            orgId: this.uid,
            description: this.description,
            address: this.address,
            city: this.city,
            state: this.state,
            time: this.time
        };
        this.eventService.updateEvent(this.wid, updatedWeb)
            .subscribe(function (event) {
            _this.router.navigate(['user', _this.uid, 'event']);
        });
    };
    EventEditComponent.prototype.remove = function () {
        var _this = this;
        this.eventService.deleteEvent(this.wid)
            .subscribe(function (events) {
            _this.router.navigate(['user', _this.uid, 'event']);
        });
    };
    EventEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.eventService.findEventsByUser(_this.uid)
                .subscribe(function (events) {
                _this.events = events;
                _this.eventService.findEventById(_this.wid)
                    .subscribe(function (event) {
                    _this.event = event;
                    _this.name = _this.event.name;
                    _this.description = _this.event.description;
                    _this.address = _this.event.address;
                    _this.city = _this.event.city;
                    _this.state = _this.event.state;
                    _this.time = _this.event.time;
                });
            });
        });
    };
    return EventEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], EventEditComponent.prototype, "webForm", void 0);
EventEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-event-edit',
        template: __webpack_require__("./src/app/components/event/event-edit/event-edit.component.html"),
        styles: [__webpack_require__("./src/app/components/event/event-edit/event-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_event_service_client__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_event_service_client__["a" /* EventService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], EventEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=event-edit.component.js.map

/***/ }),

/***/ "./src/app/components/event/event-list/event-list.component.css":
/***/ (function(module, exports) {

module.exports = ".sw-nav-blue {\r\n  background-color: #337ab7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/event/event-list/event-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top navbar-->\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <p class=\"navbar-text pull-left\">\r\n      <a routerLink=\"/user\"\r\n         class=\"navbar-link sw-text-white\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      </a>\r\n    </p>\r\n    <a routerLink=\"/user/{{uid}}/event\"\r\n       class=\"pull-left navbar-brand thick\">\r\n      <b class=\"sw-text-white\">Events of {{org.organization}}</b>\r\n    </a>\r\n    <button routerLink=\"/user/{{uid}}/event/new\"\r\n       class=\"btn btn-xs sw-button-transparent navbar-link navbar-text pull-right sw-icon-padding\">\r\n      <span class=\"glyphicon glyphicon-plus sw-text-white\"></span>\r\n    </button>\r\n  </div>\r\n</nav>\r\n\r\n<!--events list-->\r\n<div  class=\"container-fluid\">\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item sw-borderless\"\r\n        *ngFor=\"let event of events\">\r\n      <a class=\"sw-link\"\r\n         routerLink=\"/user/{{uid}}/event/{{event._id}}/detail\">{{event.name}}</a>\r\n      <a routerLink=\"/user/{{uid}}/event/{{event._id}}\"\r\n         *ngIf=\"user.role === 'organization'\">\r\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"/user\" class=\"navbar-text pull-right\">\r\n      <span class=\"glyphicon glyphicon-user sw-icon-padding sw-text-white\"></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/event/event-list/event-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service_client__ = __webpack_require__("./src/app/services/event.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("./src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventListComponent = (function () {
    function EventListComponent(eventService, router, sharedService, userService) {
        this.eventService = eventService;
        this.router = router;
        this.sharedService = sharedService;
        this.userService = userService;
        this.org = {};
    }
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.user = _this.sharedService.user;
            _this.eventService.findEventsByUser(_this.uid)
                .subscribe(function (events) {
                _this.events = events;
                _this.userService.findUserById(_this.uid)
                    .subscribe(function (org) {
                    _this.org = org;
                });
            });
        });
    };
    return EventListComponent;
}());
EventListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-event-list',
        template: __webpack_require__("./src/app/components/event/event-list/event-list.component.html"),
        styles: [__webpack_require__("./src/app/components/event/event-list/event-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_event_service_client__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_event_service_client__["a" /* EventService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object])
], EventListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=event-list.component.js.map

/***/ }),

/***/ "./src/app/components/event/event-new/event-new.component.css":
/***/ (function(module, exports) {

module.exports = ".sw-nav-blue {\r\n  background-color: #337ab7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/event/event-new/event-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top navbar-->\r\n<nav class=\"navbar navbar-fixed-top navbar-inverse\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-4 hidden-xs\">\r\n      <div class=\"container-fluid\">\r\n        <p class=\"navbar-text pull-left\">\r\n          <a routerLink=\"/user/{{uid}}/event\"\r\n             class=\"navbar-link sw-text-white\">\r\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n          </a>\r\n        </p>\r\n        <a routerLink=\"/user/{{uid}}/event\"\r\n           class=\"pull-left navbar-brand thick\">\r\n          <b class=\"sw-text-white\">Events</b>\r\n        </a>\r\n        <a routerLink=\"/user/{{uid}}/event/new\"\r\n           class=\"navbar-link navbar-text pull-right sw-icon-padding\">\r\n          <span class=\"glyphicon glyphicon-plus sw-text-white\"></span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-8 pull-right\">\r\n      <div class=\"container-fluid\">\r\n        <a routerLink=\"/user/{{uid}}/event/new\"\r\n           class=\"pull-left navbar-brand thick\">\r\n          <b class=\"sw-text-white\">New Event</b>\r\n        </a>\r\n        <button type=\"submit\"\r\n                [disabled]=\"!f.valid\"\r\n                form=\"webForm\"\r\n                class=\"btn btn-xs navbar-link navbar-text pull-right sw-icon-padding sw-button-transparent\">\r\n          <span class=\"glyphicon glyphicon-ok sw-text-white\"></span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!--left events-->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-4 hidden-xs\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item sw-borderless\"\r\n            *ngFor=\"let event of events\">\r\n          <a class=\"sw-link\"\r\n             routerLink=\"/user/{{uid}}/event/{{event._id}}/page\">{{event.name}}</a>\r\n          <a routerLink=\"/user/{{uid}}/event/{{event._id}}\">\r\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <!--right editor-->\r\n    <div class=\"col-sm-8 col-xs-12\">\r\n      <form (ngSubmit)=\"create()\"\r\n            #f =\"ngForm\"\r\n            id=\"webForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\"\r\n                 id=\"name\"\r\n                 placeholder=\"Name\"\r\n                 name=\"name\"\r\n                 required\r\n                 ngModel\r\n                 #name=\"ngModel\"\r\n                 class=\"form-control\"/>\r\n        </div>\r\n        <span class=\"help-block\"\r\n              *ngIf=\"!name.valid && name.touched\">Name can't be empty!</span>\r\n        <div class=\"form-group\">\r\n          <label for=\"description\">Event Description</label>\r\n          <textarea id=\"description\"\r\n                    rows=\"5\"\r\n                    name=\"description\"\r\n                    placeholder=\"Description\"\r\n                    ngModel\r\n                    #description=\"ngModel\"\r\n                    class=\"form-control\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"address\">Street</label>\r\n          <input type=\"text\"\r\n                 id=\"address\"\r\n                 name=\"address\"\r\n                 placeholder=\"Address of the event\"\r\n                 ngModel\r\n                 #address=\"ngModel\"\r\n                 class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"col-xs-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"city\">City</label>\r\n            <input type=\"text\"\r\n                   id=\"city\"\r\n                   name=\"city\"\r\n                   placeholder=\"City of event\"\r\n                   ngModel\r\n                   #city=\"ngModel\"\r\n                   class=\"form-control\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">State</label>\r\n            <input type=\"text\"\r\n                   id=\"state\"\r\n                   name=\"state\"\r\n                   placeholder=\"state of the event\"\r\n                   ngModel\r\n                   #state=\"ngModel\"\r\n                   class=\"form-control\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"time\">Event Time</label>\r\n          <input type=\"datetime-local\"\r\n                 id=\"time\"\r\n                 name=\"time\"\r\n                 placeholder=\"Event Time\"\r\n                 ngModel\r\n                 #time=\"ngModel\"\r\n                 class=\"form-control\"/>\r\n        </div>\r\n        <div>\r\n          <a routerLink=\"/user/{{uid}}/event\"\r\n             class=\"btn btn-warning btn-block\">Cancel</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"/user\" class=\"navbar-text pull-right\">\r\n      <span class=\"glyphicon glyphicon-user sw-icon-padding sw-text-white\"></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/event/event-new/event-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service_client__ = __webpack_require__("./src/app/services/event.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventNewComponent = (function () {
    function EventNewComponent(eventService, activatedRoute, router) {
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    EventNewComponent.prototype.create = function () {
        var _this = this;
        this.name = this.webForm.value.name;
        this.description = this.webForm.value.description;
        this.address = this.webForm.value.address;
        this.city = this.webForm.value.city;
        this.state = this.webForm.value.state;
        this.time = this.webForm.value.time;
        var newEvent = {
            name: this.name,
            orgId: this.uid,
            description: this.description,
            address: this.address,
            city: this.city,
            state: this.state,
            time: this.time
        };
        this.eventService.createEvent(this.uid, newEvent)
            .subscribe(function (events) {
            _this.router.navigate(['user', _this.uid, 'event']);
        });
    };
    EventNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.eventService.findEventsByUser(_this.uid)
                .subscribe(function (events) {
                _this.events = events;
            });
        });
    };
    return EventNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], EventNewComponent.prototype, "webForm", void 0);
EventNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-event-new',
        template: __webpack_require__("./src/app/components/event/event-new/event-new.component.html"),
        styles: [__webpack_require__("./src/app/components/event/event-new/event-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_event_service_client__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_event_service_client__["a" /* EventService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], EventNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=event-new.component.js.map

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"/\" class=\"navbar-header pull-left navbar-brand thick\">\r\n      <b class=\"sw-text-white\">Athlete</b>\r\n    </a>\r\n    <p class=\"navbar-text pull-right\">\r\n      <button\r\n        routerLink=\"/login\"\r\n        *ngIf=\"!login\"\r\n        class=\"btn btn-xs navbar-link sw-button-transparent\"\r\n      >\r\n        <b>Login</b>\r\n      </button>\r\n      <button\r\n        routerLink=\"/choose\"\r\n        *ngIf=\"!login\"\r\n        class=\"btn btn-xs navbar-link sw-button-transparent\"\r\n      >\r\n        <b>Sign up</b>\r\n      </button>\r\n      <button\r\n        routerLink=\"/user\"\r\n        *ngIf=\"login\"\r\n        class=\"btn btn-xs navbar-link sw-button-transparent glyphicon glyphicon-user sw-icon-padding sw-text-white\"\r\n      ></button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"item active\">\r\n        <img\r\n          class=\"sw-img-slide\"\r\n          src=\"https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2020%2F03%2Ffb-average-marathon-time-2000.jpg\"\r\n          alt=\"Los Angeles\"\r\n        />\r\n      </div>\r\n\r\n      <div class=\"item\">\r\n        <img\r\n          class=\"item active\"\r\n          src=\"https://media.wired.com/photos/59c7ae866d668e01c65b1046/2:1/w_2500,c_limit/Berlin-FA-852825046.jpg\"\r\n          alt=\"Chicago\"\r\n        />\r\n      </div>\r\n\r\n      <div class=\"item\">\r\n        <img\r\n          class=\"item active\"\r\n          src=\"https://eversport.tv/sites/default/files/marathon-frankfurt-.jpg\"\r\n          alt=\"New york\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Left and right controls -->\r\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<hr />\r\n\r\n<div class=\"container\">\r\n  <div class=\"input-group\">\r\n    <input\r\n      [(ngModel)]=\"key\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      placeholder=\"Search events\"\r\n    />\r\n    <span class=\"input-group-btn\">\r\n      <a (click)=\"searchEvents()\" class=\"btn btn-default\" type=\"button\">\r\n        <span class=\"glyphicon glyphicon-search\"></span>\r\n      </a>\r\n    </span>\r\n  </div>\r\n  <div class=\"container\" *ngIf=\"events\">\r\n    <h4>Searching Results for '{{ key }}'</h4>\r\n    <div class=\"panel panel-default\">\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Organization</th>\r\n            <th>Post time</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let event of events\">\r\n          <tr>\r\n            <td>\r\n              <a\r\n                (click)=\"selectEvent(event._id)\"\r\n                class=\"btn sw-button-transparent sw-link sw-button-transparent\"\r\n                >{{ event.name }}</a\r\n              >\r\n            </td>\r\n            <td>\r\n              <a\r\n                class=\"btn sw-button-transparent sw-link sw-button-transparent\"\r\n                data-toggle=\"modal\"\r\n                data-target=\"#myModal\"\r\n                (click)=\"selectOrg(event.orgId._id)\"\r\n                >{{ event.orgId.organization }}</a\r\n              >\r\n            </td>\r\n            <td>{{ event.dateCreated }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <hr />\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <div class=\"col-xs-2\"></div>\r\n      <div class=\"col-xs-10\">\r\n        <h3>Weather Tracking</h3>\r\n      </div>\r\n      <form (ngSubmit)=\"searchWeather()\" #f=\"ngForm\">\r\n        <div>\r\n          <div class=\"form-group col-xs-6\">\r\n            <input\r\n              type=\"text\"\r\n              id=\"state\"\r\n              name=\"state\"\r\n              required\r\n              ngModel\r\n              placeholder=\"Specify the state\"\r\n              class=\"form-control\"\r\n              #state=\"ngModel\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group col-xs-6\">\r\n            <input\r\n              type=\"text\"\r\n              id=\"city\"\r\n              name=\"city\"\r\n              required\r\n              ngModel\r\n              placeholder=\"Specify the city\"\r\n              class=\"form-control\"\r\n              #city=\"ngModel\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <button\r\n          class=\"btn btn-success btn-block\"\r\n          type=\"submit\"\r\n          [disabled]=\"!f.valid\"\r\n        >\r\n          Check\r\n        </button>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <div class=\"col-xs-4\"></div>\r\n      <div class=\"col-xs-8\">\r\n        <img src=\"{{ result.icon_url }}\" />\r\n      </div>\r\n      <hr />\r\n      <hr />\r\n      <div class=\"panel panel-default\" *ngIf=\"result !== ''\">\r\n        <div class=\"panel-body\">Weather: {{ result.weather }}</div>\r\n        <div class=\"panel-body\">\r\n          Temprature: {{ result.temperature_string }}\r\n        </div>\r\n        <div class=\"panel-body\">Feels like: {{ result.feelslike_string }}</div>\r\n        <div class=\"panel-body\">Wind: {{ result.wind_string }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr />\r\n  <div *ngIf=\"user.role === 'admin'\">\r\n    <button\r\n      class=\"btn btn-warning btn-block\"\r\n      data-toggle=\"modal\"\r\n      data-target=\"#userModal\"\r\n      (click)=\"list('user')\"\r\n    >\r\n      All Users\r\n    </button>\r\n    <button\r\n      class=\"btn btn-warning btn-block\"\r\n      data-toggle=\"modal\"\r\n      data-target=\"#eventModal\"\r\n      (click)=\"list('event')\"\r\n    >\r\n      All Events\r\n    </button>\r\n  </div>\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n            &times;\r\n          </button>\r\n          <h4 class=\"modal-title\">{{ org.organization }}</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>{{ org.intro }}</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button\r\n            *ngIf=\"!following && login\"\r\n            (click)=\"follow(user._id, org._id)\"\r\n            class=\"btn btn-lg sw-text-yellow pull-left sw-button-transparent glyphicon glyphicon-star-empty sw-button-transparent\"\r\n          ></button>\r\n          <button\r\n            *ngIf=\"following && login && user.role !== 'organization'\"\r\n            class=\"btn btn-lg sw-text-yellow pull-left sw-button-transparent glyphicon glyphicon-star sw-button-transparent\"\r\n          ></button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\r\n            Close\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"userModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n            &times;\r\n          </button>\r\n          <h4 class=\"modal-title\">All Users</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>Username</th>\r\n                <th>Role</th>\r\n                <th>Date Created</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let data of userData\">\r\n              <tr>\r\n                <td>\r\n                  <a\r\n                    (click)=\"selectUser(data._id)\"\r\n                    class=\"btn sw-button-transparent sw-link sw-button-transparent\"\r\n                    >{{ data.username }}</a\r\n                  >\r\n                </td>\r\n                <td>{{ data.role }}</td>\r\n                <td>{{ data.dateCreated }}</td>\r\n                <td>\r\n                  <button class=\"btn pull-right sw-button-transparent\">\r\n                    <span\r\n                      class=\"glyphicon glyphicon-remove sw-text-red\"\r\n                      (click)=\"deleteUser(data._id)\"\r\n                    ></span>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button\r\n            routerLink=\"/choose\"\r\n            class=\"btn btn-block\"\r\n            data-dismiss=\"modal\"\r\n          >\r\n            Create New User\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\r\n            Close\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"eventModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n            &times;\r\n          </button>\r\n          <h4 class=\"modal-title\">All Events</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Date Created</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let data of eventData\">\r\n              <tr>\r\n                <td>\r\n                  <a\r\n                    (click)=\"selectEvent(data._id)\"\r\n                    class=\"btn sw-button-transparent sw-link sw-button-transparent\"\r\n                    >{{ data.name }}</a\r\n                  >\r\n                </td>\r\n                <td>{{ data.dateCreated }}</td>\r\n                <td>\r\n                  <button class=\"btn pull-right sw-button-transparent\">\r\n                    <span\r\n                      class=\"glyphicon glyphicon-remove sw-text-red\"\r\n                      (click)=\"deleteEvent(data._id)\"\r\n                    ></span>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\r\n            Close\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_home_service_client__ = __webpack_require__("./src/app/services/home.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("./src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_service_client__ = __webpack_require__("./src/app/services/event.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function () {
    function HomeComponent(homeService, sharedService, userService, eventService, router) {
        this.homeService = homeService;
        this.sharedService = sharedService;
        this.userService = userService;
        this.eventService = eventService;
        this.router = router;
        this.result = '';
        this.org = {};
        this.user = {
            role: ''
        };
    }
    HomeComponent.prototype.searchWeather = function () {
        var _this = this;
        this.city = this.homeForm.value.city;
        this.state = this.homeForm.value.state;
        this.homeService.searchWeather(this.city, this.state)
            .subscribe(function (data) {
            _this.result = data.current_observation;
        });
    };
    HomeComponent.prototype.deleteUser = function (uid) {
        var _this = this;
        this.userService.deleteUser(uid)
            .subscribe(function (data) {
            _this.list('user');
        });
    };
    HomeComponent.prototype.deleteEvent = function (wid) {
        var _this = this;
        this.eventService.deleteEvent(wid)
            .subscribe(function (data) {
            _this.list('event');
        });
    };
    HomeComponent.prototype.list = function (role) {
        var _this = this;
        if (role === 'user') {
            this.userService.findAll()
                .subscribe(function (data) {
                _this.userData = data;
            });
        }
        else {
            this.eventService.findAll()
                .subscribe(function (data) {
                _this.eventData = data;
            });
        }
    };
    HomeComponent.prototype.searchEvents = function () {
        var _this = this;
        this.eventService.searchEvent(this.key)
            .subscribe(function (events) {
            _this.events = events;
        });
    };
    HomeComponent.prototype.selectEvent = function (id) {
        var _this = this;
        this.eventService.findEventById(id)
            .subscribe(function (event) {
            _this.event = event;
            _this.router.navigate(['user', event.orgId, 'event', event._id, 'detail']);
        });
    };
    HomeComponent.prototype.follow = function (uid, oid) {
        var _this = this;
        this.userService.follow(uid, oid)
            .subscribe(function (data) {
            _this.following = true;
        });
    };
    HomeComponent.prototype.loggedIn = function () {
        var _this = this;
        this.userService.checkLogin()
            .subscribe(function (data) {
            _this.login = data;
            _this.user = _this.sharedService.user;
        });
    };
    HomeComponent.prototype.unfollow = function (uid, oid) {
        var _this = this;
        this.userService.unfollow(uid, oid)
            .subscribe(function (data) {
            _this.following = false;
        });
    };
    HomeComponent.prototype.selectOrg = function (orgId) {
        var _this = this;
        this.userService.findUserById(orgId)
            .subscribe(function (org) {
            _this.org = org;
        });
    };
    HomeComponent.prototype.checkFollow = function (uid, oid) {
        var _this = this;
        this.userService.checkFollow(uid, oid)
            .subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.following = true;
            }
            else {
                _this.following = false;
            }
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.loggedIn();
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], HomeComponent.prototype, "homeForm", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/components/home/home.component.html"),
        styles: [__webpack_require__("./src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_home_service_client__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_home_service_client__["a" /* HomeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_event_service_client__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_event_service_client__["a" /* EventService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _f || Object])
], HomeComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/components/user/choose/choose.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/choose/choose.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"/\"\r\n       class=\"navbar-header pull-left navbar-brand thick\">\r\n      <b class=\"sw-text-white\">Athelete</b>\r\n    </a>\r\n    <a routerLink=\"/\"\r\n       class=\"navbar-header pull-left navbar-brand thick\">\r\n      <b class=\"sw-text-white\">Home</b>\r\n    </a>\r\n    <p class=\"navbar-text pull-right\">\r\n      <button routerLink=\"/login\"\r\n              *ngIf=\"user === ''\"\r\n              class=\"btn btn-xs navbar-link sw-button-transparent\">\r\n        <b>Login</b>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n<div class=\"container\">\r\n  <hr/>\r\n  <div class=\"raw\">\r\n    <div class=\"col-sm-4\">\r\n      <p>For many runners, the desire to do a marathon is about personal challenge. You might want to test your limits or prove that you can go the distance. Perhaps a friend has talked you into it. Maybe you'd like to lose weight, get healthier or raise awareness for a charity.</p>\r\n      <button *ngIf=\"user.role !== 'admin'\" (click)=\"runnerRegister()\" class=\"btn btn-info btn-lg btn-block\">Register as runner</button>\r\n      <button *ngIf=\"user.role === 'admin'\" (click)=\"runnerRegister()\" class=\"btn btn-success btn-lg btn-block\">Create new runner</button>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <p>Marathon volunteers represent the best that a city has to offer: They’re helpful, enthusiastic, friendly, and proud of our amazing city. Fulfilling a volunteer opportunity on race day is a great way to pay it forward for your future marathon or to show your thanks for a past race.</p>\r\n      <button *ngIf=\"user.role !== 'admin'\" (click)=\"volunteerRegister()\" class=\"btn btn-info btn-lg btn-block\">Register as volunteer</button>\r\n      <button *ngIf=\"user.role === 'admin'\" (click)=\"volunteerRegister()\" class=\"btn btn-success btn-lg btn-block\">Create new volunteer</button>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <p>A successfully planned and executed marathon can raise public awareness, and money, for a worthy cause. The logistics of planning a marathon is vary depending on the type of event. Many of the details involved in planning and hosting popular types of marathons.</p>\r\n      <button *ngIf=\"user.role !== 'admin'\" (click)=\"organizationRegister()\" class=\"btn btn-info btn-lg btn-block\">Register as organization</button>\r\n      <button *ngIf=\"user.role === 'admin'\" (click)=\"organizationRegister()\" class=\"btn btn-success btn-lg btn-block\">Create new organization</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/choose/choose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__ = __webpack_require__("./src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChooseComponent = (function () {
    function ChooseComponent(sharedService, router) {
        this.sharedService = sharedService;
        this.router = router;
    }
    ChooseComponent.prototype.runnerRegister = function () {
        this.sharedService.role = 'runner';
        this.router.navigate(['/register']);
    };
    ChooseComponent.prototype.volunteerRegister = function () {
        this.sharedService.role = 'volunteer';
        this.router.navigate(['/register']);
    };
    ChooseComponent.prototype.organizationRegister = function () {
        this.sharedService.role = 'organization';
        this.router.navigate(['/register']);
    };
    ChooseComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
    };
    return ChooseComponent;
}());
ChooseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-choose',
        template: __webpack_require__("./src/app/components/user/choose/choose.component.html"),
        styles: [__webpack_require__("./src/app/components/user/choose/choose.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ChooseComponent);

var _a, _b;
//# sourceMappingURL=choose.component.js.map

/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"/\"\r\n       class=\"navbar-header pull-left navbar-brand thick\">\r\n      <b class=\"sw-text-white\">Athelete</b>\r\n    </a>\r\n    <a routerLink=\"/\"\r\n       class=\"navbar-header pull-left navbar-brand thick\">\r\n      <b class=\"sw-text-white\">Home</b>\r\n    </a>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\" >\r\n    Invalid username or password!\r\n  </div>\r\n  <h1>Login</h1>\r\n  <form (ngSubmit)=\"login()\"\r\n        #f =\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\"\r\n             id=\"username\"\r\n             name=\"username\"\r\n             required\r\n             ngModel\r\n             placeholder=\"username\"\r\n             class=\"form-control\"\r\n             #username=\"ngModel\"/>\r\n    </div>\r\n    <span class=\"help-block\"\r\n          *ngIf=\"!username.valid && username.touched\">Please enter username!</span>\r\n    <div class=\"form-group\">\r\n      <input type=\"password\"\r\n             id=\"password\"\r\n             name=\"password\"\r\n             required\r\n             placeholder=\"password\"\r\n             ngModel\r\n             #password=\"ngModel\"\r\n             class=\"form-control\"/>\r\n    </div>\r\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter password!</span>\r\n    <button class=\"btn btn-primary btn-block\"\r\n       type=\"submit\"\r\n       [disabled]=\"!f.valid\">Login</button>\r\n    <a routerLink=\"/facebook/login\" class=\"btn btn-primary btn-block\">\r\n      <span class=\"fa fa-facebook\"></span>\r\n      Facebook\r\n    </a>\r\n    <button class=\"btn btn-success btn-block\" routerLink=\"/choose\">Register</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("./src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password)
            .subscribe(function (user) {
            if (!user) {
                _this.errorFlag = true;
            }
            else {
                _this.errorFlag = false;
                _this.sharedService.user = user;
                _this.sharedService.role = user.role;
                _this.router.navigate(['/']);
            }
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("./src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/components/user/profile/detail/detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/profile/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"/\"\r\n       class=\"navbar-header pull-left navbar-brand thick\">\r\n      <b class=\"sw-text-white\">Home</b>\r\n    </a>\r\n    <a routerLink=\"/user\"\r\n       class=\"navbar-header pull-left navbar-brand thick\">\r\n      <b class=\"sw-text-white\">Profile</b>\r\n    </a>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-2\">\r\n    </div>\r\n    <div class=\"col-xs-8\">\r\n      <form (ngSubmit)=\"update()\"\r\n            #f =\"ngForm\"\r\n            id=\"profileForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"username\"\r\n                 name=\"username\"\r\n                 readonly\r\n                 #username=\"ngModel\"\r\n                 ngModel=\"{{user.username}}\">\r\n        </div>\r\n        <span class=\"help-block\"\r\n              *ngIf=\"!username.valid && username.touched\">Username can't be empty!</span>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email address</label>\r\n          <input type=\"email\"\r\n                 class=\"form-control\"\r\n                 id=\"email\"\r\n                 name=\"email\"\r\n                 email\r\n                 readonly\r\n                 ngModel=\"{{user.email}}\"\r\n                 #email=\"ngModel\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"firstName\">First Name</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"firstName\"\r\n                 name=\"firstName\"\r\n                 readonly\r\n                 ngModel=\"{{user.firstName}}\"\r\n                 #firstName=\"ngModel\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"lastName\">Last Name</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"lastName\"\r\n                 name=\"lastName\"\r\n                 readonly\r\n                 ngModel=\"{{user.lastName}}\"\r\n                 #lastName=\"ngModel\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"gender\">Gender</label>\r\n          <input type=\"text\"\r\n                 id=\"gender\"\r\n                 readonly\r\n                 name=\"gender\"\r\n                 [(ngModel)]=\"user.gender\"\r\n                 #gender=\"ngModel\"\r\n                 class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"intro\">Short Introduction</label>\r\n          <textarea type=\"text\"\r\n                    id=\"intro\"\r\n                    name=\"intro\"\r\n                    ngModel=\"{{user.intro}}\"\r\n                    #intro=\"ngModel\"\r\n                    rows=\"3\"\r\n                    readonly\r\n                    class=\"form-control\"></textarea>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-xs-2\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"/user\"\r\n       class=\"navbar-text pull-right\">\r\n      <span class=\"glyphicon glyphicon-user sw-text-white\"></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/user/profile/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = (function () {
    function DetailComponent(activeRouter, userService) {
        this.activeRouter = activeRouter;
        this.userService = userService;
        this.user = {
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
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.userService.findUserById(_this.uid)
                .subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-detail',
        template: __webpack_require__("./src/app/components/user/profile/detail/detail.component.html"),
        styles: [__webpack_require__("./src/app/components/user/profile/detail/detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object])
], DetailComponent);

var _a, _b;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".sw-nav-blue {\r\n  background-color: #337ab7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"/\"\r\n       class=\"navbar-header pull-left navbar-brand thick\">\r\n      <b class=\"sw-text-white\">Home</b>\r\n    </a>\r\n    <a routerLink=\"/user\"\r\n       class=\"navbar-header pull-left navbar-brand thick\">\r\n      <b class=\"sw-text-white\">Profile</b>\r\n    </a>\r\n\r\n    <!--tick mark-->\r\n    <p class=\"navbar-text pull-right\">\r\n      <button type=\"submit\"\r\n              [disabled]=\"!f.valid\"\r\n              form=\"profileForm\"\r\n              class=\"btn btn-xs navbar-link sw-button-transparent\">\r\n        <span class=\"glyphicon glyphicon-ok sw-text-white\"></span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-2\">\r\n      <div class=\"panel panel-info\" *ngIf=\"user.role !== 'organization'\">\r\n        <div class = \"panel-heading\">\r\n          <h3 class = \"panel-title\">Following Organization</h3>\r\n        </div>\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item sw-borderless\"\r\n              *ngFor=\"let org of orgs\">\r\n            <button class=\"btn sw-button-transparent\" routerLink=\"/user/{{org._id}}/event\">{{org.organization}}</button>\r\n            <button class=\"btn pull-right sw-button-transparent\">\r\n              <span class=\"glyphicon glyphicon-star sw-text-yellow\"\r\n                    (click)=\"unfollow(uid, org._id)\"></span>\r\n            </button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-8\">\r\n      <div *ngIf=\"usernameTaken\"\r\n           class=\"alert alert-danger\" >\r\n        Username was taken!\r\n      </div>\r\n      <div *ngIf=\"submitSuccess\"\r\n           class=\"alert alert-success\" >\r\n        Submit successfully!\r\n      </div>\r\n      <form (ngSubmit)=\"update()\"\r\n            #f =\"ngForm\"\r\n            id=\"profileForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"username\"\r\n                 name=\"username\"\r\n                 required\r\n                 #username=\"ngModel\"\r\n                 ngModel=\"{{user.username}}\"\r\n                 placeholder=\"username\">\r\n        </div>\r\n        <span class=\"help-block\"\r\n              *ngIf=\"!username.valid && username.touched\">Username can't be empty!</span>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email address</label>\r\n          <input type=\"email\"\r\n                 class=\"form-control\"\r\n                 id=\"email\"\r\n                 name=\"email\"\r\n                 email\r\n                 ngModel=\"{{user.email}}\"\r\n                 #email=\"ngModel\"\r\n                 placeholder=\"alice.wonderland@unicorn.com\">\r\n        </div>\r\n        <span class=\"help-block\"\r\n              *ngIf=\"!email.valid && email.touched\">Invalid email!</span>\r\n        <div class=\"form-group\"\r\n             *ngIf=\"role !=='organization'\">\r\n          <label for=\"firstName\">First Name</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"firstName\"\r\n                 name=\"firstName\"\r\n                 ngModel=\"{{user.firstName}}\"\r\n                 #firstName=\"ngModel\"\r\n                 placeholder=\"Alice\">\r\n        </div>\r\n        <div class=\"form-group\"\r\n             *ngIf=\"role !=='organization'\">\r\n          <label for=\"lastName\">Last Name</label>\r\n          <input type=\"text\"\r\n                 class=\"form-control\"\r\n                 id=\"lastName\"\r\n                 name=\"lastName\"\r\n                 ngModel=\"{{user.lastName}}\"\r\n                 #lastName=\"ngModel\"\r\n                 placeholder=\"Wonderland\">\r\n        </div>\r\n        <div class=\"form-group\"\r\n             *ngIf=\"role !=='organization'\">\r\n          <label for=\"gender\">Gender</label>\r\n          <select type=\"text\"\r\n                  id=\"gender\"\r\n                  name=\"gender\"\r\n                  [(ngModel)]=\"user.gender\"\r\n                  #gender=\"ngModel\"\r\n                  placeholder=\"Gender\"\r\n                  class=\"form-control\">\r\n            <option value='male'>Male</option>\r\n            <option value='female'>Female</option>\r\n            <option value='secret'>Not Specified</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\"\r\n             *ngIf=\"role ==='organization'\">\r\n          <label for=\"organization\">Organization Name</label>\r\n          <input type=\"text\"\r\n                 id=\"organization\"\r\n                 name=\"organization\"\r\n                 ngModel=\"{{user.organization}}\"\r\n                 #organization=\"ngModel\"\r\n                 placeholder=\"Organization Name\"\r\n                 class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"intro\">Short Introduction</label>\r\n          <textarea type=\"text\"\r\n                    id=\"intro\"\r\n                    name=\"intro\"\r\n                    ngModel=\"{{user.intro}}\"\r\n                    #intro=\"ngModel\"\r\n                    placeholder=\"Short introduction\"\r\n                    rows=\"3\"\r\n                    class=\"form-control\"></textarea>\r\n        </div>\r\n      </form>\r\n\r\n      <a class=\"btn btn-primary btn-block\"\r\n         *ngIf=\"role === 'organization'\"\r\n         routerLink=\"/user/{{uid}}/event\">Events</a>\r\n      <a class=\"btn btn-danger btn-block\"\r\n         (click)=\"logout()\">Logout</a>\r\n    </div>\r\n    <div class=\"col-xs-2\">\r\n      <div class=\"panel panel-info\" *ngIf=\"user.role !== 'organization'\">\r\n        <div class = \"panel-heading\">\r\n          <h3 class = \"panel-title\">Registered Events</h3>\r\n        </div>\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item sw-borderless\"\r\n              *ngFor=\"let eve of eves\">\r\n            <button class=\"btn sw-button-transparent\" routerLink=\"/user/{{eve.orgId}}/event/{{eve._id}}/detail\">{{eve.name}}</button>\r\n            <button class=\"btn pull-right sw-button-transparent\">\r\n              <span class=\"glyphicon glyphicon-remove sw-text-red\"\r\n                    (click)=\"cancel(uid, eve._id)\"></span>\r\n            </button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Footer -->\r\n<nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"/user\"\r\n       class=\"navbar-text pull-right\">\r\n      <span class=\"glyphicon glyphicon-user sw-text-white\"></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("./src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_service_client__ = __webpack_require__("./src/app/services/event.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(sharedService, userService, router, route, eventService) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.eventService = eventService;
        this.user = {
            _id: this.uid,
            username: this.username,
            password: '',
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            role: this.role,
            gender: this.gender,
            organization: this.organization,
            intro: this.intro
        };
    }
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.username = this.profileForm.value.username;
        this.email = this.profileForm.value.email;
        this.firstName = this.profileForm.value.firstName;
        this.lastName = this.profileForm.value.lastName;
        this.gender = this.profileForm.value.gender;
        this.organization = this.profileForm.value.organization;
        this.intro = this.profileForm.value.intro;
        this.usernameTaken = false;
        this.submitSuccess = false;
        this.userService.findUserByUsername(this.username)
            .subscribe(function (user) {
            _this.aUser = user;
            if (_this.aUser !== null && _this.username !== _this.prevUsername) {
                _this.usernameTaken = true;
            }
            else {
                var updatedUser = {
                    username: _this.username,
                    password: _this.user.password,
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    email: _this.email,
                    organization: _this.organization,
                    role: _this.role,
                    gender: _this.gender,
                    intro: _this.intro
                };
                _this.userService.updateUser(_this.uid, updatedUser)
                    .subscribe(function (newU) {
                    _this.route.navigate(['/user']);
                });
                _this.submitSuccess = true;
                _this.prevUsername = _this.username;
            }
        });
    };
    ProfileComponent.prototype.unfollow = function (uid, oid) {
        var _this = this;
        this.userService.unfollow(uid, oid)
            .subscribe(function (data) {
            _this.findOrgs();
        });
    };
    ProfileComponent.prototype.cancel = function (uid, wid) {
        var _this = this;
        this.userService.cancel(uid, wid)
            .subscribe(function (data) {
            _this.findEvents();
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.sharedService.user = '';
            _this.route.navigate(['/']);
        });
    };
    ProfileComponent.prototype.findOrgs = function () {
        var _this = this;
        this.userService.findFollowing(this.uid)
            .subscribe(function (orgs) {
            _this.orgs = orgs;
            _this.findEvents();
        });
    };
    ProfileComponent.prototype.findEvents = function () {
        var _this = this;
        this.eventService.findEvents(this.uid)
            .subscribe(function (events) {
            console.log(events);
            _this.eves = events;
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        this.role = this.user.role;
        this.uid = this.user._id;
        this.username = this.user.username;
        this.email = this.user.email;
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        this.prevUsername = this.username;
        this.organization = this.user.organization;
        this.gender = this.user.gender;
        this.intro = this.user.intro;
        this.org = {};
        this.findOrgs();
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("./src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("./src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_event_service_client__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_event_service_client__["a" /* EventService */]) === "function" && _f || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"/\"\r\n       class=\"navbar-header pull-left navbar-brand thick\">\r\n      <b class=\"sw-text-white\">Athelete</b>\r\n    </a>\r\n    <a routerLink=\"/\"\r\n       class=\"navbar-header pull-left navbar-brand thick\">\r\n      <b class=\"sw-text-white\">Home</b>\r\n    </a>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <div *ngIf=\"usernameError\"\r\n       class=\"alert alert-danger\" >\r\n    Username was taken!\r\n  </div>\r\n  <div *ngIf=\"passwordError\"\r\n       class=\"alert alert-danger\" >\r\n    Two passwords are not match!\r\n  </div>\r\n  <h1>Register</h1>\r\n  <form (ngSubmit)=\"register()\"\r\n        #f =\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\"\r\n             id=\"username\"\r\n             name=\"username\"\r\n             required\r\n             ngModel\r\n             #username=\"ngModel\"\r\n             placeholder=\"username\"\r\n             class=\"form-control\"/>\r\n    </div>\r\n    <span class=\"help-block\"\r\n          *ngIf=\"!username.valid && username.touched\">Please enter username!</span>\r\n    <div class=\"form-group\">\r\n      <input type=\"password\"\r\n             id=\"password\"\r\n             name=\"password\"\r\n             required\r\n             ngModel\r\n             #password=\"ngModel\"\r\n             placeholder=\"password\"\r\n             class=\"form-control\"/>\r\n    </div>\r\n    <span class=\"help-block\"\r\n          *ngIf=\"!password.valid && password.touched\">Please enter password!</span>\r\n    <div class=\"form-group\">\r\n      <input type=\"password\"\r\n             id=\"verifyPassword\"\r\n             name=\"verifyPassword\"\r\n             required\r\n             ngModel\r\n             #verifyPassword=\"ngModel\"\r\n             placeholder=\"verify password\"\r\n             class=\"form-control\"/>\r\n    </div>\r\n    <span class=\"help-block\"\r\n          *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">Please verify username!</span>\r\n    <button class=\"btn btn-primary btn-block\"\r\n       type=\"submit\"\r\n       [disabled]=\"!f.valid\">Register</button>\r\n    <button class=\"btn btn-danger btn-block\"\r\n       routerLink=\"/choose\" >Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("./src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        this.usernameError = false;
        this.passwordError = false;
        if (this.password !== this.verifyPassword) {
            this.passwordError = true;
        }
        else {
            this.userService.register(this.username, this.password)
                .subscribe(function (user) {
                _this.sharedService.user = user;
                _this.router.navigate(['/']);
            }, function (error) {
                _this.usernameError = true;
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("./src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("./src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/services/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.client.js.map

/***/ }),

/***/ "./src/app/services/event.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventService = (function () {
    function EventService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // adds the event parameter instance to the local events array. The new event's orgId is set to the userId parameter
    EventService.prototype.createEvent = function (userId, event) {
        var url = this.baseUrl + '/api/user/' + userId + '/event';
        return this.http.post(url, event)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the events in local events array whose orgId matches the parameter userId
    EventService.prototype.findEventsByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/event';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // retrieves the event in local events array whose _id matches the eventId parameter
    EventService.prototype.findEventById = function (eventId) {
        var url = this.baseUrl + '/api/event/' + eventId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // updates the event in local events array whose _id matches the eventId parameter
    EventService.prototype.updateEvent = function (eventId, event) {
        var url = this.baseUrl + '/api/event/' + eventId;
        return this.http.put(url, event)
            .map(function (response) {
            return response.json();
        });
    };
    // removes the event from local events array whose _id matches the eventId parameter
    EventService.prototype.deleteEvent = function (eventId) {
        var url = this.baseUrl + '/api/event/' + eventId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    EventService.prototype.searchEvent = function (key) {
        var url = this.baseUrl + '/api/event/search/' + key;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    EventService.prototype.register = function (uid, wid) {
        var url = this.baseUrl + '/api/event/' + uid + '/register/' + wid;
        return this.http.put(url, null)
            .map(function (response) {
            return response.json();
        });
    };
    EventService.prototype.findEvents = function (uid) {
        var url = this.baseUrl + '/api/event/' + uid + '/findEvents';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    EventService.prototype.findAll = function () {
        var url = this.baseUrl + '/api/event/findAll';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return EventService;
}());
EventService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], EventService);

var _a;
//# sourceMappingURL=event.service.client.js.map

/***/ }),

/***/ "./src/app/services/home.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.searchWeather = function (city, state) {
        var url = 'https://api.wunderground.com/api/5aef84f6a4fe075e/conditions/q/' + state + '/' + city + '.json';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return HomeService;
}());
HomeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HomeService);

var _a;
//# sourceMappingURL=home.service.client.js.map

/***/ }),

/***/ "./src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
        this.role = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_client__ = __webpack_require__("./src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.register = function (username, password) {
        var url = this.baseUrl + '/api/register?role=';
        url += this.sharedService.role;
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.baseUrl + '/api/login';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.logout = function () {
        var url = this.baseUrl + '/api/logout';
        this.options.withCredentials = true;
        return this.http.post(url, {}, this.options)
            .map(function (response) {
            return response;
        });
    };
    UserService.prototype.checkLogin = function () {
        var _this = this;
        var url = this.baseUrl + '/api/loggedIn';
        this.options.withCredentials = true;
        return this.http.post(url, {}, this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                return false;
            }
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        var url = this.baseUrl + '/api/loggedIn';
        this.options.withCredentials = true;
        return this.http.post(url, {}, this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    // returns the user whose username and password match the username and password parameters
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // returns the user in local users array whose _id matches the userId parameter
    UserService.prototype.findUserById = function (uid) {
        var url = this.baseUrl + '/api/user/' + uid;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    //  adds the user parameter instance to the local users array
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    //  returns the user in local users array whose username matches the parameter username
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    // updates the user in local users array whose _id matches the userId parameter
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.follow = function (uid, oid) {
        var url = this.baseUrl + '/api/user/follow?uid=' + uid + '&oid=' + oid;
        return this.http.put(url, null)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.unfollow = function (uid, oid) {
        var url = this.baseUrl + '/api/user/unfollow?uid=' + uid + '&oid=' + oid;
        return this.http.put(url, null)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.cancel = function (uid, wid) {
        var url = this.baseUrl + '/api/user/cancel?uid=' + uid + '&wid=' + wid;
        return this.http.put(url, null)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.checkFollow = function (uid, oid) {
        var url = this.baseUrl + '/api/user/checkFollow?uid=' + uid + '&oid=' + oid;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findFollowing = function (uid) {
        var url = this.baseUrl + '/api/user/' + uid + '/findFollowing';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findRegister = function (wid, role) {
        var url = this.baseUrl + '/api/user/' + wid + '/findRegister/' + role;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findAll = function () {
        var url = this.baseUrl + '/api/user/findAll';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (uid) {
        var url = this.baseUrl + '/api/user/' + uid;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map