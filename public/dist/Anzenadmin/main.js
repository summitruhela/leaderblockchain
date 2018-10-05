(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-announcement/add-announcement.component.html":
/*!******************************************************************!*\
  !*** ./src/app/add-announcement/add-announcement.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"wrapper \">\n           \n            <app-sidebar></app-sidebar>\n        \n\n        <div class=\"main-panel\">\n            <!-- Navbar -->\n          \n            <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n                <div class=\"container-fluid\">\n                    <div class=\"navbar-wrapper\">\n                        <a class=\"navbar-brand\" href=\"javascript:void(0);\">Add Annoucements</a>\n                    </div>\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n                        aria-label=\"Toggle navigation\">\n                        <span class=\"sr-only\">Toggle Nav</span>\n                        <!-- <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span> -->\n                    </button>\n                    <div class=\"collapse navbar-collapse justify-content-end\">\n                      \n                         \n                              \n                                <app-side-icon></app-side-icon>\n                            \n                     </div>\n                   \n                </div>\n            </nav>\n           \n            <!-- End Navbar -->\n            <div class=\"content\">\n                <div class=\"container-fluid pt-4\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-tabs card-header-primary\">\n                            <h4 class=\"card-title font-weight-bold\">Add Annoucements</h4>\n                        </div>\n                        <form class=\"form\" [formGroup]='Form'>\n                        <div class=\"card-body\">\n                          \n                                <div class=\"row\">\n                                    <div class=\"col-md-8\">\n                                        <div class=\"form-group\">\n                                            <div class=\"form-group bmd-form-group\">\n                                                <!-- <label class=\"bmd-label-floating\">Title </label> -->\n                                                <input type=\"text\" class=\"form-control\" [formControl]=\"Form.controls['title']\" placeholder=\"Title\" >\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <div class=\"form-group\">\n                                            <label class=\"custom-file\">\n                                                <input type=\"file\" id=\"file\" class=\"custom-file-input\" (change)=\"onImageChange($event)\" accept=\"image/*\">\n                                                <span class=\"custom-file-control\"></span>\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <div class=\"form-group bmd-form-group\">\n                                                <!-- <label class=\"bmd-label-floating\"> Write Description</label> -->\n                                                <textarea class=\"form-control\" rows=\"5\" [formControl]=\"Form.controls['Description']\" placeholder=\"Write Description\"></textarea>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"w-100\">\n                                    <h4 class=\"font-weight-bold\">Annoucements Validity:</h4>\n                                </div>\n                                <div class=\"row align-items-baseline\">\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group bmd-form-group\">\n                                            <div class=\"input-group\">\n                                                <label ><b>Start Date</b></label>\n                                                <input type=\"date\" class=\"form-control\" min=\"{{maxAge | date:'yyyy-MM-dd'}}\" [formControl]=\"Form.controls['StartDate']\">\n                                                <!-- <div class=\"input-group-append p-0\">\n                                                    <span class=\"input-group-text material-icons p-0 \">date_range</span>\n                                                </div> -->\n                                            </div>\n                                        </div>\n                                    </div>\n                                   \n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group bmd-form-group\">\n                                            <div class=\"input-group\">\n                                                <label><b>End Date</b></label>\n                                               \n                                                <input type=\"date\" class=\"form-control\" min=\"{{maxAge | date:'yyyy-MM-dd'}}\" [formControl]=\"Form.controls['EndDate']\">\n                                                <!-- <div class=\"input-group-append p-0\">\n                                                    <span class=\"input-group-text material-icons p-0 \">date_range</span>\n                                                </div> -->\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                        <div class=\"form-group bmd-form-group\">\n                                                <div class=\"w-40\">\n                                                        <h6 class=\"font-weight-bold\">Assign:</h6>\n                                                    </div>\n                                            <!-- <label class=\"bmd-label-floating\">Assign: </label> -->\n                                            <!-- <select class=\"form-control custom_select\" [formControl]=\"Form.controls['user']\">\n                                                <option value=\"\">select User</option>\n                                                <option *ngFor=\"let item of userList\">{{item?.userName}}</option>\n                                            </select> -->\n                                            <ng-multiselect-dropdown\n                                            [placeholder]=\"'Select User'\"\n                                            [data]=\"userList\"\n                                     [formControl]=\"Form.controls['user']\" \n                                            [settings]=\"dropdownSettings\"\n                                            >\n                                            </ng-multiselect-dropdown>\n                                            <!-- <input type=\"text\" class=\"form-control\"> -->\n                                        </div>\n                                    </div>\n                                    <!-- <div class=\"col-md-3\">\n                                        <div class=\"form-group bmd-form-group\">\n                                            <select class=\"form-control custom_select\">\n                                                <option value=\"\">1</option>\n                                                <option value=\"\">1</option>\n                                            </select>\n                                        </div>\n                                    </div> -->\n                                    <div class=\"col-md-12 text-md-right\">\n                                        <div class=\"form-group bmd-form-group d-inline-flex\">\n                                            <button type=\"submit\" class=\"btn btn-primary \" (click)=\"add()\" [disabled]=\"Form.invalid || !image \">ADD </button>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"clearfix\"></div>\n                            \n                        </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <app-footer></app-footer>\n\n        </div>\n    </div>\n       <app-logout></app-logout>\n\n   \n\n\n"

/***/ }),

/***/ "./src/app/add-announcement/add-announcement.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/add-announcement/add-announcement.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-announcement/add-announcement.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/add-announcement/add-announcement.component.ts ***!
  \****************************************************************/
/*! exports provided: AddAnnouncementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAnnouncementComponent", function() { return AddAnnouncementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddAnnouncementComponent = /** @class */ (function () {
    function AddAnnouncementComponent(router, service, formBuilder, ng2ImgMaxService) {
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.ng2ImgMaxService = ng2ImgMaxService;
        this.userList = [];
        this.image = '';
        this.date = new Date;
        this.dropdownSettings = {
            singleSelection: false,
            idField: '_id',
            textField: 'userName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.Form = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StartDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            EndDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AddAnnouncementComponent.prototype.ngOnInit = function () {
        var today = new Date();
        var maxAge = 0;
        this.maxAge = new Date(today.getFullYear() - maxAge, today.getMonth(), today.getDate());
        this.y = this.date.getFullYear();
        this.m = this.date.getMonth() + 1;
        this.d = this.date.getDate();
        if (this.m < 10) {
            this.m = "0" + this.m;
        }
        this.newDate = this.y + "-" + this.m + "-" + this.d;
        // $('#startDate, #endDate').attr('min', this.newDate);
        this.userListApi();
        // this.add('');
    };
    AddAnnouncementComponent.prototype.userListApi = function () {
        var _this = this;
        this.service.postApi("getUserListNew", {}, 1).subscribe(function (response) {
            if (response.responseCode == 200) {
                _this.userList = response.data;
            }
        });
    };
    AddAnnouncementComponent.prototype.onImageChange = function (event) {
        var _this = this;
        console.log('fil => ', this.Form.value);
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var image = event.target.files[0];
            this.ng2ImgMaxService.resizeImage(image, 400, 300).subscribe(function (result) {
                var reader = new FileReader();
                reader.readAsDataURL(result); // read file as data url
                reader.onload = function (event) {
                    _this.image = new Image();
                    //Set the Base64 string return from FileReader as source.
                    _this.image.src = event.target.result;
                    console.log("RESULT%%%%%", event.target.result);
                    self.Form.controls['file'].setValue(event.target.result);
                };
            });
        }
    };
    AddAnnouncementComponent.prototype.add = function () {
        var _this = this;
        console.log("!!!!!!!!!!@@@", this.Form.value);
        var val = this.Form.value;
        /* let arr = this.userList.filter(x => {
          let obj = val.user.map(y => x._id == y._id)
          return obj;
        }) */
        var arr = val.user.map(function (x) {
            var obj = _this.userList.filter(function (y) { return y._id == x._id; })[0];
            return { userName: obj.userName, status: obj.status, _id: obj._id };
        });
        //  return;
        // console.log("@@3454456511111", arr)
        //  this.userList.filter(x => x._id == val.user[0])
        // return;
        var logindata = {
            "title": val.title,
            "startDate": val.StartDate,
            "endDate": val.EndDate,
            "description": val.Description,
            "icon": val.file,
            "user": arr
        };
        console.log("rrreeesssuuu---->>>", logindata);
        this.service.postApi("addAnnouncement", logindata, 1).subscribe(function (response) {
            console.log('res@@@@@@@@@@@', JSON.stringify(logindata));
            if (response['responseCode'] == 200) {
                // console.log(' add data successfully', response)
                // this.userData = response['data']['docs']
                //      this.event= this.userData;
                //console.log("dcfdsfdsfdf",JSON.stringify(  this.userData = response['user'][0]))
                //  this.Event= this.userData;
                //console.log("@@@@@>>>",JSON.stringify( this.logindata));
                _this.service.showSuccess(response['responseMessage']);
                _this.router.navigateByUrl('/announcement');
            }
            else {
                _this.service.showError(response['responseMessage']);
            }
        }, function (error) {
            console.log('error =>', error);
            _this.service.showError('Something Went Wrong');
        });
    };
    AddAnnouncementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-announcement',
            template: __webpack_require__(/*! ./add-announcement.component.html */ "./src/app/add-announcement/add-announcement.component.html"),
            styles: [__webpack_require__(/*! ./add-announcement.component.scss */ "./src/app/add-announcement/add-announcement.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ng2_img_max__WEBPACK_IMPORTED_MODULE_4__["Ng2ImgMaxService"]])
    ], AddAnnouncementComponent);
    return AddAnnouncementComponent;
}());



/***/ }),

/***/ "./src/app/add-faq/add-faq.component.html":
/*!************************************************!*\
  !*** ./src/app/add-faq/add-faq.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper \">\n           \n  <app-sidebar></app-sidebar>\n\n<div class=\"main-panel\">\n  <!-- Navbar -->\n  <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n      <div class=\"container-fluid\">\n          <div class=\"navbar-wrapper\">\n              <a class=\"navbar-brand\">ADD FAQ</a>\n          </div>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n              aria-label=\"Toggle navigation\">\n              <span class=\"sr-only\">Toggle Nav</span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n          </button>\n          <div class=\"collapse navbar-collapse justify-content-end\">\n           \n               \n                     \n                      <app-side-icon></app-side-icon>\n             \n          </div>\n      </div>\n  </nav>\n  <!-- End Navbar -->\n  <div class=\"content\">\n      <div class=\"container-fluid pt-4\">\n          <div class=\"card\">\n              <div class=\"card-header card-header-tabs card-header-primary\">\n                  <h4 class=\"card-title font-weight-bold\">Static Content Management</h4>\n                  <p class=\"card-category\">Add Faq</p>\n              </div>\n              <div class=\"card-body\">\n                      <form class=\"form\" [formGroup]='passwordForm'>\n                      <div class=\"row\">\n                          <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                                  <div class=\"form-group bmd-form-group\">\n                                      <!-- <label class=\"bmd-label-floating\">Enter Question </label> -->\n                                      <input type=\"text\" class=\"form-control\" formControlName='que' placeholder='Enter Question '>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"row\">\n                          <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                                  <div class=\"form-group bmd-form-group\">\n                                      <!-- <label class=\"bmd-label-floating\"> Write you answer</label> -->\n                                      <input class=\"form-control\" rows=\"5\" formControlName='ans' placeholder='Write you answer'>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                          <div class=\"col-md-12 text-md-right\">\n                              <div class=\"form-group bmd-form-group d-inline-flex\">\n                                  <button type=\"submit\" class=\"btn btn-primary \" (click)=\"save(passwordForm.value)\" [disabled]=\"passwordForm.invalid \">SAVE </button>\n                              </div>\n                       \n                      </div>\n                      <div class=\"clearfix\"></div>\n                  </form>\n              </div>\n          </div>\n      </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n</div>\n<app-logout></app-logout>\n"

/***/ }),

/***/ "./src/app/add-faq/add-faq.component.scss":
/*!************************************************!*\
  !*** ./src/app/add-faq/add-faq.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-faq/add-faq.component.ts":
/*!**********************************************!*\
  !*** ./src/app/add-faq/add-faq.component.ts ***!
  \**********************************************/
/*! exports provided: AddFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFaqComponent", function() { return AddFaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddFaqComponent = /** @class */ (function () {
    function AddFaqComponent(formBuilder, router, service) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.passwordForm = this.formBuilder.group({
            que: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ans: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    AddFaqComponent.prototype.ngOnInit = function () {
    };
    AddFaqComponent.prototype.save = function (val) {
        var _this = this;
        console.log("value=======>", val);
        var postData = {
            faq: {
                "Ques": this.passwordForm.value.que,
                "Ans": this.passwordForm.value.ans
            }
        };
        console.log("DATA SAVE=====>", postData);
        this.service.postApi('n1/updateStatic', postData, 1).subscribe(function (response) {
            console.log("**********************", JSON.stringify(response));
            if (response['responseCode'] == 200) {
                console.log("Save content data - " + response);
                //this.controls = localStorage.getItem('staticId')
                console.log("cant find>>>>>", _this.controls);
                _this.service.showSuccess(response['responseMessage']);
                _this.router.navigate(['/Faq1/:']);
            }
            else {
                _this.service.showError(response['responseMessage']);
            }
        }, function (error) {
            _this.service.showError('Something Went Wrong');
        });
    };
    AddFaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-faq',
            template: __webpack_require__(/*! ./add-faq.component.html */ "./src/app/add-faq/add-faq.component.html"),
            styles: [__webpack_require__(/*! ./add-faq.component.scss */ "./src/app/add-faq/add-faq.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AddFaqComponent);
    return AddFaqComponent;
}());



/***/ }),

/***/ "./src/app/add-token/add-token.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-token/add-token.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-token works!\n</p>\n"

/***/ }),

/***/ "./src/app/add-token/add-token.component.scss":
/*!****************************************************!*\
  !*** ./src/app/add-token/add-token.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-token/add-token.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-token/add-token.component.ts ***!
  \**************************************************/
/*! exports provided: AddTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTokenComponent", function() { return AddTokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddTokenComponent = /** @class */ (function () {
    function AddTokenComponent() {
    }
    AddTokenComponent.prototype.ngOnInit = function () {
    };
    AddTokenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-token',
            template: __webpack_require__(/*! ./add-token.component.html */ "./src/app/add-token/add-token.component.html"),
            styles: [__webpack_require__(/*! ./add-token.component.scss */ "./src/app/add-token/add-token.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddTokenComponent);
    return AddTokenComponent;
}());



/***/ }),

/***/ "./src/app/announcement/announcement.component.html":
/*!**********************************************************!*\
  !*** ./src/app/announcement/announcement.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n  <div class=\"wrapper \">\n  \n      <app-sidebar></app-sidebar>\n  \n    <div class=\"main-panel\">\n      <!-- Navbar -->\n      <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-wrapper\">\n            <a class=\"navbar-brand\" href=\"javascript:viod(0);\">Announcement</a>\n          </div>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n            <span class=\"sr-only\">Toggle Nav</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n          </button>\n          <div class=\"collapse navbar-collapse justify-content-end\">\n          \n                <app-side-icon></app-side-icon>\n             \n          </div>\n        </div>\n      </nav>\n      <!-- End Navbar -->\n      <div class=\"content\">\n        <div class=\"container-fluid  pt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"card my-3\">\n                <div class=\"card-header card-header-primary\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-md-8\">\n                            <h4 class=\"card-title font-weight-bold\">Announcement List</h4>\n                        </div>\n                        <div class=\"col-md-4 text-md-right\">\n                            <form class=\"navbar-form d-inline-flex ml-md-auto\" [formGroup]=\"Form\">\n                                <!-- <div class=\"input-group no-border\" >\n                                    <input type=\"text\" value=\"\" class=\"form-control text-white\" placeholder=\"Search by name\">\n                                    <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                                    <i class=\"material-icons\" >search</i>\n                                    <div class=\"ripple-container\"></div>\n                                    </button>\n                                </div> -->\n                            </form>\n                        </div>\n                        <div class=\"col-md-4 text-md-right\">\n                          <div class=\"form-group bmd-form-group d-inline-flex\">\n                              <button type=\"submit\" (click)=\"add()\"  class=\"btn btn-primary \">Add Announcement </button>\n                          </div>\n                      </div>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-bordered\">\n                      <thead class=\" text-primary border-top\">\n                         <!-- <th>Sr.No.</th> -->\n                        <th>Title</th>\n                        <th>Start Date</th>\n                        <th>End Date</th>\n                        <th>Total Users</th>\n                        <th>Action</th>\n                        <!-- <th class=\"text-right\">Action</th> -->\n                      </thead>\n                      <tbody>\n                        <!-- <tr>\n                          <td>Announcement 1</td>\n                          <td class=\"no-wrap\">01/09/2018</td>\n                          <td class=\"no-wrap\">17/09/2018</td>\n                          <td>20%</td>\n                          <td class=\"no-wrap text-right\">\n                              <button class=\"btn btn-sm btn-primary\" (click)=\"edit()\"><i class=\"fa fa-edit\"></i></button>\n                              <button class=\"btn btn-sm btn-danger\" ><i class=\"fa fa-trash\"></i></button>\n                          </td>\n                          , totalItems: paginationData.total\n                        </tr> -->\n                        <tr *ngFor=\"let item of event | paginate: { itemsPerPage: limit, currentPage: page, totalItems: total };let i = index\">\n                            <!-- <td *ngIf=\"p == 1\">{{i + 1}}</td>\n                            <td *ngIf=\"p > 1\">{{i + 1 + 10 * (p-1)}}</td> -->\n                            <td>{{item.title}}</td>\n                            <td>{{item.startDate}}</td>\n                            <td>{{item.endDate}}</td>\n                            <td>{{item.totalUser}}</td>\n                            <td>\n                              <div class=\"action-btn\">\n                                  \n                                  <a class=\"btn btn-sm btn-primary\" (click)=\"edit(item._id)\">\n                                      <i class=\"fa fa-edit\"></i> Edit</a>\n                                  <a class=\"btn btn-sm btn-danger\" (click)=\"userdel(item._id)\">\n                                      <i class=\"fa fa-trash\"></i> Delete</a>\n                              </div>\n                          </td>\n                            <td></td>\n                            <!-- <td>\n                            <div class=\"action-btn\">\n                          \n                            <a class=\"btn btn-sm btn-primary\" (click)=\"edit(i)\">\n                            <i class=\"fa fa-edit\"></i> Edit</a>\n                            <a class=\"btn btn-sm btn-danger\" (click)=\"userdel(i)\">\n                            <i class=\"fa fa-trash\"></i> Delete</a>\n                            </div>\n                            </td> -->\n                            <!-- <td>\n                            <label class=\"switch\">\n                            <input type=\"checkbox\" name=\"active\" (click)=\"userStatus(item)\" value='item.status' [(ngModel)]=\"item.status\">\n                            <span class=\"slider round\"></span>\n                            </label>\n                            </td> -->\n                            </tr>\n                        \n                      </tbody>\n                    </table>\n                    <pagination-controls (pageChange)=\"getAllCustomer('',$event)\"></pagination-controls>\n                  </div>\n                 \n                </div>\n              </div>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n      <app-footer> </app-footer>\n    </div>\n  </div>\n\n  <app-logout></app-logout>\n\n\n\n"

/***/ }),

/***/ "./src/app/announcement/announcement.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/announcement/announcement.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/announcement/announcement.component.ts":
/*!********************************************************!*\
  !*** ./src/app/announcement/announcement.component.ts ***!
  \********************************************************/
/*! exports provided: AnnouncementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementComponent", function() { return AnnouncementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnnouncementComponent = /** @class */ (function () {
    function AnnouncementComponent(router, service, formBuilder) {
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.event = [];
        this.userData = [];
        this.page = 1;
        this.date = new Date;
        this.Form = this.formBuilder.group({});
    }
    AnnouncementComponent.prototype.ngOnInit = function () {
        this.getAllCustomer('', this.page);
    };
    AnnouncementComponent.prototype.add = function () {
        this.router.navigateByUrl('/add_announcement');
    };
    AnnouncementComponent.prototype.getAllCustomer = function (val, page) {
        var _this = this;
        console.log("Form Value--> ", val);
        this.page = "" + page;
        //     let logindata =
        // {
        //   // search: this.Form.controls['search'].value,
        //   // status: this.dashboardForm.controls['sort'].value,
        //   // userType: "CUSTOMER"
        // }
        // for (let val in logindata) {
        //   if (logindata[val] == '') {
        //     delete logindata[val]
        //   }
        // }
        this.service.getApi("getAllannouncement", 1).subscribe(function (response) {
            _this.responseData = response;
            console.log('res');
            if (response['responseCode'] == 200) {
                // console.log('  data found successfully',response)
                //  this.userData = response['data']['docs']
                //  this.event= this.userData;
                _this.userData = response['data'];
                console.log("Data--> ", JSON.stringify(_this.userData));
                _this.event = _this.userData.docs;
                _this.limit = _this.userData.limit;
                _this.total = _this.userData.total;
                //  console.log("limit--L> ",this.limit+" total--> ",this.total);
                //  localStorage.setItem('userId',this.responseData.data.docs[0]._id) 
                //  console.log("ID",JSON.stringify(this.responseData.data.docs[0]._id))
                // for(let i=0; i<this.user.length; i++){
                //   if(this.user[i].status == 'ACTIVE'){
                //     this.modified[i].status = 'ACTIVE'
                //   }
                //   else if(this.user[i].status == 'BLOCK'){
                //     this.modified[i].status = 'BLOCK'
                //   }
                // }
                // console.log('result of all customer--->', JSON.stringify(this.user))
                // this.paginationData = response['paginationData']
                // this.srNo = (this.pageNo - 1) * this.paginationData.limit
                // this.service.showSuccess(response['responseMessage'])
                // localStorage.userId = response[`data`][`docs`][0][`_id`];
            }
            else {
                _this.service.showError(response['responseMessage']);
            }
        }, function (error) {
            console.log('error =>', error);
            _this.service.showError('Something Went Wrong');
        });
    };
    // ---------===========================----------------------==============================------------------------============-----------
    AnnouncementComponent.prototype.userdel = function (val) {
        var _this = this;
        console.log(val);
        var delData = {
            "announcementId": val
        };
        console.log('delete _id>>>>>>', delData);
        this.service.postApi('deleteAnnouncement', delData, 1).subscribe(function (response) {
            _this.responseData = response;
            console.log("Login Data====>" + JSON.stringify(val));
            if (response['responseCode'] == 200) {
                _this.service.showSuccess(response['responseMessage']);
                console.log('successfully change status', response['responseMessage']);
                _this.getAllCustomer('', _this.page);
                _this.router.navigate(['/announcement']);
                console.log("succ===>", JSON.stringify(_this.responseData));
            }
            else {
                console.log("else");
                console.log(' status', response['responseMessage']);
                _this.service.showError('does not change the status.');
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    // -------------------======================+++++++++++++++++++________________________________++++++++++++++================0------
    AnnouncementComponent.prototype.edit = function (edit_id) {
        var _this = this;
        console.log("edit_id", edit_id);
        var editdata = {
            "announcementId": edit_id
        };
        this.service.postApi('announcementInfo', editdata, 1).subscribe(function (response) {
            console.log("edit click===>>>", response);
            // this.responseData = response;
            // console.log(`Login Data====>${JSON.stringify(val)}`);
            if (response['responseCode'] == 200) {
                _this.service.showSuccess(response['responseMessage']);
                console.log("===========>>>>>>", response.data[0]);
                _this.service.editdata = response.data[0];
                console.log('successfully change status', response['responseMessage']);
                _this.router.navigate(['/assign-announcement', edit_id]);
                //   console.log("succ===>", JSON.stringify(this.responseData))
            }
            else {
                console.log("else");
                console.log(' status', response['responseMessage']);
                _this.service.showError('does not change the status.');
            }
        }, function (error) {
            console.log('forgot api error', error);
            _this.service.showError('Server Error');
        });
    };
    AnnouncementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-announcement',
            template: __webpack_require__(/*! ./announcement.component.html */ "./src/app/announcement/announcement.component.html"),
            styles: [__webpack_require__(/*! ./announcement.component.scss */ "./src/app/announcement/announcement.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AnnouncementComponent);
    return AnnouncementComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-user/manage-user.component */ "./src/app/manage-user/manage-user.component.ts");
/* harmony import */ var _announcement_announcement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./announcement/announcement.component */ "./src/app/announcement/announcement.component.ts");
/* harmony import */ var _manage_content_manage_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage-content/manage-content.component */ "./src/app/manage-content/manage-content.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");
/* harmony import */ var _assign_announcement_assign_announcement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assign-announcement/assign-announcement.component */ "./src/app/assign-announcement/assign-announcement.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _add_announcement_add_announcement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-announcement/add-announcement.component */ "./src/app/add-announcement/add-announcement.component.ts");
/* harmony import */ var _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./terms-of-use/terms-of-use.component */ "./src/app/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/my-profile/my-profile.component.ts");
/* harmony import */ var _edit_faq_edit_faq_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-faq/edit-faq.component */ "./src/app/edit-faq/edit-faq.component.ts");
/* harmony import */ var _faq1_faq1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./faq1/faq1.component */ "./src/app/faq1/faq1.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/view-details/view-details.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/forgot/forgot.component.ts");
/* harmony import */ var _add_faq_add_faq_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-faq/add-faq.component */ "./src/app/add-faq/add-faq.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var _token_token_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./token/token.component */ "./src/app/token/token.component.ts");
/* harmony import */ var _edit_my_profile_edit_my_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-my-profile/edit-my-profile.component */ "./src/app/edit-my-profile/edit-my-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"] },
    { path: 'manage-user', component: _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_6__["ManageUserComponent"] },
    { path: 'announcement', component: _announcement_announcement_component__WEBPACK_IMPORTED_MODULE_7__["AnnouncementComponent"] },
    { path: 'manage-content', component: _manage_content_manage_content_component__WEBPACK_IMPORTED_MODULE_8__["ManageContentComponent"] },
    { path: 'setting', component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_9__["SettingComponent"] },
    { path: 'assign-announcement/:id', component: _assign_announcement_assign_announcement_component__WEBPACK_IMPORTED_MODULE_10__["AssignAnnouncementComponent"] },
    { path: 'user_details/:type/:tab', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailsComponent"] },
    { path: 'add_announcement', component: _add_announcement_add_announcement_component__WEBPACK_IMPORTED_MODULE_12__["AddAnnouncementComponent"] },
    { path: 'termsOfuse/:type', component: _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_13__["TermsOfUseComponent"] },
    { path: 'Faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_14__["FaqComponent"] },
    { path: 'Faq1/:type', component: _faq1_faq1_component__WEBPACK_IMPORTED_MODULE_18__["Faq1Component"] },
    { path: 'viewDetails', component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_19__["ViewDetailsComponent"] },
    { path: 'forgot/:adminId', component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_20__["ForgotComponent"] },
    { path: 'edit-user', component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_22__["EditUserComponent"] },
    { path: 'token', component: _token_token_component__WEBPACK_IMPORTED_MODULE_23__["TokenComponent"] },
    { path: 'edit_myProfile/:adminId', component: _edit_my_profile_edit_my_profile_component__WEBPACK_IMPORTED_MODULE_24__["EditMyProfileComponent"] },
    { path: 'change_password', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_15__["ChangePasswordComponent"] },
    { path: 'my_profile', component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_16__["MyProfileComponent"] },
    { path: 'edit_faq/:type', component: _edit_faq_edit_faq_component__WEBPACK_IMPORTED_MODULE_17__["EditFaqComponent"] },
    { path: 'add_faq', component: _add_faq_add_faq_component__WEBPACK_IMPORTED_MODULE_21__["AddFaqComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, service) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.title = 'Anzenadmin';
        this.router.events.subscribe(function (x) {
            if (x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                window.scroll(0, 0);
                var currUrl = _this.router.url.indexOf('?') == -1 ? _this.router.url.split('/')[1] : _this.router.url.slice(1, _this.router.url.indexOf('?'));
                if (localStorage.getItem('adminId') === null) {
                    console.log(_this.router.url);
                    if (!(currUrl === 'login' || currUrl === 'forgot-password' || currUrl === 'forgot')) {
                        _this.router.navigate(['/login']);
                    }
                }
                else {
                    if (currUrl === 'login' || currUrl === 'forgot-password' || currUrl === 'forgot') {
                        _this.router.navigate(['/dashboard']);
                    }
                }
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());

// export class AppComponent {
//   title = 'app';
//   loginstatus:boolean;
//   constructor(public service:MainService, private router: Router){
//   this.router.events.subscribe(x => { 
//   if(x instanceof NavigationEnd) { 
//   window.scroll(0,0)
//   if(localStorage.getItem('adminId') === null){ 
//   if(!((this.router.url === '/login')||(this.router.url === '/forgotPassword')) ){
//   this.router.navigate(['/login']);
//   } 
//   } else {
//   if(this.router.url === '/login'){
//   this.router.navigate(['/dashboard'])
//   }
//   }
//   }
//   });
//   }
//   }


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terms-of-use/terms-of-use.component */ "./src/app/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");
/* harmony import */ var _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage-user/manage-user.component */ "./src/app/manage-user/manage-user.component.ts");
/* harmony import */ var _manage_content_manage_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manage-content/manage-content.component */ "./src/app/manage-content/manage-content.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _edit_fee_edit_fee_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-fee/edit-fee.component */ "./src/app/edit-fee/edit-fee.component.ts");
/* harmony import */ var _edit_faq_edit_faq_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-faq/edit-faq.component */ "./src/app/edit-faq/edit-faq.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _assign_announcement_assign_announcement_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assign-announcement/assign-announcement.component */ "./src/app/assign-announcement/assign-announcement.component.ts");
/* harmony import */ var _announcement_announcement_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./announcement/announcement.component */ "./src/app/announcement/announcement.component.ts");
/* harmony import */ var _add_announcement_add_announcement_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-announcement/add-announcement.component */ "./src/app/add-announcement/add-announcement.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/my-profile/my-profile.component.ts");
/* harmony import */ var _side_icon_side_icon_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./side-icon/side-icon.component */ "./src/app/side-icon/side-icon.component.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var _faq1_faq1_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./faq1/faq1.component */ "./src/app/faq1/faq1.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/view-details/view-details.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/forgot/forgot.component.ts");
/* harmony import */ var _add_faq_add_faq_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./add-faq/add-faq.component */ "./src/app/add-faq/add-faq.component.ts");
/* harmony import */ var _add_token_add_token_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./add-token/add-token.component */ "./src/app/add-token/add-token.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var _edit_my_profile_edit_my_profile_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./edit-my-profile/edit-my-profile.component */ "./src/app/edit-my-profile/edit-my-profile.component.ts");
/* harmony import */ var _token_token_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./token/token.component */ "./src/app/token/token.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailsComponent"],
                _terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_7__["TermsOfUseComponent"],
                _setting_setting_component__WEBPACK_IMPORTED_MODULE_8__["SettingComponent"],
                _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_9__["ManageUserComponent"],
                _manage_content_manage_content_component__WEBPACK_IMPORTED_MODULE_10__["ManageContentComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_13__["FaqComponent"],
                _edit_fee_edit_fee_component__WEBPACK_IMPORTED_MODULE_14__["EditFeeComponent"],
                _edit_faq_edit_faq_component__WEBPACK_IMPORTED_MODULE_15__["EditFaqComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                _assign_announcement_assign_announcement_component__WEBPACK_IMPORTED_MODULE_17__["AssignAnnouncementComponent"],
                _announcement_announcement_component__WEBPACK_IMPORTED_MODULE_18__["AnnouncementComponent"],
                _add_announcement_add_announcement_component__WEBPACK_IMPORTED_MODULE_19__["AddAnnouncementComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_23__["LogoutComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["SidebarComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_26__["ChangePasswordComponent"],
                _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_27__["MyProfileComponent"],
                _side_icon_side_icon_component__WEBPACK_IMPORTED_MODULE_28__["SideIconComponent"],
                _faq1_faq1_component__WEBPACK_IMPORTED_MODULE_32__["Faq1Component"],
                _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_33__["ViewDetailsComponent"],
                _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_34__["ForgotComponent"],
                _add_faq_add_faq_component__WEBPACK_IMPORTED_MODULE_35__["AddFaqComponent"],
                _add_token_add_token_component__WEBPACK_IMPORTED_MODULE_36__["AddTokenComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_37__["EditUserComponent"],
                _edit_my_profile_edit_my_profile_component__WEBPACK_IMPORTED_MODULE_38__["EditMyProfileComponent"],
                _token_token_component__WEBPACK_IMPORTED_MODULE_39__["TokenComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ng2_img_max__WEBPACK_IMPORTED_MODULE_31__["Ng2ImgMaxModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot({
                    preventDuplicates: true
                }),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_29__["CKEditorModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_30__["NgMultiSelectDropDownModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assign-announcement/assign-announcement.component.html":
/*!************************************************************************!*\
  !*** ./src/app/assign-announcement/assign-announcement.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n    <div class=\"wrapper \">\n        \n  \n            <app-sidebar></app-sidebar>\n       \n        <div class=\"main-panel\">\n            <!-- Navbar -->\n            <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n                <div class=\"container-fluid\">\n                    <div class=\"navbar-wrapper\">\n                        <a class=\"navbar-brand\" href=\"javascript:void(0);\">Assign Annoucement</a>\n                    </div>\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n                        aria-label=\"Toggle navigation\">\n                        <span class=\"sr-only\">Toggle Nav</span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse justify-content-end\">\n                      \n                             \n                                <app-side-icon></app-side-icon>\n                          \n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar -->\n            <div class=\"content\">\n                <div class=\"container-fluid pt-4\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-tabs card-header-primary\">\n                            <h4 class=\"card-title font-weight-bold\">Annoucements</h4>\n                        </div>\n                        <div class=\"card-body\">\n                            <form [formGroup]=\"form\">\n                                    <div class=\"row\">\n                                            <div class=\"col-md-12\">\n                                                <div class=\"form-group\">\n                                                    <div class=\"form-group bmd-form-group\">\n                                                        <label class=\"bmd-label-floating\"> TITLE</label>\n                                                        <br>  <br>\n                                                        <textarea class=\"form-control\" rows=\"5\" formControlName=\"title\">xyz</textarea>\n                                            </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <div class=\"form-group bmd-form-group\">\n                                                <label class=\"bmd-label-floating\"> Description</label>\n                                                <br>  <br>\n                                                <textarea class=\"form-control\" rows=\"5\" formControlName=\"Assign\">xyz</textarea>\n                                    </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- <div><img src= {{imageurl}} (click)=\"onFileChanged($event)\" ></div> -->\n\n                                <div class=\"w-100\">\n                                    <label for=\"\">Annoucements Validity:</label>\n                                </div>\n                                <div class=\"row align-items-baseline\">\n                                    <div class=\"col-md-5\">\n                                        <div class=\"form-group bmd-form-group\">\n                                            <div class=\"input-group\">\n                                                   \n                                                <label >Start Date</label>\n                                               \n                                                <input type=\"date\" class=\"form-control\" formControlName=\"startDate\">\n                                                <!-- <div class=\"input-group-append p-0\">\n                                                    <span class=\"input-group-text material-icons p-0 \">date_range</span>\n                                                </div> -->\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-5\">\n                                        <div class=\"form-group bmd-form-group\">\n                                            <div class=\"input-group\">\n                                                <label>End Date</label>\n                                   \n                                                <input type=\"date\" class=\"form-control\" formControlName=\"endDate\">\n                                                <!-- <div class=\"input-group-append\">\n                                                    <span class=\"input-group-text material-icons p-0 \">date_range</span>\n                                                </div> -->\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-5\">\n                                            <div class=\"form-group bmd-form-group\">\n                                                    <div class=\"w-40\">\n                                                            <h6 class=\"font-weight-bold\">Assign:</h6>\n                                                        </div>\n                                                <!-- <label class=\"bmd-label-floating\">Assign: </label> -->\n                                                <!-- <select class=\"form-control custom_select\" [formControl]=\"Form.controls['user']\">\n                                                    <option value=\"\">select User</option>\n                                                    <option *ngFor=\"let item of userList\">{{item?.userName}}</option>\n                                                </select> [formControl]=\"Form.controls['user']\"-->\n                                                <ng-multiselect-dropdown\n                                                [placeholder]=\"'Select User'\"\n                                                [data]=\"userList\"\n                                                 formControlName=\"user\"\n                                                [settings]=\"dropdownSettings\">\n                                                </ng-multiselect-dropdown> \n                                                \n                                            </div>\n                                        </div>\n                                    <div class=\"col-md-2 text-md-right\">\n                                        <div class=\"form-group bmd-form-group d-inline-flex\">\n                                            <button type=\"submit\" class=\"btn btn-primary \" (click)=\"update(form.value)\">Update </button>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"clearfix\"></div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <app-footer >\n             \n            </app-footer>\n        </div>\n    </div>\n    <app-logout></app-logout>\n\n\n"

/***/ }),

/***/ "./src/app/assign-announcement/assign-announcement.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/assign-announcement/assign-announcement.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 200px;\n  width: 200px; }\n"

/***/ }),

/***/ "./src/app/assign-announcement/assign-announcement.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/assign-announcement/assign-announcement.component.ts ***!
  \**********************************************************************/
/*! exports provided: AssignAnnouncementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignAnnouncementComponent", function() { return AssignAnnouncementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignAnnouncementComponent = /** @class */ (function () {
    function AssignAnnouncementComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.dropdownSettings = {
            singleSelection: false,
            idField: '_id',
            textField: 'userName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.userData = this.service.editdata;
        this.imageurl = "src/assets/img/image.jpg";
        console.log("dfsjkghdjkfhg", this.userData);
        this.form = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.userData.title, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Assign: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.userData.description, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            startDate: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.userData.startDate, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            endDate: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.userData.endDate, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            user: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    AssignAnnouncementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageurl = this.userData.icon;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params.id;
            console.log("this.id=====>>>>", _this.id);
            _this.userListApi();
            // In a real app: dispatch action to load the details here.
        });
    };
    AssignAnnouncementComponent.prototype.update = function (data) {
        var _this = this;
        console.log(data);
        var arr = data.user.map(function (x) {
            var obj = _this.userList.filter(function (y) { return y._id == x._id; })[0];
            return { userName: obj.userName, status: obj.status, userId: obj._id };
        });
        var editdata = {
            "announcementId": this.id,
            "title": data.title,
            "startDate": data.startDate,
            "endDate": data.endDate,
            "description": data.Assign,
            "user": arr
            // "icon":"data:image/gif;base64,R0lGODlhZABkAIAAAP///wAA/yH5BAEAAAAALAAAAABkAGQAAAL/hI+py03xMQg+pi63P3wkPgbBx9Tl9oePxMcg+Ji63P7wkfgYBB9Tl9sfPhIfg+Bj6nL7w0fiYxB8TF1uf/hIfAyCj6nL7Q8fiY9B8DF1uf3hI/ExCD6mLrc/fCQ+BsHH1OX2h4/ExyD4mLrc/vCR+BgEH1OX2x8+Eh+D4GPqcvvDR+JjEHxMXW5/+Eh8DIKPqcvtDx+Jj0HwMXW5/eEj8TEIPqYutz98JD4GwcfU5faHj8THIPiYutz+8JH4GAQfU5fbHz4SH4PgY+py+8NH4mMQfExdbn/4SHwMgo+py+0PH4mPQfAxdbn94SPxMQg+pi63P3wkPgbBx9Tl9oeP/8THIPiYutz+8JH4GAQfU5fbHz4SH4PgY+py+8NH4mMQfExdbn/4SHwMgo+py+0PH4mPQfAxdbn94SPxMQg+pi63P3wkPgbBx9Tl9oePxMcg+Ji63P7wkfgYBB9Tl9sfPhIfg+Bj6nL7w0fiYxB8TF1uf/hIfAyCj6nL7Q8fiY9B8DF1uf3hI/ExCD6mLrc/fCQ+BsHH1OX2h4/ExyD4mLrc/vCR+BgEH1OX2x8+Eh+D4GPqMlN8TF1ufxjlpNVenPXm3X8wFEeyNE80VVe2dV84li8CPqYuN8XHIPiYutz+8JH4GAQfU5fbHz4SH4PgY+py+8NH4mMQfExdbn/4SP98DIKPqcvtDx+Jj0HwMXW5/eEj8TEIPqYutz98JD4GwcfU5faHj8THIPiYutz+8JH4GAQfU5fbHz4SH4PgY+py+8NH4mMQfExdbn/4SHwMgo+py+0PH4mPQfAxdbn94SPxMQg+pi63P3wkPgbBx9Tl9oePxMcg+Ji63P7wkfgYBB9Tl9sfPhIfg+Bj6nL7w0fiYxB8TF1uf/hIfAyCj6nL7Q8fiY9B8DF1uf3hI/ExCD6mLrc/fCQ+BsHH1OX2h4/ExyD4mLrc/vCR+BgEH1OX2x8+Eh+D4GPqcvvDR+JjEHxMXW5/+Eh8DIKPqcvtDx+Jj0HwMXW5/eEj8TEIPqaALrc/fCQ+BsHH1OX2h4/ExyD4mLrc/vCR+BgEH1OX2x8+Eh+D4GPqcvvDR+JjEHxMXW5/+Eh8DIKPqcvtDx+Jj0HwMXW5/eEj8TEIPqYutz98JD4GwcfU5faHj8THIPiYutz+8JH4GAQfU5fbHz4SH4PgY+py+8NH4mMQfExdZioAOw==",
            // "user":[
            //  {
            //      "status" : "ACTIVE",
            //      "userId" : "5ba4e806c4f7451a9f809234",
            //      "userName" : "arman"
            //  }]
        };
        console.log("data for editing", editdata);
        this.service.postApi('editAnnouncement', editdata, 1).subscribe(function (response) {
            // console.log("####",response);
            if (response['responseCode'] == 200) {
                // console.log(' add data successfully', response)
                // this.userData = response['data']['docs']
                //      this.event= this.userData;
                //console.log("dcfdsfdsfdf",JSON.stringify(  this.userData = response['user'][0]))
                //  this.Event= this.userData;
                //console.log("@@@@@>>>",JSON.stringify( this.logindata));
                // this.service.showSuccess(response['responseMessage'])
                _this.router.navigateByUrl('/announcement');
            }
            else {
                _this.service.showError(response['responseMessage']);
            }
        }, function (error) {
            console.log('error =>', error);
            _this.service.showError('Something Went Wrong');
        });
    };
    AssignAnnouncementComponent.prototype.onFileChanged = function (hello) {
        console.log("data==>>", hello);
    };
    // userListApi(val) {
    //   let delData = {
    //     "announcementId":val
    //     }
    //   this.service.postApi('getAnnouncementUserList', delData, 1).subscribe(response => {
    //     console.log("ggg",response);
    //     if (response.responseCode == 200) {
    //       console.log("respon===>>>",response)
    //       this.userList = response.data
    //       console.log("sea the Users1===>>>",this.userList[0].userName)
    //     }
    //   })
    // }
    AssignAnnouncementComponent.prototype.userListApi = function () {
        var _this = this;
        console.log("hello");
        this.service.postApi('getUserListNew', {}, 1).subscribe(function (response) {
            if (response.responseCode == 200) {
                _this.userList = response.data;
                console.log("see New the Users===>>>", _this.userList);
            }
        });
    };
    AssignAnnouncementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-announcement',
            template: __webpack_require__(/*! ./assign-announcement.component.html */ "./src/app/assign-announcement/assign-announcement.component.html"),
            styles: [__webpack_require__(/*! ./assign-announcement.component.scss */ "./src/app/assign-announcement/assign-announcement.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AssignAnnouncementComponent);
    return AssignAnnouncementComponent;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper \">\n        <app-sidebar></app-sidebar>\n        <div class=\"main-panel\">\n            <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-wrapper\">\n                    <a class=\"navbar-brand\" >Change Password</a>\n                </div>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n                    aria-label=\"Toggle navigation\">\n                    <span class=\"sr-only\">Toggle Nav</span>\n                    <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    <span class=\"navbar-toggler-icon icon-bar\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse justify-content-end\">\n                  <app-side-icon></app-side-icon>\n                        </div>\n               </div>\n        </nav>\n        <div class=\"content\">\n                <div class=\"container-fluid pt-4\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-tabs card-header-primary\">\n                            <h4 class=\"card-title font-weight-bold\">Change Password</h4>\n                        </div>\n                        <div class=\"card-body\">\n        <form class=\"form\" [formGroup]='passwordForm'>\n <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.controls['oldPassword'].dirty && passwordForm.controls['oldPassword'].invalid)}\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Old Password\" name='' formControlName='oldPassword' maxlength=\"16\"\n                    id='oldPassword' />\n\n                <div class=\"errMsg\" *ngIf=\"passwordForm.get('oldPassword').dirty && passwordForm.get('oldPassword').invalid\">\n                    <span [ngClass]=\"{error:passwordForm.get('oldPassword').hasError('required')}\" *ngIf=\"passwordForm.get('oldPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Please enter password.</span>\n                    <span [ngClass]=\"{error:passwordForm.get('oldPassword').hasError('minlength') && !passwordForm.get('oldPassword').hasError('required')}\"\n                        *ngIf=\"passwordForm.get('oldPassword').hasError('minlength') && !passwordForm.get('oldPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Password must be of minimum 8 characters.</span>\n                </div>\n            </div>\n                <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" formControlName='newPassword' maxlength=\"16\" id='newPassword'\n                />\n                <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').dirty && passwordForm.get('newPassword').invalid\">\n                    <span [ngClass]=\"{error:passwordForm.get('newPassword').hasError('required')}\" *ngIf=\"passwordForm.get('newPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Please enter password.</span>\n                    <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.controls['newPassword'].dirty && passwordForm.controls['newPassword'].invalid)}\">\n                        <span [ngClass]=\"{error:passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')}\"\n                            *ngIf=\"passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Password must be of minimum 8 characters.</span>\n                    </div>\n                </div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.get('newPassword').value != passwordForm.get('confirmPassword').value) && passwordForm.controls['confirmPassword'].dirty}\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName='confirmPassword' maxlength=\"16\"\n                    id='confirmPassword' />\n                <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').value && passwordForm.get('confirmPassword').value\">\n                    <span [ngClass]=\"{error:passwordForm.get('newPassword').value != passwordForm.get('confirmPassword').value }\" *ngIf='passwordForm.get(\"newPassword\").value != passwordForm.get(\"confirmPassword\").value ' style=\"color:red;font-size:14px;\">* New password and confirm password does not match. </span>\n                </div>\n            </div>\n<br>\n  <footer class=\"card__body\">\n\n        <button class=\"btn btn-primary full-width\"  [disabled]=\"!passwordForm.valid\" (click)=\" save(passwordForm.value)\">SAVE</button>\n\n    </footer>\n</form>\n    <br>\n</div>\n</div>\n</div>\n</div>\n<app-footer> </app-footer>\n</div>\n</div>\n<app-logout></app-logout>"

/***/ }),

/***/ "./src/app/change-password/change-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(route, _location, service) {
        this.route = route;
        this._location = _location;
        this.service = service;
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ChangePasswordComponent.prototype.save = function (val) {
        var _this = this;
        console.log(this.passwordForm.value);
        console.log(val);
        var changeData = {
            "oldPassword": val.oldPassword,
            "newPassword": val.newPassword,
            "confirmPassword": val.confirmPassword
        };
        console.log(changeData);
        this.service.postApi('changePassword', changeData, 1).subscribe(function (response) {
            console.log("!@%^&$#^&^&");
            _this.responseData = response;
            console.log("succ===>", JSON.stringify(_this.responseData));
            console.log("Login Data====>" + JSON.stringify(val));
            if (response['responseCode'] == 200) {
                _this.service.showSuccess(response['responseMessage']);
                //       localStorage.setItem('token',this.responseData.data.token)
                // localStorage.setItem('adminId',this.responseData.data._id) 
                console.log('change Password', response['responseMessage']);
                _this._location.back();
                // localStorage.token = response[`data`][`token`];
                // localStorage.adminId = response[`data`][`_id`];
            }
            else {
                console.log("else");
                _this.service.showError('Invalid  password.');
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
        // this._location.back();
    };
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"wrapper \">\n     \n     <app-sidebar></app-sidebar>\n   \n    <div class=\"main-panel\">\n      <!-- Navbar -->\n    \n      <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-wrapper\">\n            <a class=\"navbar-brand\">Dashboard</a>\n\n            <a class=\"navbar-brand\" style=\"margin-left:320%\">Welcome Admin</a>\n          </div>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n            <span class=\"sr-only\">Toggle Nav</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n          </button>\n          <div class=\"collapse navbar-collapse justify-content-end\">\n            <ul class=\"navbar-nav\">\n              <li class=\"nav-item dropdown\">\n               \n                <app-side-icon></app-side-icon>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n      <!-- End Navbar -->\n     \n\n      <div class=\"content\">\n          <div class=\"container-fluid pt-4\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-6 my-4\" (click)=\"announcement1()\">\n                <a href=\"javascript:void(0);\" (click)=\"userDetails()\" class=\"font-weight-bold\">\n              <div class=\"card card-stats h-100\">\n                <div class=\"card-header card-header-warning card-header-icon\" >\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">group_add</i>\n                  </div>\n                  <!-- <p class=\"card-category text-dark\">Users</p> -->\n                  <h3 class=\"card-title\">\n                    <small>Total : {{userData}}</small>\n                  </h3>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                      Users \n                  </div>\n                </div>\n              </div>\n              </a>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-6 my-4\" (click)=\"announcement2()\">\n                <a  href=\"javascript:void(0);\" (click)=\"announcement()\" class=\"font-weight-bold\">\n              <div class=\"card card-stats h-100\">\n                <div class=\"card-header card-header-success card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">announcement</i>\n                  </div>\n                  <!-- <p class=\"card-category\">Announcement</p> -->\n                  <h3 class=\"card-title\">\n                    <small>Total : {{userData1}}</small>\n                  </h3>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                  Announcements\n                  </div>\n                </div>\n              </div>\n              </a>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-6 my-4\">\n                <a href=\"javascript:void(0);\" (click)=\"setting()\" class=\"font-weight-bold\">\n              <div class=\"card card-stats h-100\">\n                <div class=\"card-header card-header-danger card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">settings</i>\n                  </div>\n                  <h3 class=\"card-title\">\n                    <small>Token Management</small>\n                  </h3>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                      Token Management\n                  </div>\n                </div>\n              </div>\n              </a>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-6 my-4\">\n                <a href=\"javascript:void(0);\" (click)=\"setting()\" class=\"font-weight-bold\">\n              <div class=\"card card-stats h-100\">\n                <div class=\"card-header card-header-danger card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">settings</i>\n                  </div>\n                  <h3 class=\"card-title\">\n                    <small>Settings</small>\n                  </h3>\n                </div>\n                <div class=\"card-footer\">\n                  <div class=\"stats\">\n                    Settings\n                  </div>\n                </div>\n              </div>\n              </a>\n            </div>\n             <div class=\"col-lg-6 col-md-6 col-sm-6 my-4\">\n                <a href=\"javascript:void(0);\" (click)=\"static()\" class=\"font-weight-bold\">\n              <div class=\"card card-stats h-100\">\n                <div class=\"card-header card-header-info card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">library_books</i>\n                  </div>\n                  <h3 class=\"card-title\">\n                    <small>Static Content</small>\n                  </h3>\n                </div>\n                <div class=\"card-footer\">\n                    <div class=\"stats\">\n                     Static Content\n                    </div>\n                  </div>\n              </div>\n              </a>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n      \n      <app-footer></app-footer>\n    </div>\n    \n  </div>\n\n <app-logout></app-logout>\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userDetails();
        this.announcement();
    };
    DashboardComponent.prototype.userDetails = function () {
        var _this = this;
        this.service.getApi("countUser", 1).subscribe(function (response) {
            _this.responseData = response;
            console.log('res');
            if (response['responseCode'] == 200) {
                console.log('data found successfully', response);
                _this.userData = response['data'];
                console.log("Data--> ", JSON.stringify(_this.userData));
                //this.router.navigateByUrl('manage-user');  
            }
            else {
                _this.service.showError(response['responseMessage']);
            }
        }, function (error) {
            console.log('error =>', error);
            _this.service.showError('Something Went Wrong');
        });
    };
    DashboardComponent.prototype.announcement = function () {
        var _this = this;
        this.service.getApi("countAnnouncement", 1).subscribe(function (response) {
            _this.responseData = response;
            console.log('res');
            if (response['responseCode'] == 200) {
                console.log('data found successfully', response);
                _this.userData1 = response['data'];
                console.log("Data--> ", JSON.stringify(_this.userData1));
                //  this.router.navigateByUrl('announcement');     
            }
            else {
                _this.service.showError(response['responseMessage']);
            }
        }, function (error) {
            console.log('error =>', error);
            _this.service.showError('Something Went Wrong');
        });
    };
    DashboardComponent.prototype.setting = function () {
        this.router.navigateByUrl('setting');
    };
    DashboardComponent.prototype.static = function () {
        this.router.navigateByUrl('manage-content');
    };
    DashboardComponent.prototype.announcement1 = function () {
        this.router.navigateByUrl('manage-user');
    };
    DashboardComponent.prototype.announcement2 = function () {
        this.router.navigateByUrl('announcement');
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { ToastrService } from 'ngx-toastr';
// import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   userdata={}
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//   constructor(private http:HttpClient,private toastr: ToastrService) { }
//  // baseUrl =  'http://172.16.6.37:9000/';
//  baseUrl = 'http://172.16.6.205:9000/admin/'
//   typeLogin: string;
//   postApi(url, data, isHeader) : Observable<any> {
//       console.log(`entered in post api `)
//       if(isHeader==0){
//           console.log(`header 0`)
//           var httpOptions;
//          httpOptions = {
//               headers: new HttpHeaders({ "Content-Type": "application/json"})
//             }
//           return this.http.post((this.baseUrl+ url),data,httpOptions)
//       }
//       else if(isHeader==1){
//         var httpOptions;
//         httpOptions = {
//           headers: new HttpHeaders({
//             "token": localStorage.token,
//             "_id": localStorage.adminId,
//             "Content-Type": "application/json"  })
//         }
//         return this.http.post((this.baseUrl + url), data, httpOptions)
//       }
//     }
//     getApi(url, isHeader) {
//       if(isHeader==0) {
//           var httpOptions;
//           httpOptions = {
//               headers: new HttpHeaders({ "Content-Type": "application/json"})
//             }
//           return this.http.get((this.baseUrl+ url),httpOptions)
//       }
//       else if(isHeader==1){
//           console.log('token',localStorage.token)
//           var httpOptions;
//           httpOptions = {
//               headers: new HttpHeaders({ "token": localStorage.token,"_id": localStorage.adminId,"Content-Type": "application/json" })
//             }
//             return this.http.get((this.baseUrl + url), httpOptions)
//       }
//     }
//     showSuccess(msg) {
//       this.toastr.success(msg);
//     }
//     showError(msg) {
//       this.toastr.error(msg)
// }
//   }



var DataService = /** @class */ (function () {
    function DataService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.userdata = {};
        this.nameClicked = { 'userName': '', 'email': '', 'mobileNumber': '' };
        // baseUrl =  'http://172.16.6.37:9000/';
        //  baseUrl = 'http://172.16.6.205:9000/admin/'
        this.baseUrl = 'http://162.222.32.20:1434/admin/';
    }
    DataService.prototype.postApi = function (url, data, isHeader) {
        console.log("entered in post api ");
        if (isHeader == 0) {
            console.log("header 0");
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" })
            };
            return this.http.post((this.baseUrl + url), data, httpOptions);
        }
        else if (isHeader == 1) {
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    "token": localStorage.token,
                    "_id": localStorage.adminId,
                    "Content-Type": "application/json"
                })
            };
            return this.http.post((this.baseUrl + url), data, httpOptions);
        }
    };
    DataService.prototype.getApi = function (url, isHeader) {
        if (isHeader == 0) {
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" })
            };
            return this.http.get((this.baseUrl + url), httpOptions);
        }
        else if (isHeader == 1) {
            console.log('token', localStorage.token);
            var httpOptions;
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "token": localStorage.token, "_id": localStorage.adminId, "Content-Type": "application/json" })
            };
            return this.http.get((this.baseUrl + url), httpOptions);
        }
    };
    DataService.prototype.showSuccess = function (msg) {
        this.toastr.success(msg);
    };
    DataService.prototype.showError = function (msg) {
        this.toastr.error(msg);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/edit-faq/edit-faq.component.html":
/*!**************************************************!*\
  !*** ./src/app/edit-faq/edit-faq.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n    <div class=\"wrapper \">\n           \n            <app-sidebar></app-sidebar>\n      \n        <div class=\"main-panel\">\n            <!-- Navbar -->\n            <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n                <div class=\"container-fluid\">\n                    <div class=\"navbar-wrapper\">\n                        <a class=\"navbar-brand\" href=\"javascript:void(0);\">FAQ</a>\n                    </div>\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n                        aria-label=\"Toggle navigation\">\n                        <span class=\"sr-only\">Toggle Nav</span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse justify-content-end\">\n                     \n                         \n                               \n                                <app-side-icon></app-side-icon>\n                       \n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar -->\n            <div class=\"content\">\n                <div class=\"container-fluid pt-4\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-tabs card-header-primary\">\n                            <h4 class=\"card-title font-weight-bold\">Static Content Management</h4>\n                            <p class=\"card-category\">Edit FAQ</p>\n                        </div>\n                        <div class=\"card-body\">\n                                <form class=\"form\" [formGroup]='passwordForm'>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <div class=\"form-group bmd-form-group\">\n                                                    \n                                                <input type=\"text\" class=\"form-control\" formControlName='que' placeholder='Enter Question '>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <div class=\"form-group bmd-form-group\">\n                                                <!-- <label class=\"bmd-label-floating\"> Write you answer</label> -->\n                                                <textarea class=\"form-control\" rows=\"5\" formControlName='ans' placeholder='Write you answer'></textarea>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                    <div class=\"col-md-12 text-md-right\">\n                                        <div class=\"form-group bmd-form-group d-inline-flex\">\n                                            <button type=\"submit\" class=\"btn btn-primary \" (click)=\"save(passwordForm.value)\" [disabled]=\"passwordForm.invalid \">SAVE </button>\n                                        </div>\n                                 \n                                </div>\n\n                                <div class=\"clearfix\"></div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <app-footer></app-footer>\n        </div>\n    </div>\n    <app-logout></app-logout>\n \n\n\n\n"

/***/ }),

/***/ "./src/app/edit-faq/edit-faq.component.scss":
/*!**************************************************!*\
  !*** ./src/app/edit-faq/edit-faq.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-faq/edit-faq.component.ts":
/*!************************************************!*\
  !*** ./src/app/edit-faq/edit-faq.component.ts ***!
  \************************************************/
/*! exports provided: EditFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFaqComponent", function() { return EditFaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditFaqComponent = /** @class */ (function () {
    function EditFaqComponent(formBuilder, router, service, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.route = route;
        this.faqId = '';
        this.passwordForm = this.formBuilder.group({
            que: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ans: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    EditFaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        //"faq":[{"status":"ACTIVE","_id":"5baf61a32a8264256d3599a7","Ques":"sd","Ans":"sdsdsdsd"},
        this.route.params.subscribe(function (params) {
            // console.log('params => '+ JSON.stringify(params))
            _this.faqId = params['type'];
            console.log('params => ', _this.faqId);
            _this.get();
        });
    };
    EditFaqComponent.prototype.save = function (val) {
        var _this = this;
        console.log("value=======>", val);
        var postData = {
            "faqId": this.faqId,
            "Ques": this.passwordForm.value.que,
            "Ans": this.passwordForm.value.ans
        };
        console.log("DATA SAVE=====>", postData);
        this.service.postApi('n1/editFaq', postData, 1).subscribe(function (response) {
            console.log("**********************", JSON.stringify(response));
            if (response['responseCode'] == 200) {
                console.log("Save content data - " + response);
                _this.service.showSuccess(response['responseMessage']);
                _this.router.navigateByUrl('Faq1/');
            }
            else {
                _this.service.showError(response['responseMessage']);
            }
        }, function (error) {
            _this.service.showError('Something Went Wrong');
        });
    };
    EditFaqComponent.prototype.get = function () {
        var _this = this;
        this.service.getApi('n1/getFaq/' + this.faqId, 1).subscribe(function (response) {
            console.log("**********************", JSON.stringify(response));
            if (response['responseCode'] == 200) {
                console.log("Save content data - " + response);
                _this.passwordForm.controls['que'].setValue(response["data"].faq[0].Ques);
                _this.passwordForm.controls['ans'].setValue(response["data"].faq[0].Ans);
            }
            else {
                _this.service.showError(response['responseMessage']);
            }
        }, function (error) {
            _this.service.showError('Something Went Wrong');
        });
    };
    EditFaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-faq',
            template: __webpack_require__(/*! ./edit-faq.component.html */ "./src/app/edit-faq/edit-faq.component.html"),
            styles: [__webpack_require__(/*! ./edit-faq.component.scss */ "./src/app/edit-faq/edit-faq.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditFaqComponent);
    return EditFaqComponent;
}());



/***/ }),

/***/ "./src/app/edit-fee/edit-fee.component.html":
/*!**************************************************!*\
  !*** ./src/app/edit-fee/edit-fee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n    <div class=\"wrapper \">\n           \n            <app-sidebar></app-sidebar>\n      \n        <div class=\"main-panel\">\n            <!-- Navbar -->\n            <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n                <div class=\"container-fluid\">\n                    <div class=\"navbar-wrapper\">\n                        <a class=\"navbar-brand\" href=\"javascript:void(0);\">Setting</a>\n                    </div>\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n                        aria-label=\"Toggle navigation\">\n                        <span class=\"sr-only\">Toggle Nav</span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse justify-content-end\">\n                        <ul class=\"navbar-nav\">\n                            <li class=\"nav-item dropdown\">\n                                <a class=\"nav-link\" href=\"javascript:void(0);\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                    <i class=\"material-icons\">person</i>\n                                    <p class=\"d-lg-none d-md-block\">\n                                        Some Actions\n                                    </p>\n                                </a>\n                                <app-side-icon></app-side-icon>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar -->\n            <div class=\"content\">\n                <div class=\"container-fluid pt-4\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-tabs card-header-primary\">\n                            <h4 class=\"card-title font-weight-bold\">Setting</h4>\n                        </div>\n                        <div class=\"card-body\">\n                            <form>\n                                <div class=\"w-100\">\n                                    <h5 class=\"text-dark font-weight-bold\">Commissions:</h5>\n                                </div>\n                                <div class=\"row align-items-baseline\">\n                                    <div class=\"col-md-5\">\n                                        <div class=\"form-group bmd-form-group\">\n                                            <label class=\"bmd-label-floating\">Withdraw/Coin</label>\n                                            <input type=\"text\" class=\"form-control\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                        <div class=\"form-group bmd-form-group d-inline-flex\">\n                                            <button type=\"submit\" class=\"btn btn-primary \">Save </button>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"clearfix\"></div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <app-footer></app-footer>\n        </div>\n    </div>\n    <app-logout></app-logout>\n \n\n\n"

/***/ }),

/***/ "./src/app/edit-fee/edit-fee.component.scss":
/*!**************************************************!*\
  !*** ./src/app/edit-fee/edit-fee.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-fee/edit-fee.component.ts":
/*!************************************************!*\
  !*** ./src/app/edit-fee/edit-fee.component.ts ***!
  \************************************************/
/*! exports provided: EditFeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFeeComponent", function() { return EditFeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditFeeComponent = /** @class */ (function () {
    function EditFeeComponent() {
    }
    EditFeeComponent.prototype.ngOnInit = function () {
    };
    EditFeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-fee',
            template: __webpack_require__(/*! ./edit-fee.component.html */ "./src/app/edit-fee/edit-fee.component.html"),
            styles: [__webpack_require__(/*! ./edit-fee.component.scss */ "./src/app/edit-fee/edit-fee.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditFeeComponent);
    return EditFeeComponent;
}());



/***/ }),

/***/ "./src/app/edit-my-profile/edit-my-profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/edit-my-profile/edit-my-profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n  <div class=\"wrapper \">\n      \n      <app-sidebar></app-sidebar>\n\n    \n    <div class=\"main-panel\">\n    \n      <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-wrapper\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\">Edit Profile</a>\n          </div>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n            <span class=\"sr-only\">Toggle Nav</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n          </button>\n          <div class=\"collapse navbar-collapse justify-content-end\">\n         \n           \n               \n                <app-side-icon></app-side-icon>\n              \n            \n          </div>\n        </div>\n      </nav>   \n      <div class=\"content\">\n            <div class=\"container-fluid pt-4\">\n                    <div class=\"card\">\n\n                            <div class=\"card-header card-header-tabs card-header-primary\">\n                                    <h4 class=\"card-title font-weight-bold\">Edit Profile</h4>\n\n                                </div>\n                                <div class=\"card-body\">\n                                        <br>\n                    <form [formGroup]=\"formgroup\" > \n                <div class=\"form-group row align-items-baseline\">\n                    \n                  <label class=\"col-md-5\">Name :</label>\n                    <div class=\"col-md-7\">\n                        \n                    \n                              <input type=\"text\" formControlName=\"userName\" class=\"form-cotrol\"  placeholder=\"name\">\n                              <p *ngIf=\"formgroup.get('userName').hasError('required') && formgroup.get('userName').dirty\" style=\"color:red\">*Name is required</p>\n                              <p *ngIf=\"formgroup.controls['userName'].hasError('pattern') && formgroup.controls['userName'].dirty\" style=\"color:red\">*Please enter valid name.</p>\n                              <!-- *ngIf=\"(userForm.get('userName').hasError('required')) && userForm.get('userName').dirty\" -->\n                              \n                             <!-- <br> <button  class=\"btn btn-red btn-black\" (click)=\"userdata(userForm.value)\"> Change Name</button> -->\n                        <!-- </form> -->\n                    </div>\n<br><br>\n                 \n\n                    <label class=\"col-md-5\">Mobile Number:</label>\n                    <div class=\"col-md-7\">\n                        \n                      <!-- <form [formGroup]=\"userForm\" >  -->\n                              <input type=\"text\" formControlName=\"mobileNumber\" class=\"form-cotrol\"  placeholder=\"Mobile number\" maxlength=\"10\">\n                              <p *ngIf=\"formgroup.get('mobileNumber').hasError('required') && formgroup.get('mobileNumber').dirty\" style=\"color:red\">*Mobile number is required</p>\n                              <p *ngIf=\"formgroup.controls['mobileNumber'].hasError('pattern') && formgroup.controls['mobileNumber'].dirty\" style=\"color:red\">*Please enter valid Mobile number.</p>\n\n                              <p *ngIf=\"formgroup.controls['mobileNumber'].hasError('maxlength') && formgroup.controls['mobileNumber'].dirty\" style=\"color:red\">*Mobile number should be 10 digit.</p>\n\n                             <!-- <br> <button  class=\"btn btn-red btn-black\" (click)=\"userdata(userForm.value)\"> Change Name</button> -->\n                        <!-- </form> -->\n                    </div>\n                </div>\n              </form>\n                <br> \n                <div  class=\"text-left mt40\">\n                  \n                    <button  (click)=\"back()\" class=\"btn btn-primary full-width\">Back</button>\n                    <button  (click)=\"update(formgroup.value)\" class=\"btn btn-primary full-width\">update</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n      \n              </div>\n            </div>\n            \n          \n\n      <app-footer> </app-footer>\n   \n\n\n  <app-logout></app-logout>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/edit-my-profile/edit-my-profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/edit-my-profile/edit-my-profile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-my-profile/edit-my-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/edit-my-profile/edit-my-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: EditMyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMyProfileComponent", function() { return EditMyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditMyProfileComponent = /** @class */ (function () {
    function EditMyProfileComponent(formBuilder, router, service, activateRote) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.activateRote = activateRote;
        this.params = '';
        this.formgroup = formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Za-z\s]+$/i)])],
            mobileNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/(7|8|9)\d{9}/)])]
        });
    }
    EditMyProfileComponent.prototype.ngOnInit = function () {
        // this.activateRote.paramMap.subscribe(prams => {
        //   this.adminId = prams.get('adminId')
        // })
        this.onload();
    };
    EditMyProfileComponent.prototype.back = function () {
        this.router.navigate(['/my_profile']);
    };
    EditMyProfileComponent.prototype.onload = function () {
        var _this = this;
        this.service.getApi('getProfile', 1).subscribe(function (response) {
            if (response.responseCode == 200) {
                _this.formgroup.controls['userName'].setValue(response['data'].userName);
                _this.formgroup.controls['mobileNumber'].setValue(response['data'].mobileNumber);
                _this.adminId = response['data']._id;
                // console.log("id===>>>>",this.adminId)
            }
            else {
                _this.service.showError(response['responseMessage']);
            }
        }, function (error) {
            _this.service.showError('Something Went Wrong=======>>.Api Error');
        });
    };
    EditMyProfileComponent.prototype.update = function () {
        // if (this.userForm.invalid) {
        //   return
        // }
        // console.log("data",formValue)
        var _this = this;
        var delData = {
            "userName": this.formgroup.value.userName,
            "mobileNumber": this.formgroup.value.mobileNumber,
            "adminId": this.adminId
        };
        console.log('change status _id>>>>>>', delData);
        this.service.postApi('updateProfile', delData, 1).subscribe(function (response) {
            console.log("Login Data====>" + JSON.stringify(response));
            if (response['responseCode'] == 200) {
                // console.log("update", response)
                _this.service.showSuccess(response['responseMessage']);
                _this.router.navigateByUrl('manage-user');
                // alert("Success")
            }
        }, function (errr) {
            console.log("forgot api error============>>>>>>>>.");
        });
    };
    EditMyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-my-profile',
            template: __webpack_require__(/*! ./edit-my-profile.component.html */ "./src/app/edit-my-profile/edit-my-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-my-profile.component.scss */ "./src/app/edit-my-profile/edit-my-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditMyProfileComponent);
    return EditMyProfileComponent;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n  <div class=\"wrapper \">\n      \n      <app-sidebar></app-sidebar>\n\n    \n    <div class=\"main-panel\">\n      <!-- Navbar -->\n      <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-wrapper\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\">Edit User</a>\n          </div>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n            <span class=\"sr-only\">Toggle Nav</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n          </button>\n          <div class=\"collapse navbar-collapse justify-content-end\">\n         \n           \n               \n                <app-side-icon></app-side-icon>\n              \n            \n          </div>\n        </div>\n      </nav>\n      <!-- End Navbar -->\n      \n      <div class=\"content\">\n            <div class=\"container-fluid pt-4\">\n                    <div class=\"card\">\n\n                            <div class=\"card-header card-header-tabs card-header-primary\">\n                                    <h4 class=\"card-title font-weight-bold\">Edit User</h4>\n\n                                </div>\n                                <div class=\"card-body\">\n\n\n         \n                    <br>\n              \n                <div class=\"form-group row align-items-baseline\">\n                    \n                  <label class=\"col-md-5\">Name :</label>\n                    <div class=\"col-md-7\">\n                        \n                      <form [formGroup]=\"userForm\" > \n                              <input type=\"text\" formControlName=\"userName\" class=\"form-cotrol\"  placeholder=\"name\">\n                              <div class=\"denger\" style=\"color:red\"  *ngIf=\"(userForm.get('userName').hasError('required')) && userForm.get('userName').dirty\" >\n                            *name is required\n                            </div>                            \n                             <div class=\"denger\" style=\"color:red\"  *ngIf=\"(userForm.get('userName').hasError('pattern')) && userForm.get('userName').dirty && !((userForm.get('userName').hasError('required')))\" >\n                                *Please inter correct name\n                              </div>\n                              <!-- <p *ngIf=\"formgroup.controls['userName'].hasError('pattern') && formgroup.controls['userName'].dirty\" style=\"color:red\">*Please enter valid name.</p> -->\n\n                              \n                             <br> <button  class=\"btn btn-primary full-width\" (click)=\"userdata(userForm.value)\"> Update Name</button>\n                        </form>\n                    </div>\n                </div>\n              \n                <br> \n                <div  class=\"text-left mt40\">\n                  \n                    <button  (click)=\"back()\" class=\"btn btn-primary full-width\">Back</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n      \n              </div>\n            </div>\n            \n          \n\n      <app-footer> </app-footer>\n   \n\n\n  <app-logout></app-logout>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.scss":
/*!****************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.ts ***!
  \**************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(formBuilder, route, service) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        console.log(localStorage.getItem("_id"));
    }
    EditUserComponent.prototype.ngOnInit = function () {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Za-z\s]+$/i)])
            // userName:['',Validators.compose([Validators.required,Validators.pattern(/^[A-Za-z\s]+$/i)])],
        });
    };
    EditUserComponent.prototype.userdata = function (formValue) {
        var _this = this;
        if (this.userForm.invalid) {
            return;
        }
        console.log(formValue);
        var delData = {
            "userId": this.service.edit_id,
            "userName": formValue.userName
        };
        // console.log('change status _id>>>>>>', delData)
        this.service.postApi('editUser', delData, 1).subscribe(function (response) {
            // console.log(`Login Data====>${JSON.stringify(response)}`);
            if (response['responseCode'] == 200) {
                _this.service.showSuccess(response['responseMessage']);
                // this.route.navigateByUrl('manage-user');
                // alert("Success")
            }
        }, function (errr) {
            console.log("forgot api error============>>>>>>>>.");
        });
    };
    EditUserComponent.prototype.back = function () {
        this.route.navigateByUrl('manage-user');
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/edit-user/edit-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"wrapper \">\n           \n            <app-sidebar></app-sidebar>\n      \n        <div class=\"main-panel\">\n            <!-- Navbar -->\n            <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n                <div class=\"container-fluid\">\n                    <div class=\"navbar-wrapper\">\n                        <a class=\"navbar-brand\" href=\"javascript:void(0);\">FAQ</a>\n                    </div>\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n                        aria-label=\"Toggle navigation\">\n                        <span class=\"sr-only\">Toggle Nav</span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse justify-content-end\">\n                        <ul class=\"navbar-nav\">\n                            <li class=\"nav-item dropdown\">\n                                <a class=\"nav-link\" href=\"javascript:void(0);\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                    <i class=\"material-icons\">person</i>\n                                    <p class=\"d-lg-none d-md-block\">\n                                        Some Actions\n                                    </p>\n                                </a>\n                                <app-side-icon></app-side-icon>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar -->\n            <div class=\"content\">\n                <div class=\"container-fluid pt-4\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-tabs card-header-primary\">\n                            <h4 class=\"card-title font-weight-bold\">Static Content Management</h4>\n                            <p class=\"card-category\">FAQ</p>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n\n                                <div class=\"panel panel-default mb-2\">\n                                    <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                                        <div class=\"d-flex justify-content-between align-items-baseline px-2\">\n                                            <strong>Q.1</strong>\n                                            <h4 class=\"panel-title flex-fill m-0\">\n                                                <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                                    <i class=\"more-less fa fa-plus\"></i>\n                                                    <span>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</span>\n                                                </a>\n                                            </h4>\n                                            <div class=\"button_check d-inline-flex align-items-center\">\n                                                <div class=\"form-check m-0\">\n                                                    <label class=\"form-check-label mb-3 pr-1\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                        <span class=\"form-check-sign\">\n                                                        <span class=\"check\"></span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                                <button class=\"btn btn-no-style text-dark\"><i class=\"fa fa-trash text-danger\"></i></button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div id=\"collapseOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                                        <div class=\"panel-body\">\n                                            <h5 class=\"my-0 font-weight-bold\">Answer</h5>\n                                            <div>Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.</div>\n                                        </div>\n                                    </div>\n                                </div>\n                        \n                                <div class=\"panel panel-default\">\n                                    <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                                        <div class=\"d-flex justify-content-between align-items-baseline px-2\">\n                                            <strong>Q.2</strong>\n                                            <h4 class=\"panel-title flex-fill m-0\">\n                                                <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n                                                    <i class=\"more-less fa fa-plus\"></i>\n                                                    <span>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</span>\n                                                </a>\n                                            </h4>\n                                            <div class=\"button_check d-inline-flex align-items-center\">\n                                                <div class=\"form-check m-0\">\n                                                    <label class=\"form-check-label mb-3 pr-1\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                        <span class=\"form-check-sign\">\n                                                        <span class=\"check\"></span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                                <button class=\"btn btn-no-style text-dark\"><i class=\"fa fa-trash text-danger\"></i></button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                                        <div class=\"panel-body\">\n                                            <h5 class=\"my-0 font-weight-bold\">Answer</h5>\n                                            <div>Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.</div>\n                                        </div>\n                                    </div>\n                                </div>\n                        \n                                <div class=\"panel panel-default\">\n                                    <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                                        <div class=\"d-flex justify-content-between align-items-baseline px-2\">\n                                            <strong>Q.3</strong>\n                                            <h4 class=\"panel-title flex-fill m-0\">\n                                                <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapseThree\">\n                                                    <i class=\"more-less fa fa-plus\"></i>\n                                                    <span>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</span>\n                                                </a>\n                                            </h4>\n                                            <div class=\"button_check d-inline-flex align-items-center\">\n                                                <div class=\"form-check m-0\">\n                                                    <label class=\"form-check-label mb-3 pr-1\">\n                                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                        <span class=\"form-check-sign\">\n                                                        <span class=\"check\"></span>\n                                                        </span>\n                                                    </label>\n                                                </div>\n                                                <button class=\"btn btn-no-style text-dark\"><i class=\"fa fa-trash text-danger\"></i></button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                                        <div class=\"panel-body\">\n                                            <h5 class=\"my-0 font-weight-bold\">Answer</h5>\n                                            <div>Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.</div>\n                                        </div>\n                                    </div>\n                                </div>\n                        \n                            </div><!-- panel-group -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <footer class=\"footer\">\n                <div class=\"container-fluid\">\n                    <div class=\"copyright text-left\">\n                        Copyright &copy;\n                        <script>\n                            document.write(new Date().getFullYear())\n                        </script>, Anzen\n                    </div>\n\n                </div>\n            </footer>\n        </div>\n    </div>\n    <app-logout></app-logout>\n    <!--   Core JS Files   -->\n    <script src=\"../assets/js/core/jquery.min.js\" type=\"text/javascript\"></script>\n    <script src=\"../assets/js/core/popper.min.js\" type=\"text/javascript\"></script>\n    <script src=\"../assets/js/core/bootstrap-material-design.min.js\" type=\"text/javascript\"></script>\n    <script src=\"../assets/js/plugins/perfect-scrollbar.jquery.min.js\"></script>\n    <!-- <script src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE\"></script> -->\n    <!-- <script src=\"../assets/js/plugins/chartist.min.js\"></script> -->\n    <script src=\"../assets/js/plugins/bootstrap-notify.js\"></script>\n    <script src=\"../assets/js/material-dashboard.min.js?v=2.1.0\" type=\"text/javascript\"></script>\n    <script src=\"../assets/demo/demo.js\"></script>\n    <script>\n    function toggleIcon(e) {\n    $(e.target)\n        .prev('.panel-heading')\n        .find(\".more-less\")\n        .toggleClass('fa-plus fa-minus');\n    }\n    $('.panel-group').on('hidden.bs.collapse', toggleIcon);\n    $('.panel-group').on('shown.bs.collapse', toggleIcon);\n  </script>\n\n\n"

/***/ }),

/***/ "./src/app/faq/faq.component.scss":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// import { Component, OnInit } from '@angular/core';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Component({
//   selector: 'app-faq',
//   templateUrl: './faq.component.html',
//   styleUrls: ['./faq.component.scss']
// })
// export class FaqComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/faq1/faq1.component.html":
/*!******************************************!*\
  !*** ./src/app/faq1/faq1.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"\">\n    <div class=\"wrapper\">\n            <app-sidebar></app-sidebar>\n        <div class=\"main-panel\">\n            <!-- Navbar -->\n            <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n                <div class=\"container-fluid\">\n                    <div class=\"navbar-wrapper\">\n                        <a class=\"navbar-brand\" href=\"javascript:void(0);\">FAQ</a>\n                    </div>\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n                        aria-label=\"Toggle navigation\">\n                        <span class=\"sr-only\">Toggle Nav</span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse justify-content-end\">\n                      \n                        <app-side-icon></app-side-icon>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar -->\n            <div class=\"content\">\n                <div class=\"container-fluid pt-4\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-tabs card-header-primary\">\n                            <h4 class=\"card-title font-weight-bold\">Static Content Management</h4>\n                            <div class=\"card-header card-header-tabs\">\n                                <button type=\"submit\" (click)=\"add()\"  class=\"btn btn-primary pull-right\" style=\"background-color:#41afd8\" >Add FAQ</button>\n                           \n                        </div>\n                            <p class=\"card-category\"></p>\n                        </div>\n                      \n                                \n                        <div class=\"card-body\">\n                            \n                            <div class=\"add-faq-block\">\n                                <div>\n                                 \n                                        <div  *ngFor=\"let item of customDataList.dataList | paginate: { itemsPerPage:customDataList.limit , currentPage: customDataList.page, totalItems: customDataList.total }; let i = index\" >\n                                            <div style=\"padding:10px; border-radius:15px; \n                                            padding: 20px; \n                                            width: 100%;\n                                            background-color: #DDDDDD;\n                                            \">\n                                            <!--for loop-->\n                                            \n                                            <div class=\"row\">\n                                           \n                                            <td *ngIf=\"p == 1\" class=\"col-sm-2 form-label\" style=\"color: black;\n                                            -webkit-text-stroke-width: 0.3px;\">Ques{{i + 1}}</td>\n                                            <td *ngIf=\"p > 1\" class=\"col-sm-2 form-label\" style=\"color: black;\n                                                -webkit-text-stroke-width: 0.3px;\">Ques{{i + 1 + 4 * (p-1)}}</td>\n                                            <!-- <label class=\"col-sm-2 form-label\" style=\"color: black;\n                                            -webkit-text-stroke-width: 0.3px;\"> {{i +1}} :</label> -->\n                                            <div class=\"question-block col-sm-9\">\n                                                    {{item.Ques}}\n                                            </div>\n                                            <div class=\"col-sm-1\">\n                                                <div class=\"row\">\n                                                    <a (click)=\"edit(item._id)\" class=\"col-sm-6\" href=\"javascript:;\"><i class=\"fa fa-edit\" style=\"margin-right:10px; font-size:24px\"></i></a>\n                                                    \n                                                    <a class=\"col-sm-6 text-danger\">\n                                                        <i class=\"fa fa-trash\" data-target=\"#deletePopup\"  data-toggle=\"modal\" (click)='open(item._id)' style=\"margin-right:10px;font-size:24px\">\n                                                        </i>\n                                                    </a>\n                                                </div>\n                                            </div>\n                                               \n                                            </div>\n                                           \n                                          \n                                            <!----><br/>\n                                            <div class=\"row\">\n                                                    <td *ngIf=\"p == 1\" class=\"col-sm-2 form-label\" style=\"color: black;\n                                                    -webkit-text-stroke-width: 0.3px;\">Ans{{i + 1}}</td>\n                                                    <td *ngIf=\"p > 1\" class=\"col-sm-2 form-label\" style=\"color: black;\n                                                        -webkit-text-stroke-width: 0.3px;\">Ans{{i + 1 + 4 * (p-1)}}</td>\n                                                <!-- <label class=\"col-sm-2\" style=\"color: black;\n                                                -webkit-text-stroke-width: 0.3px;\">Ans {{i + 1}} :</label>\n                                                <td *ngIf=\"p > 1\">{{i + 1 + 4 * (p-1)}}</td> -->\n                                                <div class=\"col-sm-9 question-block\">\n                                                    {{item.Ans}}\n                                                </div>\n                                                <div class=\"col-sm-1\"></div>\n                                            </div>\n                                            <br/>\n                                            <br/>\n                                        </div>\n                                        <br/><br/><br/>\n                                        </div>\n                                        \n                                       \n                                        <p *ngIf='!customDataList.dataList?.length'>No  questions  is available</p>\n                                        <div *ngIf='customDataList.dataList?.length'>\n                                        <pagination-controls (pageChange)=\"changePage($event)\"></pagination-controls>\n                                    </div>     \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <app-footer>\n                \n                         \n            </app-footer>\n        </div>\n    </div>\n\n    <div class=\"modal fade global-modal reset-modal\" id=\"deletePopup\">\n            <div class=\"modal-dialog max-WT-500\">\n                <div class=\"modal-content\">\n                    <div class=\"inner_border_area\">\n                        <!-- Modal body -->\n                        <div class=\"modal-body  text-center\">\n                            <div class=\"row align-items-center modal_flax_height\">\n                                <div class=\"col\">\n                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n                                    <div class=\"box-title mb40 d-inline-block\">\n                                        <!-- <i class=\"fas fa-power-off off-icon\"></i> -->\n                                        <p class=\"mt40\">Are you sure you want to Delete?</p>\n                                      \n                                    </div>\n                                    <div class=\"text-center\">\n                                        <a href=\"javascript:;\" class=\"btn btn-blue btn-noYes\"(click)=\"delete()\">YES</a>\n                                        <button type=\"button\" class=\"btn btn-red btn-noYes\" data-dismiss=\"modal\">CANCEL</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n          </div>\n    <!-- logout modal -->\n    <app-logout></app-logout>\n\n"

/***/ }),

/***/ "./src/app/faq1/faq1.component.scss":
/*!******************************************!*\
  !*** ./src/app/faq1/faq1.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faq1/faq1.component.ts":
/*!****************************************!*\
  !*** ./src/app/faq1/faq1.component.ts ***!
  \****************************************/
/*! exports provided: Faq1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faq1Component", function() { return Faq1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../data.service';
// import { FormGroup } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// declare var $: any
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Component({
//   selector: 'app-faq1',
//   templateUrl: './faq1.component.html',
//   styleUrls: ['./faq1.component.scss']
// })
// export class Faq1Component implements OnInit {
//   dashboardForm: FormGroup;
//   event: any = [];
//   userData: any = [];
//   pageNo: any;
//   responseData: any;
//   customDataList: any = [];
//   faqlist =
//     {
//       "pageNumber": 1
//     }
//   id: any;
//   constructor(private router: Router, public service: DataService, private formBuilder: FormBuilder) {
//     this.dashboardForm = this.formBuilder.group({
//     });
//     //Code Added By author
//     this.service.postApi('n1/getAllFaq', this.faqlist, 1).subscribe(response => {
//       console.log("#############", response)
//       this.responseData = response;
//       // console.log("author Data",this.responseData)
//       this.customDataList = this.responseData['data']['dataList'];
//       //this.customDataList = response['data'].
//       console.log("author Data", this.customDataList)
//     });
//     //Code Added By author
//   }
//   ngOnInit() {
//   }
//   open(id) {
//     this.id = id
//     console.log("gauri --->> ", id)
//     console.log('CLICKED!!!')
//   }
//   delete() {
//     console.log("ID--> ");
//     // $("").modal('show');
//     console.log(this.id)
//     let deleteQuestion =
//     {
//       "_id": this.id
//     }
//     this.service.postApi('n1/deleteFaq', deleteQuestion, 1).subscribe(response => {
//       console.log("#############", response['responseCode']);
//       $("#deletePopup").modal('hide')
//       this.service.postApi('n1/getAllFaq', this.faqlist, 1).subscribe(response => {
//         console.log("#############", response)
//         this.responseData = response;
//         // console.log("author Data",this.responseData)
//         this.customDataList = this.responseData['data']['dataList'];
//         //this.customDataList = response['data'].
//         console.log("author Data", this.customDataList)
//       });
//     });
//   }
//   add() {
//     this.router.navigateByUrl('/edit_faq');
//   }
//   /*   getAllCustomer(val){
//       static(){
//       this.router.navigateByUrl('manage-content');
//     }
//       this.service.getApi(`n1/getStaticContent`,1).subscribe(response => {
//         this.responseData = response;
//         console.log('res')
//         if (response['responseCode'] == 200) {
//           console.log('  data found successfully',JSON.stringify(response))
//               this.userData = response[`data`]
//                this.event= this.userData;
//                console.log("@@@@@>>>",JSON.stringify( this.userData));
//               //  localStorage.setItem('userId',this.responseData.data.docs[0]._id) 
//               //  console.log("ID",JSON.stringify(this.responseData.data.docs[0]._id))
//           // for(let i=0; i<this.user.length; i++){
//           //   if(this.user[i].status == 'ACTIVE'){
//           //     this.modified[i].status = 'ACTIVE'
//           //   }
//           //   else if(this.user[i].status == 'BLOCK'){
//           //     this.modified[i].status = 'BLOCK'
//           //   }
//           // }
//           // console.log('result of all customer--->', JSON.stringify(this.user))
//           // this.paginationData = response['paginationData']
//           // this.srNo = (this.pageNo - 1) * this.paginationData.limit
//           this.service.showSuccess(response['responseMessage'])
//           // localStorage.userId = response[`data`][`docs`][0][`_id`];
//         }
//         else {
//           this.service.showError(response['responseMessage'])
//         }
//       }, error => {
//         console.log('error =>', error)
//         this.service.showError('Something Went Wrong')
//       })
//     } */
// }




var Faq1Component = /** @class */ (function () {
    // customDataList: any = [];
    function Faq1Component(router, service, formBuilder) {
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.p = 1;
        this.customDataList = { dataList: [] };
        this.event = [];
        this.userData = [];
        this.dashboardForm = this.formBuilder.group({});
    }
    Faq1Component.prototype.ngOnInit = function () {
        this.getFAQ();
    };
    Faq1Component.prototype.getFAQ = function () {
        var _this = this;
        var faqlist = {
            "pageNumber": this.p
        };
        this.service.postApi('n1/getAllFaq', faqlist, 1).subscribe(function (response) {
            console.log("#############", response);
            _this.responseData = response;
            // console.log("author Data",this.responseData)
            _this.customDataList = _this.responseData['data'];
            //this.customDataList = response['data'].
            console.log("author Data", _this.customDataList);
        });
        //Code Added By author
    };
    Faq1Component.prototype.open = function (id) {
        this.id = id;
        console.log("gauri --->> ", id);
        console.log('CLICKED!!!');
        this.router.navigateByUrl('edit_faq');
    };
    Faq1Component.prototype.delete = function () {
        var _this = this;
        console.log("ID--> ");
        // $("").modal('show');
        console.log(this.id);
        var deleteQuestion = {
            "_id": this.id
        };
        this.service.postApi('n1/deleteFaq', deleteQuestion, 1).subscribe(function (response) {
            console.log("#############", response['responseCode']);
            $("#deletePopup").modal('hide');
            _this.getFAQ();
        });
    };
    Faq1Component.prototype.faqlist = function (arg0, faqlist, arg2) {
        throw new Error("Method not implemented.");
    };
    Faq1Component.prototype.changePage = function (page) {
        //console.log("page-->", page);
        this.p = page;
        this.getFAQ();
    };
    Faq1Component.prototype.add = function () {
        this.router.navigateByUrl('/add_faq');
    };
    Faq1Component.prototype.edit = function (id) {
        this.router.navigateByUrl('/edit_faq/' + id);
    };
    Faq1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq1',
            template: __webpack_require__(/*! ./faq1.component.html */ "./src/app/faq1/faq1.component.html"),
            styles: [__webpack_require__(/*! ./faq1.component.scss */ "./src/app/faq1/faq1.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], Faq1Component);
    return Faq1Component;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container-fluid\">\n      <div class=\"copyright text-left\">\n          Copyright &copy;\n          <script>\n              document.write(new Date().getFullYear())\n          </script> 2018 Anzen\n      </div>\n\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- \n    <div class=\"card_form\">\n        <header class=\"card__thumb\">\n            <a href=\"javascript:void(0);\"><img src=\"../assets/img/login-bg.png\" id=\"computercard\" /></a>\n\n            <div>\n                <form class=\"form\" [formGroup]=\"formgroup\">\n                    <h4 class=\"text-white text-center font-weight-bold mb-3\">Forgot Password?</h4>\n                    <input type=\"text\" placeholder=\"Email\" [formControl]=\"formgroup.controls['email']\" class=\"form-control\"/>\n                    <p *ngIf=\"formgroup.controls['email'].hasError('required') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Email is required</p>\n                    <p *ngIf=\"formgroup.controls['email'].hasError('pattern') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Please enter valid email.</p>\n                </form>\n            </div>\n        </header>\n        <div class=\"p-4 pb-0 text-center\">\n            <span class=\"fa fa-user\"></span> <a [routerLink]=\"['/login']\">Back to Login</a>\n        </div>\n        <footer class=\"card__body\">\n            <!-- <a href=\"login.html\" class=\"btn btn-primary\">SUBMIT</a> -->\n            <!-- <button class=\"btn btn-primary full-width\" type=\"submit\"  [disabled]=\"!formgroup.valid\" (click)=\"submit(formgroup.value)\">SUBMIT</button>\n\n        </footer>\n\n        \n    </div>  -->\n   \n<!-- <div class=\"card_form\">\n\n     <img src=\"../assets/img/LOGIN8.png\" class=\"img img-responsive\" height=\"100px\" width=\"100%\" /> \n\n    <a href=\"javascript:void(0);\">\n        <img src=\"../assets/img/login-bg.png\" id=\"computercard\" />\n    </a>\n    <div>\n        <form [formGroup]=\"formgroup\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <header>\n                        <input type=\"text\" placeholder=\"Email\" [formControl]=\"formgroup.controls['email']\" class=\"form-control\" />\n                        <p *ngIf=\"formgroup.controls['email'].hasError('required') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Email is required</p>\n                        <p *ngIf=\"formgroup.controls['email'].hasError('pattern') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Please enter valid email.</p>\n\n\n                        <input type=\"password\" placeholder=\"Password\" minlength='8' maxlength='16' [formControl]=\"formgroup.controls['pass']\" class=\"form-control\"\n                        />\n                        <p *ngIf=\" formgroup.controls['pass'].hasError('maxlength') && formgroup.controls['pass'].dirty\" style=\"color:red;font-size:14px;\">*Maximum length should be of 16 characters</p>\n                        <p *ngIf=\"formgroup.controls['pass'].hasError('minlength') && formgroup.controls['pass'].dirty\" style=\"color:red;font-size:14px;\">*Minimum length should be of 8 characters</p>\n                        <p *ngIf=\"formgroup.controls['pass'].hasError('required') && formgroup.controls['pass'].dirty\" style=\"color:red;font-size:14px;\">*Password is required</p>\n\n                    </header>\n                </div>\n            </div>\n            <br/>\n\n\n            <br/>\n\n            <br/>\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"text-center\">\n                        <span class=\"fa fa-lock\"></span>\n                        <a [routerLink]=\"['/forgot-password']\">Forgot Password</a>\n                    </div>\n                </div>\n            </div>\n            <br>\n\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <button class=\"btn btn-primary full-width\" [disabled]=\"!formgroup.valid\" (click)=\"login(formgroup.value)\">LOGIN</button>\n\n                </div>\n            </div>\n\n\n        </form>\n    </div>\n\n\n\n\n</div> -->\n<br/><br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n\n\n<br/>\n<div class=\"well well-sm\">\n<div class=\"login-wrapper\">\n        <div class=\"container-common\">\n           <div class=\"row justify-content-center\">\n          <div class=\"col-md-4\">\n            <div class=\"d-flex align-items-center minheight70vh\">\n              <form class=\"login_box_outer w-100\" action=\"login-validation.html\">\n                <div class=\"custom-border-box\">\n                    <div class=\"login-right-block\">\n                      <div class=\"login-heading\">\n                         <h2 class=\"text-center\">Forgot Password?</h2>\n                      </div>\n                      <div class=\"login-box-body\">\n                        <div class=\"form-group\">\n                                <input type=\"text\" placeholder=\"Email\" [formControl]=\"formgroup.controls['email']\" class=\"form-control\" />\n                                <p *ngIf=\"formgroup.controls['email'].hasError('required') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Email is required</p>\n                                <p *ngIf=\"formgroup.controls['email'].hasError('pattern') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Please enter valid email.</p>\n        \n                          </div>\n                          <!-- <div class=\"form-group\">\n                                <input type=\"password\" placeholder=\"Password\" minlength='8' maxlength='16' [formControl]=\"formgroup.controls['pass']\" class=\"form-control\"\n                                />\n                                <p *ngIf=\" formgroup.controls['pass'].hasError('maxlength') && formgroup.controls['pass'].dirty\" style=\"color:red;font-size:14px;\">*Maximum length should be of 16 characters</p>\n                                <p *ngIf=\"formgroup.controls['pass'].hasError('minlength') && formgroup.controls['pass'].dirty\" style=\"color:red;font-size:14px;\">*Minimum length should be of 8 characters</p>\n                                <p *ngIf=\"formgroup.controls['pass'].hasError('required') && formgroup.controls['pass'].dirty\" style=\"color:red;font-size:14px;\">*Password is required</p>\n                          </div> -->\n                          <!-- <div class=\"form-group row\"> -->\n                              <!-- <div class=\"col-6\">\n                                <div class=\"remember-text \">\n                                  <label class=\"checkbox-design\">\n                                    <input type=\"checkbox\"/><span></span>Remember me\n                                  </label>\n                                </div>\n                              </div> -->\n                             <!--  <div class=\"text-right\">\n                                 <a href=\"forgot-password.html\" class=\"forget-pass\">Forgot Password?</a>\n                              </div> -->\n                              <!-- <div class=\"col-lg-12 pull-right\">\n                                <div class=\"forgot-links pull-right\">\n                                        <a [routerLink]=\"['/forgot-password']\">Forgot Password</a>\n                                </div>\n                              </div>\n                          </div> -->\n                        </div>\n                        <div class=\"p-4 pb-0 text-center\" style=\"text-align:right !important\">\n                                 <a [routerLink]=\"['/login']\" >Back to Login</a>\n                            </div>\n                        <button class=\"btn btn-primary full-width\" style=\"width:100%\" type=\"submit\"  [disabled]=\"!formgroup.valid\" (click)=\"submit(formgroup.value)\">SUBMIT</button>\n                        <!-- <button class=\"btn btn-primary full-width\" style=\"width:100%\" [disabled]=\"!formgroup.valid\" (click)=\"submit(formgroup.value)\">SUBMIT</button> -->\n                    </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(formBuilder, route, service) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        this.formgroup = formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-Z0-9_-]+([\.-][A-Z0-9_-]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,4})+$/i)])]
        });
    }
    ForgotPasswordComponent.prototype.submit = function (val) {
        var _this = this;
        console.log(this.formgroup.value);
        console.log(val);
        var submitdata = {
            "email": val.email,
            "userType": "SUPERADMIN"
        };
        console.log(submitdata);
        this.service.postApi('forgot', submitdata, 0).subscribe(function (response) {
            console.log("in forgot api------->");
            console.log("forgot Data====>" + JSON.stringify(val));
            if (response['responseCode'] == 200) {
                // console.log('successfully login',response['responseMessage'])
                _this.service.showSuccess(response['responseMessage']);
                _this.route.navigate(['/login']);
            }
            else {
                console.log("else");
                _this.service.showError('Email Id does not exists.');
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/forgot/forgot.component.html":
/*!**********************************************!*\
  !*** ./src/app/forgot/forgot.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/><br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n\n\n<br/>\n\n\n<div class=\"well well-sm\">\n        <div class=\"login-wrapper\">\n                <div class=\"container-common\"> \n                        <div class=\"row justify-content-center\">\n                                <div class=\"col-md-5\">  \n                                        <div class=\"d-flex align-items-center minheight70vh\">\n                       \n                        <form [formGroup]='passwordForm' class=\"login_box_outer w-100\" >\n                                <div class=\"custom-border-box\">\n                                        <div class=\"login-right-block\">\n                                                <div class=\"login-heading\">\n                                                        <h2 class=\"text-center\">RESET PASSWORD</h2>\n                                                  </div>\n                                                  <div class=\"login-box-body\">\n                                                  <div class=\"form-group\">\n                                            <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" formControlName='newPassword' maxlength=\"16\" id='newPassword'/>\n                                            <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').dirty && passwordForm.get('newPassword').invalid\">\n                                                <span [ngClass]=\"{error:passwordForm.get('newPassword').hasError('required')}\" *ngIf=\"passwordForm.get('newPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Please enter password.</span>\n                                                <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.controls['newPassword'].dirty && passwordForm.controls['newPassword'].invalid)}\">\n                                                    <span [ngClass]=\"{error:passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')}\"\n                                                        *ngIf=\"passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')\" style=\"color:red;font-size:14px;\">*Password must be of minimum 8 characters.</span>\n                                                </div>\n                                            </div>\n                                        </div>\n                           \n\n                                        <div class=\"form-group\">\n                                            <div class=\"form-group\" [ngClass]=\"{'has-error validate-style1': (passwordForm.get('newPassword').value != passwordForm.get('confirmPassword').value) && passwordForm.controls['confirmPassword'].dirty}\">\n                                                    <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName='confirmPassword' maxlength=\"16\"\n                                                        id='confirmPassword' />\n                                                    <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').value && passwordForm.get('confirmPassword').value\">\n                                                        <span [ngClass]=\"{error:passwordForm.get('newPassword').value != passwordForm.get('confirmPassword').value }\" *ngIf='passwordForm.get(\"newPassword\").value != passwordForm.get(\"confirmPassword\").value ' style=\"color:red;font-size:14px;\">* New password and confirm password does not match. </span>\n                                                    </div>\n                                                </div>\n                                    </div>\n                                   \n                            \n\n                            <div class=\"text-center\">\n                                   \n                                    <div class=\"col-sm-12\"><button class=\"btn btn-primary full-width\" [disabled]=\"!passwordForm.valid\" (click)=\" save(passwordForm.value)\">Reset Password</button></div>\n                                    \n                            </div>\n                            </div>\n                            </div>\n                            </div>\n                    </form>\n                    </div>\n                    </div>\n\n                    </div>\n              </div>\n   </div>\n   </div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/forgot/forgot.component.scss":
/*!**********************************************!*\
  !*** ./src/app/forgot/forgot.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forgot/forgot.component.ts":
/*!********************************************!*\
  !*** ./src/app/forgot/forgot.component.ts ***!
  \********************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(route, _location, service, activateRote) {
        this.route = route;
        this._location = _location;
        this.service = service;
        this.activateRote = activateRote;
        this.params = '';
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ForgotComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.route.params.subscribe(params =>  {
        //   console.log('params => '+ JSON.stringify(params))
        //   this.params = params['type']
        // })
        this.activateRote.paramMap.subscribe(function (prams) {
            _this.adminId = prams.get('adminId');
        });
    };
    ForgotComponent.prototype.save = function (val) {
        var _this = this;
        console.log(this.passwordForm.value);
        console.log(val);
        var changeData = {
            "adminId": this.adminId,
            "newPassword": val.newPassword
        };
        console.log(changeData);
        this.service.postApi('resetPassword', changeData, 0).subscribe(function (response) {
            console.log("!@%^&$#^&^&");
            _this.responseData = response;
            console.log("succ===>", JSON.stringify(_this.responseData));
            console.log("Login Data====>" + JSON.stringify(val));
            if (response['responseCode'] == 200) {
                _this.service.showSuccess(response['responseMessage']);
                console.log('change Password', response['responseMessage']);
                _this.route.navigateByUrl('/login');
            }
            else {
                console.log("else");
                _this.service.showError('Id not exists.');
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.scss */ "./src/app/forgot/forgot.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br/><br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n\n\n<br/>\n<div class=\"well well-sm\">\n<div class=\"login-wrapper\">\n        <div class=\"container-common\">\n           <div class=\"row justify-content-center\">\n          <div class=\"col-md-5\">\n            <div class=\"d-flex align-items-center minheight70vh\">\n              <form class=\"login_box_outer w-100\" action=\"login-validation.html\" [formGroup]='formgroup'>\n                <div class=\"custom-border-box\">\n                    <div class=\"login-right-block\">\n                      <div class=\"login-heading\">\n                         <h2 class=\"text-center\">LOGIN</h2>\n                      </div>\n                      <div class=\"login-box-body\">\n                        <div class=\"form-group\">\n                            <!-- <i class=\"fa fa-asterisk text-danger\"></i> -->\n                            <div class=\"form-group required\">\n                           <label class=\"control-label\"></label>\n                      \n                                <input type=\"text\" placeholder=\"Email\" [formControl]=\"formgroup.controls['email']\" class=\"form-control\" />\n                                <p *ngIf=\"formgroup.controls['email'].hasError('required') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Email is required</p>\n                                <p *ngIf=\"formgroup.controls['email'].hasError('pattern') && formgroup.controls['email'].dirty\" style=\"color:red;font-size:14px;\">*Please enter valid email.</p>\n                              </div>\n                          </div>\n                          <div class=\"form-group\">\n                              <div class=\"form-group required\">\n                                  <label class=\"control-label\"></label>                                <input type=\"password\" placeholder=\"Password\" minlength='8' maxlength='16' [formControl]=\"formgroup.controls['pass']\" class=\"form-control\"\n                                />\n                                <p *ngIf=\" formgroup.controls['pass'].hasError('maxlength') && formgroup.controls['pass'].dirty\" style=\"color:red;font-size:14px;\">*Maximum length should be of 16 characters</p>\n                                <p *ngIf=\"formgroup.controls['pass'].hasError('minlength') && formgroup.controls['pass'].dirty\" style=\"color:red;font-size:14px;\">*Minimum length should be of 8 characters</p>\n                                <p *ngIf=\"formgroup.controls['pass'].hasError('required') && formgroup.controls['pass'].dirty\" style=\"color:red;font-size:14px;\">*Password is required</p>\n                          </div></div>\n                          <div class=\"form-group row\">\n                              <!-- <div class=\"col-6\">\n                                <div class=\"remember-text \">\n                                  <label class=\"checkbox-design\">\n                                    <input type=\"checkbox\"/><span></span>Remember me\n                                  </label>\n                                </div>\n                              </div> -->\n                             <!--  <div class=\"text-right\">\n                                 <a href=\"forgot-password.html\" class=\"forget-pass\">Forgot Password?</a>\n                              </div> -->\n                              <div class=\"col-lg-12 pull-right\">\n                                <div class=\"forgot-links pull-right\">\n                                     <a  (click)=\"forgotPassword()\" style=\"cursor:pointer\" >Forgot Password?</a>\n                                </div>\n                              </div>\n                          </div>\n                        </div>\n\n                        <button class=\"btn btn-primary full-width\" style=\"width:100%\" [disabled]=\"!formgroup.valid\" (click)=\"login(formgroup.value)\">LOGIN</button>\n\n                    </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 768px) {\n  .hide_large,\n  .short_name {\n    display: none !important; }\n  .change_password .modal-body {\n    padding: 2rem 50px; } }\n\n.custom-border-box {\n  border: 1px solid #ddd;\n  padding: 20px;\n  border-radius: 5px; }\n\n@media (min-width: 1025px) {\n  .toggle-wrapper aside,\n  .toggle-wrapper .logo-box {\n    width: 45px;\n    transition: 0.5s; }\n  .middle-content,\n  footer {\n    padding-left: 250px; }\n  .toggle-wrapper .middle-content,\n  .toggle-wrapper footer {\n    padding-left: 50px; }\n  .toggle-wrapper .side_page_name {\n    display: none;\n    transition: 0.5s; }\n  .side_page_name {\n    white-space: nowrap; }\n  .toggle-wrapper .logo-box .btn.btn-toggle {\n    right: 7px; }\n  footer.before-login {\n    padding-left: 0px; } }\n\n@media (max-width: 1280px) {\n  .administrator-box {\n    padding: 30px 0px 0px 40px; }\n  .dash-pan-list span {\n    font-size: 16px; } }\n\n@media (max-width: 1199px) {\n  .container-common {\n    max-width: 991px; }\n  .dashboard-block .dash_list li {\n    width: calc(33% - 20px); } }\n\n@media (max-width: 1024px) {\n  .btn.btn-toggle {\n    right: 0;\n    top: 4px;\n    width: 40px;\n    height: 40px;\n    padding: 0;\n    color: #fff;\n    display: block; }\n  .header-right-part {\n    max-width: 298px;\n    margin-left: 6px; }\n  .nav-right-box {\n    padding-right: 6px;\n    padding-top: 15px; }\n  .common_ack + .common_ack {\n    margin-left: 0px; }\n  .head_user-box {\n    margin: 0 3px; }\n  .user_name {\n    margin: 0 7px; }\n  .search-form-block .form-control {\n    height: 44px; }\n  .header-right-part {\n    padding-top: 12px; }\n  .toggle-wrapper aside.sidebar {\n    left: 0; }\n  header,\n  .middle-content {\n    padding-left: 0; }\n  .content-section {\n    padding: 15px 15px; }\n  .page_title_block {\n    padding: 5px 15px 0; }\n  .close_panel {\n    display: none !important;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    background: #2e5178;\n    position: absolute;\n    right: 0;\n    color: #fff; }\n  .head_user-box {\n    right: 50px; }\n  span.nav-toggle-span .btn {\n    padding: 0;\n    border: 1px solid #49bbac;\n    background: #38a798;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    line-height: 28px; }\n  span.nav-toggle-span {\n    position: absolute;\n    right: 15px;\n    top: 25px; }\n  .global-table table {\n    min-width: auto; }\n  aside.sidebar {\n    top: 65px;\n    height: calc(100vh - 65px);\n    left: -100%; }\n  header nav.navbar {\n    min-height: 65px; }\n  .logo-box {\n    height: 65px; }\n  button.btn.btn-outline-secondary.btn-mobsearch,\n  button.btn.btn-outline-secondary.btn-mobsearch:focus,\n  button.btn.btn-outline-secondary.btn-mobsearch:active {\n    padding: 0;\n    width: auto;\n    height: auto;\n    line-height: normal;\n    background: transparent !important;\n    color: #6c757d !important;\n    border: 0 !important;\n    outline: none !important;\n    box-shadow: none !important;\n    top: 2px;\n    display: none; } }\n\n@media (max-width: 992px) {\n  .dash_list li h3 {\n    font-size: 1rem; }\n  footer {\n    padding: 10px 0; }\n  .mt40,\n  .mt30 {\n    margin-top: 10px !important; }\n  .add-button.pull-right.mt2 {\n    white-space: nowrap; } }\n\n@media (max-width: 768px) {\n  .dash_list li {\n    width: 48.5%; } }\n\n@media (max-width: 767px) {\n  .col-md-6.pR7 {\n    padding-right: 15px !important; }\n  .col-md-6.pL7 {\n    padding-left: 15px !important; }\n  .trade_box,\n  .graph_box {\n    margin-bottom: 30px; }\n  .finance-col:last-child .graph_box {\n    margin: 0; }\n  .row .row.mb30 {\n    margin: 0 !important; }\n  .finance_box img,\n  .payment-box1 img,\n  .payment-box2 img {\n    height: auto; }\n  .map_box iframe {\n    height: 240px; }\n  .finance-col {\n    width: 100%;\n    display: block;\n    flex-grow: unset;\n    max-width: 100%;\n    flex: 100%; }\n  .common_ack .dropdown-menu {\n    width: 217px;\n    padding: 15px; }\n  header nav.navbar {\n    min-height: 60px; }\n  span.nav-toggle-span {\n    top: 15px; }\n  .page_title {\n    font-size: 18px; }\n  .custom-container {\n    padding: 0; }\n  .modal_flax_height {\n    min-height: 260px; }\n  .login-box,\n  .signupbox-box-outer {\n    margin: 30px auto; }\n  body {\n    overflow-x: hidden; }\n  .toggle-wrapper aside.sidebar {\n    left: 0; }\n  .logo_img {\n    width: 120px; }\n  .lang_select {\n    padding: 8px 8px 0px;\n    margin-top: 4px; }\n  .lang_select span {\n    font-size: 12px; }\n  .login-box-body {\n    padding: 15px; }\n  .login-info {\n    font-size: 14px; }\n  .box-title h2 {\n    font-size: 30px; }\n  .tabs-style1 .nav-item {\n    width: 100%;\n    margin-bottom: 10px; }\n  .tabs-style1 .nav-item + .nav-item {\n    margin-left: 0; }\n  .tabs-style1.nav-tabs .nav-link {\n    border-radius: 4px; }\n  .height_100vh {\n    height: auto; }\n  .signup-action .btn {\n    width: 40%; }\n  .head_user-box {\n    right: 60px;\n    top: 0; }\n  .profile-box {\n    margin: 30px 0 0; }\n  .welcome,\n  .user_name,\n  .full_name {\n    display: none !important; }\n  .nav-right-list {\n    margin: 0; }\n  .nav-left-box {\n    width: 100%;\n    float: left;\n    margin-top: 0;\n    padding: 5px 15px; }\n  .logo-box {\n    width: 142px; }\n  .table_select_box {\n    margin-top: 10px;\n    text-align: center; }\n  .table_select_box .global_search_box {\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 10px; }\n  .table_select_box > .form-control + .global_search_box {\n    margin-top: 10px; }\n  .form-box {\n    padding: 15px;\n    min-height: 230px; }\n  .page-action_btn .btn.btn-large {\n    width: auto; }\n  .bottom_show_record {\n    text-align: center;\n    margin-bottom: 10px;\n    font-size: 11px; }\n  .pagination_block .pagination {\n    text-align: center; }\n  .page-action_btn {\n    text-align: center; }\n  .filter_select {\n    display: block; }\n  .filter_select + .filter_select {\n    margin-left: 0;\n    margin-top: 10px; }\n  .filter_search {\n    max-width: 280px;\n    margin-right: 5px; }\n  .filter_select.admin {\n    display: inline-block;\n    vertical-align: top; }\n  .administrator-box {\n    padding: 0px 10px; }\n  .min-ht-300 {\n    min-height: auto; }\n  .min-ht-350 {\n    min-height: auto; }\n  .min-ht-400 {\n    min-height: auto; }\n  .min-ht-450 {\n    min-height: auto; }\n  .min-ht-500 {\n    min-height: auto; }\n  .min-ht-550 {\n    min-height: auto; }\n  .min-ht-600 {\n    min-height: auto; }\n  .min-ht-650 {\n    min-height: auto; }\n  .min-ht-700 {\n    min-height: auto; }\n  .min-ht-750 {\n    min-height: auto; }\n  .top-action-box {\n    float: none;\n    top: 10px;\n    margin-bottom: 15px; }\n  .id-cards-img.pR20 {\n    padding-right: 0 !important; }\n  .container-common {\n    max-width: 767px; }\n  .header-right-part {\n    max-width: 80px; }\n  .btn-mobsearch {\n    color: #b0b0b0;\n    background: transparent;\n    border: 0;\n    border-radius: 50%;\n    display: block; }\n  .header-right-part form {\n    display: none; }\n  .header-right-part.search-show .search-form-block {\n    position: relative; }\n  .header-right-part.search-show form {\n    display: block;\n    position: absolute;\n    bottom: 0;\n    max-width: 300px;\n    width: 100%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    left: 50%;\n    top: 100%;\n    z-index: 11; }\n  .header-right-part i.fas.fa-times {\n    color: #ff0000; }\n  .common_ack a {\n    padding: 4px 0px 5px 0px !important; }\n  .logo-box {\n    min-height: 55px; }\n  a.btn.btn-large.max-WT-200.font-100.btn-grey.ml5 {\n    margin: 2px 0; }\n  .order-view.mt30.max-WT-700.mrgn-0-auto {\n    margin-top: 0 !important; }\n  .main-block-innner.mb40.mt40 {\n    margin-top: 10px !important;\n    margin-bottom: 10px !important; }\n  .btn.btn-large {\n    width: auto;\n    padding: 5px;\n    font-size: 14px;\n    letter-spacing: 1px; }\n  .common-bredcrumb li {\n    font-size: 11px;\n    font-weight: 300; }\n  .dashboard-block .dash_list li {\n    width: calc(50% - 20px); }\n  .login-box-body .col-md-6 {\n    min-height: auto;\n    display: block; }\n  .login-left-block {\n    padding: 0px; }\n  .login-right-block {\n    padding: 0px; }\n  .login-box-body {\n    padding: 0px; }\n  .col-md-6.bor-right {\n    border-right: 0px !important; }\n  .table-scroll table {\n    width: 800px; } }\n\n/* :767px End */\n\n@media (max-width: 576px) {\n  .filter_search {\n    max-width: 225px;\n    margin-right: 5px; }\n  .btn-common.max-WT-160 {\n    max-width: 120px !important;\n    padding: 8px 10px; }\n  .middle-box {\n    padding: 15px 0px; }\n  .dash_list li {\n    width: 48%; }\n  a.btn.btn-large.radius0.max-WT-200.font-100.btn-danger.ml5 {\n    margin: 3px 0; }\n  .dashboard-block .dash_list li {\n    width: 100%; } }\n\n@media (max-width: 480px) {\n  .filter_search {\n    max-width: 100%;\n    margin-right: 0px;\n    margin-bottom: 8px; }\n  .head-right {\n    display: inline-block;\n    text-align: center;\n    width: 145px; }\n  .dash_list li {\n    width: 100%; } }\n\n.form-group.required .control-label:after {\n  content: \"*\";\n  color: red; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, service) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        this.formgroup = formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-Z0-9_-]+([\.-][A-Z0-9_-]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,4})+$/i)])],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.login = function (val) {
        var _this = this;
        console.log(this.formgroup.value);
        console.log(val);
        var logindata = {
            "email": val.email,
            "password": val.pass,
            "userType": "SUPERADMIN",
        };
        console.log(logindata);
        this.service.postApi('/login', logindata, 0).subscribe(function (response) {
            _this.responseData = response;
            // console.log("succ===>",JSON.stringify(this.responseData))
            // console.log(`Login Data====>${JSON.stringify(val)}`);
            if (response['responseCode'] == 200) {
                _this.service.showSuccess(response['responseMessage']);
                localStorage.setItem('token', _this.responseData.data.token);
                localStorage.setItem('adminId', _this.responseData.data._id);
                console.log('successfully login', response['responseMessage']);
                _this.route.navigate(['/dashboard']);
                // localStorage.token = response[`data`][`token`];
                // localStorage.adminId = response[`data`][`_id`];
            }
            else {
                _this.service.showError('Invalid email or password.');
                console.log("else");
                //  this.service.showError('Invalid email or password.')
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.route.navigate(['/forgot-password']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- logout modal -->\n\n <div class=\"modal fade\" id=\"logout\">\n  <div class=\"modal-dialog modal-sm modal-dialog-centered\">\n      <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n           <h4 class=\"modal-title\">Logout</h4>\n          \n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n  \n      <!-- Modal body -->\n      <div class=\"modal-body text-center\">\n          Are you sure want to logout?\n      </div>\n  \n      <!-- Modal footer -->\n      <div class=\"modal-footer btn-group justify-content-between\">\n          <button type=\"button\" class=\"btn btn-primary flex-fill\" data-dismiss=\"modal\">No</button>\n          <a (click)=\"yes()\" class=\"btn btn-warning flex-fill\" data-dismiss=\"modal\">Yes</a>\n      </div>\n  \n      </div>\n  </div>\n</div>\n\n<!-- end logout modal -->"

/***/ }),

/***/ "./src/app/logout/logout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    LogoutComponent.prototype.yes = function () {
        var _this = this;
        var changeData = {
            "_id": localStorage.getItem('adminId')
        };
        this.service.postApi('logout', changeData, 0).subscribe(function (response) {
            console.log("!@%^&$#^&^&");
            _this.responseData = response;
            console.log("succ===>", JSON.stringify(_this.responseData));
            if (response['responseCode'] == 200) {
                $('#logout').modal('hide');
                localStorage.removeItem('adminId');
                localStorage.removeItem('token');
                _this.service.showSuccess(response['responseMessage']);
                // localStorage.setItem('token',this.responseData.data.token)
                // localStorage.setItem('adminId',this.responseData.data._id) 
                console.log('logout', response['responseMessage']);
                _this.route.navigate(['/login']);
                // localStorage.token = response[`data`][`token`];
                // localStorage.adminId = response[`data`][`_id`];
            }
            else {
                console.log("else");
                _this.service.showError('Id not found.');
            }
        }, function (error) {
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/logout/logout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/manage-content/manage-content.component.html":
/*!**************************************************************!*\
  !*** ./src/app/manage-content/manage-content.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n    <div class=\"wrapper \">\n       \n            <app-sidebar></app-sidebar>\n\n     \n        <div class=\"main-panel\">\n            <!-- Navbar -->\n            <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n                <div class=\"container-fluid\">\n                       \n\n                    <div class=\"navbar-wrapper\">\n                        <a class=\"navbar-brand\">Static Content Management</a>\n                    </div>\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n                        aria-label=\"Toggle navigation\">\n                        <span class=\"sr-only\">Toggle Nav</span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse justify-content-end\">\n                      \n                             \n                                <app-side-icon></app-side-icon>\n                        \n                    </div>\n                  \n                </div>\n            </nav>\n            <!-- End Navbar -->\n            <div class=\"content\">\n                <div class=\"container-fluid pt-4\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-tabs card-header-primary\">\n                            <h4 class=\"card-title font-weight-bold\">Content Management</h4>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"table-responsive mt-3\">\n                                <table class=\"table table-bordered\">\n                                    <thead class=\"border-top text-primary\">\n                                        <tr>\n                                            <th>ID</th>\n                                            <th class=\"text-center\">Page Name</th>\n                                            <th class=\"text-right\">Action</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>01</td>\n                                            <td class=\"text-center\">Terms of Use</td>\n                                            <td class=\"text-right\">\n                                                <a class=\"btn btn-sm btn-primary\" (click)=\"terms('terms')\">\n                                                    <i class=\"fa fa-edit\"></i>\n                                                </a>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>02</td>\n                                            <td class=\"text-center\">FAQ</td>\n                                            <td class=\"text-right\">\n                                                <a  class=\"btn btn-sm btn-primary\" (click)=\"faq('faq')\">\n                                                                                                \n                                                  \n                                                    <i class=\"fa fa-edit\"></i>\n                                                </a>\n                                            </td>\n                                        </tr>\n                                     \n                                        \n                                    </tbody>\n                                </table>\n                         \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <app-footer></app-footer>\n        </div>\n    </div>\n   \n    <app-logout></app-logout>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/manage-content/manage-content.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/manage-content/manage-content.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manage-content/manage-content.component.ts":
/*!************************************************************!*\
  !*** ./src/app/manage-content/manage-content.component.ts ***!
  \************************************************************/
/*! exports provided: ManageContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageContentComponent", function() { return ManageContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageContentComponent = /** @class */ (function () {
    function ManageContentComponent(router) {
        this.router = router;
    }
    ManageContentComponent.prototype.ngOnInit = function () {
    };
    ManageContentComponent.prototype.terms = function (e) {
        //  localStorage.setItem('',e)
        //  localStorage
        console.log("t & c >>>>>>>>>", e);
        this.router.navigateByUrl('/termsOfuse/' + e);
    };
    // terms() {
    //   this.router.navigateByUrl('/termsOfuse');
    // }
    ManageContentComponent.prototype.faq = function (e) {
        //localStorage.setItem('',e)
        console.log("t & c >>>>>>>>>", e);
        this.router.navigateByUrl('/Faq1/' + e);
    };
    ManageContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-content',
            template: __webpack_require__(/*! ./manage-content.component.html */ "./src/app/manage-content/manage-content.component.html"),
            styles: [__webpack_require__(/*! ./manage-content.component.scss */ "./src/app/manage-content/manage-content.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ManageContentComponent);
    return ManageContentComponent;
}());



/***/ }),

/***/ "./src/app/manage-user/manage-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/manage-user/manage-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n  <div class=\"wrapper \">\n      \n      <app-sidebar></app-sidebar>\n\n    \n    <div class=\"main-panel\">\n      <!-- Navbar -->\n      <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-wrapper\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\">Manage User</a>\n          </div>\n          <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n            <span class=\"sr-only\">Toggle Nav</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n          </button> -->\n          <div class=\"collapse navbar-collapse justify-content-end\">\n         \n           \n               \n                <app-side-icon></app-side-icon>\n              \n            \n          </div>\n        </div>\n      </nav>\n      <!-- End Navbar -->\n      <div class=\"content\">\n        <div class=\"container-fluid  pt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"card my-3\">\n                <div class=\"card-header card-header-primary\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-md-8\">\n                            <h4 class=\"card-title font-weight-bold\">User List</h4>\n                        </div>\n                        <div class=\"col-md-4 text-md-right\">\n                          \n                          <form [formGroup]=\"dashboardForm\" > \n                            <div class=\"form-group\">\n                             \n                                <div class=\"search-icon pull-right\" align=\"right\" >\n                                    <input type=\"text\" (keyup)=\"search()\" class=\"form-control max-wt-300 search-input\" placeholder=\"Search by name / email\" formControlName=\"search\" >\n                                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                                </div>\n                            </div>\n                        </form>        \n                        </div>\n                    </div>\n                  \n                  <!-- <p class=\"card-category\"> Here is a subtitle for this table</p> -->\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table table-bordered\">\n                      <thead class=\" text-primary border-top\">\n                          <th>Sr.No.</th>\n                        <th> Name</th>\n                        <th>Email Address</th>\n                        <th>Phone Number</th>\n                         <th>Last Device</th>\n                        <th>Last Sign In</th>\n                         \n                         <th>Status</th>\n                         <th>Action</th>\n                      </thead>\n                      <tbody>\n                     \n                        <tr *ngFor=\"let item of event | paginate: { itemsPerPage: limit, currentPage: page, totalItems: total };let i = index\">\n                            <td *ngIf=\"p == 1\">{{i + 1 }}</td>\n                            <td *ngIf=\"p > 1\">{{i + 1 + 10 * (p-1) }}</td>\n                            <td style=\"cursor:pointer\" (click)=\"name(item.walletAddress,item)\">{{item?.userName }}</td>\n                            <td>{{item?.email }} </td>\n                            <td>{{item?.mobileNumber }}</td> \n                            <td>{{item?.signInHistoryArray[0]?.deviceId  }}</td>\n                            <td>{{item?.signInHistoryArray[0]?.signInTime|date:'yyyy-MM-dd HH:mm:ss'  }}</td>\n                           <td>{{item?.status }}</td>\n                            <td>\n                              <div class=\"action-btn\">\n                                  <a class=\"btn btn-sm btn-success\" (click)=\"view(item)\">\n                                      <i class=\"fa fa-eye\"></i> View</a>\n                                  <a class=\"btn btn-sm btn-primary\" (click)=\"edit(item._id)\">\n                                      <i class=\"fa fa-edit\"></i> Edit</a>\n                                  <a  class=\"btn btn-sm \" (click)=\"userdel(item._id)\">\n                                      <i ></i>Change status</a>\n                                      <!-- <a class=\"dropdown-item\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#logout\">Logout</a> -->\n                              </div>\n                          </td>\n                            <!-- <td>{{item.lastDevice}}</td> -->\n                            <!-- <td>\n                                \n                                    <div class=\"tg-list-item\">\n                                        <a class=\"btn btn-sm \" (click)=\"userdel(item._id)\" >\n                                        <i class=\"fa fa-status\"> </i>Change status</a>\n                                    </div>\n                              \n                              </td>                     -->\n                         \n                          </tr>\n                          <!-- <tr *ngIf=\"Event.length==0\">\n                            <span>No record found</span>\n                        </tr> -->\n                      </tbody>\n                    </table>\n                    <pagination-controls (pageChange)=\"changePage($event)\"></pagination-controls>\n                  </div>\n                  <div class=\"tbl_footer\">\n                      <div class=\"row align-items-center flex-wrap\">\n                        <!-- <div *ngIf=\"paginationData.total >10\">\n                      </div> -->\n                          <!-- <div class=\"col-md-5 text-md-right\">\n                                <ul class=\"pagination d-inline-flex my-2\">\n                                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Previous</a></li>\n                                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">...</a></li>\n                                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">20</a></li>\n                                    <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n                                </ul>\n                          </div> -->\n                      </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n          </div>\n        </div>\n\n\n<!-- signout_modal Start -->\n<div class=\"modal fade global-modal reset-modal\" id=\"signout_modal\">\n  <div class=\"modal-dialog max-WT-500\">\n      <div class=\"modal-content\">\n          <div class=\"inner_border_area\">\n              <!-- Modal body -->\n              <div class=\"modal-body  text-center\">\n                  <div class=\"row align-items-center modal_flax_height\">\n                      <div class=\"col\">\n                          <div class=\"box-title mb40 d-inline-block\">\n                              <!-- <i class=\"fas fa-power-off off-icon\"></i> -->\n                              <p class=\"mt40\">Are you sure you want to Delete?</p>\n                          </div>\n                          <div class=\"text-center\">\n                              <a href=\"javascript:;\" class=\"btn btn-blue btn-noYes\"(click)=\"yes()\">YES</a>\n                              <button type=\"button\" class=\"btn btn-red btn-noYes\" data-dismiss=\"modal\">CANCEL</button>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<!-- Signout Modal -->\n\n      </div>\n      <app-footer> </app-footer>\n    </div>\n  </div>\n\n  <app-logout></app-logout>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/manage-user/manage-user.component.scss":
/*!********************************************************!*\
  !*** ./src/app/manage-user/manage-user.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manage-user/manage-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/manage-user/manage-user.component.ts ***!
  \******************************************************/
/*! exports provided: ManageUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserComponent", function() { return ManageUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageUserComponent = /** @class */ (function () {
    function ManageUserComponent(route, router, service, formBuilder) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.page = 1;
        this.event = [];
        this.userData = [];
        this.collection = [];
        this.p = 1;
        this.dashboardForm = this.formBuilder.group({
            'search': [''],
            'sort': [''],
        });
    }
    ManageUserComponent.prototype.ngOnInit = function () {
        this.getAllCustomer('');
    };
    ManageUserComponent.prototype.changePage = function (page) {
        //console.log("page-->", page);
        this.p = page;
        this.getAllCustomer('');
    };
    ManageUserComponent.prototype.getAllCustomer = function (val) {
        var _this = this;
        var logindata = {
            search: this.dashboardForm.controls['search'].value,
            pageNumber: this.p
        };
        for (var val_1 in logindata) {
            if (logindata[val_1] == '') {
                delete logindata[val_1];
            }
        }
        this.service.postApi("getUserList", logindata, 1).subscribe(function (response) {
            _this.responseData = response;
            //console.log('res') ;
            if (response['responseCode'] == 200) {
                console.log('data found successfully for userDetail>>>>', JSON.stringify(_this.responseData));
                _this.userData = response['data'];
                _this.event = _this.userData.docs;
                _this.limit = _this.userData.limit;
                _this.total = _this.userData.total;
                _this.page = _this.userData.page;
                console.log("limit--L> ", _this.limit + " total--> ", _this.total, "PAGES---->", _this.page);
                // this.service.showSuccess(response['responseMessage'])
            }
            else {
                _this.service.showError(response['responseMessage']);
            }
        }, function (error) {
            console.log('error =>', error);
            _this.service.showError('Something Went Wrong');
        });
    };
    ManageUserComponent.prototype.userName = function () {
        this.router.navigateByUrl('/user_details');
    };
    ManageUserComponent.prototype.search = function () {
        this.pageNo = 1;
        this.getAllCustomer('');
    };
    ManageUserComponent.prototype.name = function (e, x) {
        this.service.nameClicked = x;
        console.log("service", this.service.nameClicked);
        //  localStorage.setItem('',e)
        //  localStorage
        console.log("t & c >>>>>>>>>", e);
        this.router.navigateByUrl('/user_details/' + e + '/device');
    };
    ManageUserComponent.prototype.view = function (userDetails) {
        this.service.userdata = userDetails;
        console.log(userDetails);
        // console.log('id of customer--->', JSON.stringify(this.user[l]._id))
        // localStorage.setItem('_id of customer', this.user[l]._id);
        // localStorage.setItem('status of customer', this.customer[l].status);
        this.router.navigate(['./viewDetails']);
    };
    ManageUserComponent.prototype.edit = function (userId) {
        console.log(userId);
        this.service.edit_id = userId;
        this.router.navigate(['./edit-user']);
    };
    ManageUserComponent.prototype.yes = function () {
        this.userdel('');
    };
    ManageUserComponent.prototype.ys = function (x) {
        console.log(x);
        this._id = x;
        $('#signout_modal').modal({
            backdrop: 'static',
            keyboard: false
        });
    };
    ManageUserComponent.prototype.userdel = function (val) {
        var _this = this;
        var delData = {
            "_id": val
        };
        console.log('change status _id>>>>>>', delData);
        this.service.postApi('changeStatus', delData, 1).subscribe(function (response) {
            _this.responseData = response;
            // console.log(`Login Data====>${JSON.stringify(val)}`);
            if (response['responseCode'] == 200) {
                // $('#signout_modal').modal('hide')
                //this.service.showSuccess(response['responseMessage']);
                console.log('successfully change status', response['responseMessage']);
                // this.router.navigate(['/dashboard']);
                _this.getAllCustomer('');
                console.log("succ===>", JSON.stringify(_this.responseData));
            }
            else {
                console.log("else");
                // $('#signout_modal').modal('hide')
                console.log(' status', response['responseMessage']);
                _this.service.showError('does not change the status.');
            }
        }, function (error) {
            // $('#signout_modal').modal('hide')
            console.log('error occur', error);
            _this.service.showError('Server Error');
        });
    };
    ManageUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-user',
            template: __webpack_require__(/*! ./manage-user.component.html */ "./src/app/manage-user/manage-user.component.html"),
            styles: [__webpack_require__(/*! ./manage-user.component.scss */ "./src/app/manage-user/manage-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ManageUserComponent);
    return ManageUserComponent;
}());



/***/ }),

/***/ "./src/app/my-profile/my-profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper \">\n      \n    <app-sidebar></app-sidebar>\n\n  \n  <div class=\"main-panel\">\n    <!-- Navbar -->\n    <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" href=\"javascript:void(0);\">My Profile</a>\n        </div>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n          <span class=\"sr-only\">Toggle Nav</span>\n          <span class=\"navbar-toggler-icon icon-bar\"></span>\n          <span class=\"navbar-toggler-icon icon-bar\"></span>\n          <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\">\n       \n         \n             \n              <app-side-icon></app-side-icon>\n            \n          \n        </div>\n      </div>\n    </nav>\n    <!-- End Navbar -->\n \n    <div class=\"content\">\n          <div class=\"container-fluid pt-4\">\n                  <div class=\"card\">\n\n                          <div class=\"card-header card-header-tabs card-header-primary\">\n                                  <h4 class=\"card-title font-weight-bold\">My Profile</h4>\n\n                              </div>\n                              <div class=\"card-body\">\n\n\n       \n                  <br>\n                  \n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-5\"><b style=\"color:black\">Name :</b></label>\n                        <div class=\"col-md-7\">\n                             \n                           <label> <b  style=\"color:black\">{{adminData.userName}}</b></label>\n                        </div>\n                    </div>\n                   <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-5\"><b style=\"color:black\">Email :</b></label>\n                        <div class=\"col-md-7\">\n                            <label><b  style=\"color:black\">{{adminData.email}}</b></label>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-5\"><b style=\"color:black\">Phone No:</b></label>\n                        <div class=\"col-md-7\">\n                            <label><b  style=\"color:black\">{{adminData.mobileNumber}}</b></label>\n                        </div>\n                    </div>\n                  \n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-5\"> <b style=\"color:black\">Status :</b></label>\n                        <div class=\"col-md-7\">\n                            <label><b style=\"color:black\">{{adminData.status}}</b></label>\n                        </div>\n                    </div>\n                  \n                    <br> \n                    <div  class=\"text-left mt40\">\n          \n                        <button  (click)=\"back()\" class=\"btn btn-primary full-width\">Back</button>\n                        <button  (click)=\"edit(adminData._id)\" class=\"btn btn-primary full-width\">Edit</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    \n            </div>\n          </div>\n          \n        \n<!--      \n            <div class=\"content\">\n              <div class=\"container-fluid  pt-4\">\n                      <div class=\"card my-3\"> -->\n                              <!-- <div class=\"card-header card-header-primary\"> -->\n                                  <!-- <div class=\"row align-items-center\">\n                                     \n                                      <div class=\"col-md-4 text-md-right\">\n\n                                           \n    <div class=\"content-section\">\n\n          <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n              <div class=\"main-block-innner mb40 mt40\">\n                  <div class=\"add-store-block input-style\">\n                     \n                    <br>\n                    <br>  <br>  <br>  <br>  <br>  <br>\n                      <div class=\"user-profile\">\n                          <div class=\"image-box\">\n                              <img src=\"img/profile-img.jpg\" class=\"profile-pic\">\n                          </div>\n                      </div>\n                      <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Name :</label>\n                          <div class=\"col-md-7\">\n                               \n                              <label>{{userData.userName}}</label>\n                          </div>\n                      </div>\n                     <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Email :</label>\n                          <div class=\"col-md-7\">\n                              <label>{{userData.email}}</label>\n                          </div>\n                      </div>\n                      <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Phone No:</label>\n                          <div class=\"col-md-7\">\n                              <label>{{userData.mobileNumber}}</label>\n                          </div>\n                      </div>\n                      <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Wallet Address:</label>\n                          <div class=\"col-md-7\">\n                              <label>{{userData.walletAddress}}</label>\n                          </div>\n                      </div>\n                      <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Status :</label>\n                          <div class=\"col-md-7\">\n                              <label>{{userData.status}}</label>\n                          </div>\n                      </div> -->\n                  \n                      <!-- <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Last Sign-In Device :</label>\n                          <div class=\"col-md-7\">\n                              <label>{{userData. signInHistoryArray[0].lastDevice}}</label>\n                             \n                          </div>\n                      </div> -->\n                      <!-- <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Address :</label>\n                          <div class=\"col-md-7\">\n                              <label>abc</label>\n                          </div>\n                      </div> -->\n                      <!-- <div class=\"text-left mt40\"> -->\n                          <!-- <a href=\"edit-profile.html\" class=\"btn btn-large  max-WT-200 font-100 btn-green\">Edit Profile</a> -->\n                          <!-- <a (click)=\"back()\" class=\"btn btn-large  max-WT-200 font-100 btn-grey ml5 \">Back</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n       -->\n                                        \n\n\n              <!-- </div> -->\n\n            <!-- </div>\n            </div>\n            </div> -->\n    <app-footer> </app-footer>\n \n\n\n<app-logout></app-logout>"

/***/ }),

/***/ "./src/app/my-profile/my-profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-profile/my-profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.ts ***!
  \****************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(service, route, router, formBuilder) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.adminData = {};
        this.params = '';
        this.formgroup = formBuilder.group({});
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (prams) {
            _this.adminId = prams.get('adminId');
        });
        this.onload();
    };
    MyProfileComponent.prototype.back = function () {
        this.router.navigate(['/manage-user']);
    };
    MyProfileComponent.prototype.edit = function () {
        this.router.navigate(['/edit_myProfile/' + localStorage.getItem('adminId')]);
    };
    MyProfileComponent.prototype.onload = function () {
        var _this = this;
        this.service.getApi('getProfile', 1).subscribe(function (response) {
            if (response.responseCode == 200) {
                _this.adminData = response.data;
                console.log(_this.adminData);
            }
            else {
                _this.service.showError(response['responseMessage']);
            }
        }, function (error) {
            _this.service.showError('Something Went Wrong=======>>.Api Error');
        });
    };
    MyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! ./my-profile.component.html */ "./src/app/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.scss */ "./src/app/my-profile/my-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/setting/setting.component.html":
/*!************************************************!*\
  !*** ./src/app/setting/setting.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n    <div class=\"wrapper \">\n         \n            <app-sidebar></app-sidebar>\n\n      \n        <div class=\"main-panel\">\n            \n            <!-- Navbar -->\n            <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n                <div class=\"container-fluid\">\n                    <div class=\"navbar-wrapper\">\n                        <a class=\"navbar-brand\" >Setting</a>\n                    </div>\n                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n                        aria-label=\"Toggle navigation\">\n                        <span class=\"sr-only\">Toggle Nav</span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse justify-content-end\">\n                      \n                                <app-side-icon></app-side-icon>\n                         \n                       \n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar -->\n            <div class=\"content\">\n                <div class=\"container-fluid pt-4\">\n                    <div class=\"card\">\n                        <div class=\"card-header card-header-tabs card-header-primary\">\n                            <h4 class=\"card-title font-weight-bold\">Setting</h4>\n                            <button type=\"submit\" (click)=\"add()\"  class=\"btn btn-primary \">Add Token </button>\n\n                        </div>\n                        <div class=\"card-body\">\n                            <form>\n                                <div class=\"w-100\">\n                                    <h5 class=\"text-dark font-weight-bold\">Commissions:</h5>\n                                </div>\n                                <div class=\"row align-items-baseline\">\n                                        <div class=\"col-md-5\">\n                                                <div class=\"form-group bmd-form-group\">\n                                                        <label class=\"bmd-label-floating\" >Select Token/Coin:</label> \n                                                            <select class=\"form-control custom_select\"  style=\"margin-left:30%;width:50%\">\n                                                                <option value=\"\">select Token</option>\n                                                                <option *ngFor=\"let item of userList\">{{item?.userName}}</option>\n                                                            </select>\n                                                            <!-- [formControl]=\"Form.controls['user']\" -->\n                                                        \n                                                        \n                                                </div>\n                                            </div>\n                                            \n                                    <div class=\"col-md-5\">\n                                        <div class=\"form-group bmd-form-group\">\n                                            <label class=\"bmd-label-floating\">Withdraw/Coin</label>\n                                            <input type=\"text\" class=\"form-control\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                        <div class=\"form-group bmd-form-group d-inline-flex\">\n                                            <button type=\"submit\" class=\"btn btn-primary \">Save </button>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"clearfix\"></div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <app-footer> </app-footer>\n        </div>\n    </div>\n    <app-logout></app-logout>\n\n\n\n"

/***/ }),

/***/ "./src/app/setting/setting.component.scss":
/*!************************************************!*\
  !*** ./src/app/setting/setting.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/setting/setting.component.ts":
/*!**********************************************!*\
  !*** ./src/app/setting/setting.component.ts ***!
  \**********************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.scss */ "./src/app/setting/setting.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/side-icon/side-icon.component.html":
/*!****************************************************!*\
  !*** ./src/app/side-icon/side-icon.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"collapse navbar-collapse justify-content-end\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item dropdown\">\n            \n            <a class=\"nav-link\" href=\"javascript:void(0);\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n  \n<img src=\"../assets/img/setting.png\"  height=\"50\" width=\"50\"/>\n\n   \n    <p class=\"d-lg-none d-md-block\">\n      Some Actions\n    </p>\n  </a>\n  <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n    <!-- <a [routerLink]=\"['/forgot-password']\">Forgot Password</a> -->\n    <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"myprofile()\" data-toggle=\"modal\" data-target=\"#My Profile\">My Profile</a>\n    <!-- <a class=\"dropdown-item\" href=\"javascript:void(0);\" data-toggle=\"modal\" [routerLink]=\"['/change_password']\">Change Password</a> -->\n    <a class=\"dropdown-item\" href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#logout\">Logout</a>\n</div>\n</li>\n</ul>\n</div>\n"

/***/ }),

/***/ "./src/app/side-icon/side-icon.component.scss":
/*!****************************************************!*\
  !*** ./src/app/side-icon/side-icon.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/side-icon/side-icon.component.ts":
/*!**************************************************!*\
  !*** ./src/app/side-icon/side-icon.component.ts ***!
  \**************************************************/
/*! exports provided: SideIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideIconComponent", function() { return SideIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideIconComponent = /** @class */ (function () {
    function SideIconComponent(router) {
        this.router = router;
    }
    SideIconComponent.prototype.ngOnInit = function () {
    };
    SideIconComponent.prototype.myprofile = function () {
        this.router.navigateByUrl('my_profile');
    };
    SideIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-icon',
            template: __webpack_require__(/*! ./side-icon.component.html */ "./src/app/side-icon/side-icon.component.html"),
            styles: [__webpack_require__(/*! ./side-icon.component.scss */ "./src/app/side-icon/side-icon.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SideIconComponent);
    return SideIconComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" data-color=\"azure\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-3.jpg\">\n<div class=\"logo\">\n    <a href=\"dashboard.html\" class=\"simple-text logo-normal\">\n        Anzen\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\" [ngClass]=\"{ 'active': isActive == 'dashboard' }\">\n      <a class=\"nav-link\">\n        <i class=\"material-icons\">dashboard</i>\n<p><a (click)=\"tabManag('dashboard')\"  style=\"cursor:pointer\">Dashboard</a> </p>\n      </a>\n    </li>\n    <li class=\"nav-item\" [ngClass]=\"{ 'active': isActive == 'manage-user' }\">\n      <a class=\"nav-link\" >\n        <i class=\"material-icons\">group</i>\n      \n        <p><a (click)=\"tabManag('manage-user')\" style=\"cursor:pointer\">Manage Users</a> </p>\n      </a>\n    </li>\n    <li class=\"nav-item sub_items\" [ngClass]=\"{ 'active': isActive == 'announcement' }\">\n      <a class=\"nav-link\">\n          <i class=\"material-icons\">announcement</i>\n    <p><a (click)=\"tabManag('announcement')\" style=\"cursor:pointer\">Announcements</a> </p>\n      </a>\n      <a  data-target=\"#pageSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\"></a>\n      <ul class=\"collapse list-unstyled\" id=\"pageSubmenu\">\n        <li class=\"nav-item sub_items\" [ngClass]=\"{ 'active': isActive == 'assign-announcement' }\">\n          <a class=\"nav-link\" >\n        <p><a [ngClass]=\"{ 'active': isActive == 'assign-announcement' }\" (click)=\"tabManag('assign-announcement')\">Assign Annoucements</a> </p>\n\n          </a>\n        </li>\n      </ul>\n    </li>\n    <li class=\"nav-item\" [ngClass]=\"{ 'active': isActive == 'manage-content' }\">\n      <a class=\"nav-link\">\n        <i class=\"material-icons\">bubble_chart</i>\n        \n        <p><a (click)=\"tabManag('manage-content')\" style=\"cursor:pointer\">Manage Content</a> </p>\n        </a>\n    </li>\n    <li class=\"nav-item\" [ngClass]=\"{ 'active': isActive == 'token' }\">\n        <a class=\"nav-link\">\n          <i class=\"material-icons\">bubble_chart</i>\n          \n          <p><a (click)=\"tabManag('token')\" style=\"cursor:pointer\">Token Management</a> </p>\n          </a>\n      </li>\n    <li class=\"nav-item \" [ngClass]=\"{ 'active': isActive == 'setting' }\">\n      <a class=\"nav-link\">\n        <i class=\"material-icons\">settings</i>\n       <p><a (click)=\"tabManag('setting')\" style=\"cursor:pointer\">Settings</a> </p>\n      </a>\n    </li>\n    <li class=\"nav-item \" [ngClass]=\"{ 'active': isActive == 'change_password' }\">\n        <a class=\"nav-link\">\n          <i class=\"material-icons\">bubble_chart</i>\n         <p><a (click)=\"tabManag('change_password')\" style=\"cursor:pointer\">Change Password</a> </p>\n        </a>\n      </li>\n  </ul>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(route) {
        this.route = route;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.isActive = event;
        var url = window.location.href.split('/');
        var page = url[url.length - 1];
        this.isActive = page;
        console.log("isactive===>>", this.isActive);
    };
    SidebarComponent.prototype.tabManag = function (event) {
        this.isActive = event;
        var url = window.location.href.split('/');
        var page = url[url.length - 1];
        this.isActive = page;
        this.route.navigate(['/' + event]);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/terms-of-use/terms-of-use.component.html":
/*!**********************************************************!*\
  !*** ./src/app/terms-of-use/terms-of-use.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper \">\n   \n        <app-sidebar></app-sidebar>\n\n   \n\n    <div class=\"main-panel\">\n        <!-- Navbar -->\n        <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-wrapper\">\n                    <a class=\"navbar-brand\" href=\"javascript:void(0);\">Terms of Use</a>\n                </div>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n                        aria-label=\"Toggle navigation\">\n                        <span class=\"sr-only\">Toggle Nav</span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                        <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    </button>\n                <div class=\"collapse navbar-collapse justify-content-end\">\n                  \n                            <app-side-icon></app-side-icon>\n                   \n                </div>\n            </div>\n        </nav>\n        <!-- End Navbar -->\n        <div class=\"content\">\n\n            <div class=\"container-fluid pt-4\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-tabs card-header-primary\">\n                        <h4 class=\"card-title font-weight-bold\">Edit Content Management</h4>\n                        <p class=\"card-category\">Terms of Use</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"mt-3\">\n                            <!-- <textarea cols=\"80\" class=\"w-100\" rows=\"10\" id=\"ckeExample\"> \n                                       \n                                 </textarea> -->\n                            <form [formGroup]='editForm'>\n                                <fieldset class=\"global-fieldset\">\n                                    <legend>{{controls}}</legend>\n                                    <div class=\"filter-content\">\n                                        <div class=\"common-detail-box\">\n                                            <ckeditor formControlName='data' [(ngModel)]=\"mycontent\" #myckeditor [config]=\"ckeConfig\" debounce=\"500\">\n                                            </ckeditor>\n                                            <div class=\"table-button text-center mt30\">\n                                                <button class=\"btn btn-red\" (click)='save()'>Save </button>\n\n                                               \n                                                <button class=\"btn btn-danger\" [routerLink]='([\"/manage-content\"])'>Back</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </fieldset>\n                            </form>\n                        </div>\n                        <!-- <div class=\"input-group w-100 justify-content-end mt-3\">\n                            <a href=\"dashboard.html\" class=\"btn btn-primary\">Save</a>\n                        </div> -->\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <app-footer></app-footer>\n\n    </div>\n\n</div>\n<app-logout></app-logout>"

/***/ }),

/***/ "./src/app/terms-of-use/terms-of-use.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/terms-of-use/terms-of-use.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/terms-of-use/terms-of-use.component.ts":
/*!********************************************************!*\
  !*** ./src/app/terms-of-use/terms-of-use.component.ts ***!
  \********************************************************/
/*! exports provided: TermsOfUseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUseComponent", function() { return TermsOfUseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TermsOfUseComponent = /** @class */ (function () {
    function TermsOfUseComponent(formBuilder, router, service, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.route = route;
        this.editorValue = '';
        this.params = '';
        this.editForm = this.formBuilder.group({
            data: ['']
        });
    }
    TermsOfUseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log('params => ' + JSON.stringify(params));
            _this.params = params['type'];
        });
        this.service.getApi("n1/getStaticContent", 1).subscribe(function (response) {
            console.log('resp t & c >>>>>', response);
            if (response['responseCode'] == 200) {
                console.log(' STATIC CONTENTS', response);
                if (_this.params == 'terms') {
                    _this.data = response["data"]._id;
                    _this.viewData = response['data'].termsOfUse;
                    localStorage.setItem('staticId', _this.data);
                    // console.log('Terms And Conditions',this.viewData)
                }
                // else if( this.controls == 'Privacy Policy'){
                //   this.viewData = response['data'].faq
                //   console.log('Privacy Policy',this.viewData)
                // }
                _this.editForm.patchValue({
                    data: _this.viewData
                });
                // console.log("data incoming>>>>",this.editForm)
                // this.viewData = response['result'][0].
            }
            else {
                // this.service.showError(response['responseMessage'])
            }
        }, function (error) {
            console.log('error =>');
            // this.service.showError('Something Went Wrong')
        });
    };
    TermsOfUseComponent.prototype.save = function () {
        var _this = this;
        var postData = {
            "termsOfUse": this.editForm.value.data,
            "_id": localStorage.getItem('staticId')
        };
        console.log("@@@@@@@@@", this.editForm.value.data);
        this.service.postApi('n1/updateStatic', postData, 1).subscribe(function (response) {
            console.log("**********************", JSON.stringify(response));
            if (response['responseCode'] == 200) {
                console.log("Save content data - " + response);
                _this.controls = localStorage.getItem('staticId');
                console.log("cant find>>>>>", _this.controls);
                _this.service.showSuccess(response['responseMessage']);
                _this.router.navigate(['/manage-content']);
            }
            else {
                _this.service.showError(response['responseMessage']);
            }
        }, function (error) {
            _this.service.showError('Something Went Wrong');
        });
    };
    TermsOfUseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms-of-use',
            template: __webpack_require__(/*! ./terms-of-use.component.html */ "./src/app/terms-of-use/terms-of-use.component.html"),
            styles: [__webpack_require__(/*! ./terms-of-use.component.scss */ "./src/app/terms-of-use/terms-of-use.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TermsOfUseComponent);
    return TermsOfUseComponent;
}());



/***/ }),

/***/ "./src/app/token/token.component.html":
/*!********************************************!*\
  !*** ./src/app/token/token.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/token/token.component.scss":
/*!********************************************!*\
  !*** ./src/app/token/token.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/token/token.component.ts":
/*!******************************************!*\
  !*** ./src/app/token/token.component.ts ***!
  \******************************************/
/*! exports provided: TokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenComponent", function() { return TokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TokenComponent = /** @class */ (function () {
    function TokenComponent() {
    }
    TokenComponent.prototype.ngOnInit = function () {
    };
    TokenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-token',
            template: __webpack_require__(/*! ./token.component.html */ "./src/app/token/token.component.html"),
            styles: [__webpack_require__(/*! ./token.component.scss */ "./src/app/token/token.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TokenComponent);
    return TokenComponent;
}());



/***/ }),

/***/ "./src/app/user-details/user-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-details/user-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper \">\n        \n        <app-sidebar></app-sidebar>\n\n    \n    <div class=\"main-panel\">\n        <!-- Navbar -->\n        <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-wrapper\">\n                    <a class=\"navbar-brand\" >User Details</a>\n                </div>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n                    aria-label=\"Toggle navigation\">\n                    <span class=\"sr-only\">Toggle Nav</span>\n                    <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    <span class=\"navbar-toggler-icon icon-bar\"></span>\n                    <span class=\"navbar-toggler-icon icon-bar\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse justify-content-end\">\n                    \n                  \n                            <app-side-icon></app-side-icon>\n                      \n                </div>\n            </div>\n        </nav>\n        <!-- End Navbar -->\n        <div class=\"content\">\n            <div class=\"container-fluid pt-4\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12 col-md-12\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-header-tabs card-header-primary\">\n                                <div class=\"nav-tabs-navigation\">\n                                    <div class=\"nav-tabs-wrapper\">\n\n                                        <span class=\"nav-tabs-title\">{{Username}}</span>\n                                        <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                                            <li class=\"nav-item\">\n                                                <a class=\"nav-link\" [ngClass]=\"{'active': tab =='device'}\" data-toggle=\"tab\" [routerLink]=\"['/user_details',params,'device']\">\n                                                    <i class=\"material-icons\">important_devices</i> Device History\n                                                    <div class=\"ripple-container\"></div>\n                                                </a>\n                                            </li>\n                                            <li class=\"nav-item\">\n                                                <a (click)=\"ab()\" class=\"nav-link\" [ngClass]=\"{'active': tab =='transaction'}\" data-toggle=\"tab\" [routerLink]=\"['/user_details',params,'transaction']\">\n                                                    <i class=\"material-icons\">credit_card</i> Transaction History\n                                                    <div class=\"ripple-container\"></div>\n                                                </a>\n                                            </li>\n\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane active\"  [ngClass]=\"{'active': tab =='device'}\" *ngIf=\"(tab == 'device')\" id=\"device\">\n\n                                        <div class=\"border p-3\"> \n                                             <div class=\"row\">\n                                                <div class=\"col-lg-3 col-md-6\">\n                                                    <h5 class=\"font-weight-bold my-2\">Last Device</h5>\n                                                   \n                                                    <p class=\"m-0\">{{nameClicked.signInHistoryArray[0].lastDevice}}</p>\n                                                </div>\n                                              \n                                                <div class=\"col-lg-3 col-md-6\">\n                                                    <h5 class=\"font-weight-bold my-2\">Last Date</h5>\n                                                \n                                                       {{nameClicked.signInHistoryArray[0].lastSignIn|date:'yyyy-MM-dd HH:mm:ss'}}\n                                                   \n                                                </div>\n                                                <div class=\"col-lg-3 col-md-6\">\n                                                    <h5 class=\"font-weight-bold my-2\">Status</h5>\n                                                    <p class=\"text-danger m-0\">{{nameClicked.status}}</p>\n                                                </div>\n                                            </div>\n                                        </div> \n                                        <form [formGroup]=\"dashboardForm\" > \n                                        <div class=\"table-responsive mt-3\">\n                                            <table class=\"table table-bordered\">\n                                                <thead class=\"border-top text-primary\">\n                                                    <tr>\n                                                        <th>Device</th>\n                                                        <th>Last Sign In</th>\n                                                        <th>Logout</th>\n                                                        <th>Location</th>\n                                                        <th>Status</th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let item of event | paginate: { itemsPerPage: 10, currentPage: 1, totalItems: 10 };index as i\">\n                                                            <!-- //{{item.date * 1000 | date:'yyyy-MM-dd HH:mm:ss Z'}} -->\n                                                        <td>{{item.lastDevice}}</td>\n                                                        <td>{{item.lastSignIn|date:'yyyy-MM-dd HH:mm:ss'}}</td>\n                                                        <td>{{item.logout|date:'yyyy-MM-dd HH:mm:ss'}}</td>\n                                                        <td>{{item.location}}</td>\n                                                        <td>{{item.devicestatus}}</td>\n                                                        <!-- <td>{{item.lastDevice}}</td> -->\n                                                        <!-- <td>\n\n                                                            <div class=\"tg-list-item\">\n                                                                <a class=\"btn btn-sm \" (click)=\"userdel(item._id)\">\n                                                                    <i class=\"fa fa-status\"> </i>Change status</a>\n                                                            </div>\n\n                                                        </td> -->\n\n                                                    </tr>\n\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                        </form>\n                                        <!-- <div class=\"tbl_footer\">\n                                            <div class=\"row align-items-center flex-wrap\">\n                                                <div class=\"col-md-7\">\n                                                    <p class=\"small m-0\">Showing results 7 of 14 out of 20</p>\n                                                </div>\n                                                <div class=\"col-md-5 text-md-right\">\n                                                    <ul class=\"pagination d-inline-flex my-2\">\n                                                        <li class=\"page-item\">\n                                                            <a class=\"page-link\" href=\"#\">Previous</a>\n                                                        </li>\n                                                        <li class=\"page-item\">\n                                                            <a class=\"page-link\" href=\"#\">1</a>\n                                                        </li>\n                                                        <li class=\"page-item\">\n                                                            <a class=\"page-link\" href=\"#\">2</a>\n                                                        </li>\n                                                        <li class=\"page-item\">\n                                                            <a class=\"page-link\" href=\"#\">...</a>\n                                                        </li>\n                                                        <li class=\"page-item\">\n                                                            <a class=\"page-link\" href=\"#\">20</a>\n                                                        </li>\n                                                        <li class=\"page-item\">\n                                                            <a class=\"page-link\" href=\"#\">Next</a>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div> -->\n                                    </div>\n                                    <div class=\"tab-pane\"  [ngClass]=\"{'active': tab =='transaction'}\" *ngIf=\"(tab == 'transaction')\" id=\"transaction\">\n                                        <div class=\"type_trans text-md-right\">\n                                            <form class=\"d-inline-flex ml-md-auto\">\n                                                <div class=\"input-group\">\n                                                    <select class=\"form-control custom_select\">\n                                                        <option value=\"\">Type</option>\n                                                        <option value=\"\">Diposit</option>\n                                                        <option value=\"\">Withdraw</option>\n                                                    </select>\n                                                </div>\n                                            </form>\n                                        </div>\n                                        <div class=\"table-responsive mt-3\">\n                                            <table class=\"table table-bordered\">\n                                                <thead class=\"border-top text-primary\">\n                                                    <tr>\n                                                        <!-- <th>Type</th> -->\n                                                        <th>Address</th>\n                                                        <th>Amount</th>\n                                                        <th>Date/Time</th>\n                                                        <th>Transaction Hash</th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                             <tr *ngFor=\"let item of modified | paginate: { itemsPerPage: 10, currentPage: 1, totalItems: 10 };index as i\">\n\n                                                                <!-- <td>{{item.lastDevice}}</td> -->\n                                                                <td>{{item.to}}</td>\n                                                                <td>{{item.value}}</td>\n                                                                <td>{{item.timeStamp}}</td>\n                                                                <td>{{item.hash}}</td>\n                                                                <!-- <td>{{item.lastDevice}}</td> -->\n                                                                <!-- <td>\n        \n                                                                    <div class=\"tg-list-item\">\n                                                                        <a class=\"btn btn-sm \" (click)=\"userdel(item._id)\">\n                                                                            <i class=\"fa fa-status\"> </i>Change status</a>\n                                                                    </div>\n        \n                                                                </td> -->\n        \n                                                            </tr>\n        \n                                                    <!-- <tr>\n                                                        <td>Deposite</td>\n                                                        <td>karhja2343</td>\n                                                        <td>0.00028</td>\n                                                        <td class=\"text-nowrap\">13/09/2018 | 04:44 PM</td>\n                                                        <td>karhja2343</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Deposite</td>\n                                                        <td>karhja2343</td>\n                                                        <td>0.00028</td>\n                                                        <td class=\"text-nowrap\">13/09/2018 | 04:44 PM</td>\n                                                        <td>karhja2343</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Deposite</td>\n                                                        <td>karhja2343</td>\n                                                        <td>0.00028</td>\n                                                        <td class=\"text-nowrap\">13/09/2018 | 04:44 PM</td>\n                                                        <td>karhja2343</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Deposite</td>\n                                                        <td>karhja2343</td>\n                                                        <td>0.00028</td>\n                                                        <td class=\"text-nowrap\">13/09/2018 | 04:44 PM</td>\n                                                        <td>karhja2343</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Deposite</td>\n                                                        <td>karhja2343</td>\n                                                        <td>0.00028</td>\n                                                        <td class=\"text-nowrap\">13/09/2018 | 04:44 PM</td>\n                                                        <td>karhja2343</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Deposite</td>\n                                                        <td>karhja2343</td>\n                                                        <td>0.00028</td>\n                                                        <td class=\"text-nowrap\">13/09/2018 | 04:44 PM</td>\n                                                        <td>karhja2343</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Deposite</td>\n                                                        <td>karhja2343</td>\n                                                        <td>0.00028</td>\n                                                        <td class=\"text-nowrap\">13/09/2018 | 04:44 PM</td>\n                                                        <td>karhja2343</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Deposite</td>\n                                                        <td>karhja2343</td>\n                                                        <td>0.00028</td>\n                                                        <td class=\"text-nowrap\">13/09/2018 | 04:44 PM</td>\n                                                        <td>karhja2343</td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>Deposite</td>\n                                                        <td>karhja2343</td>\n                                                        <td>0.00028</td>\n                                                        <td class=\"text-nowrap\">13/09/2018 | 04:44 PM</td>\n                                                        <td>karhja2343</td>\n                                                    </tr> -->\n\n\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                        <!-- <div class=\"tbl_footer\">\n                                            <div class=\"row align-items-center flex-wrap\">\n                                                <div class=\"col-md-7\">\n                                                    <p class=\"small m-0\">Showing results 7 of 14 out of 20</p>\n                                                </div>\n                                                <div class=\"col-md-5 text-md-right\">\n                                                    <ul class=\"pagination d-inline-flex my-2\">\n                                                        <li class=\"page-item\">\n                                                            <a class=\"page-link\" href=\"#\">Previous</a>\n                                                        </li>\n                                                        <li class=\"page-item\">\n                                                            <a class=\"page-link\" href=\"#\">1</a>\n                                                        </li>\n                                                        <li class=\"page-item\">\n                                                            <a class=\"page-link\" href=\"#\">2</a>\n                                                        </li>\n                                                        <li class=\"page-item\">\n                                                            <a class=\"page-link\" href=\"#\">...</a>\n                                                        </li>\n                                                        <li class=\"page-item\">\n                                                            <a class=\"page-link\" href=\"#\">20</a>\n                                                        </li>\n                                                        <li class=\"page-item\">\n                                                            <a class=\"page-link\" href=\"#\">Next</a>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                        </div> -->\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n\n    </div>\n</div>\n\n<app-logout></app-logout>"

/***/ }),

/***/ "./src/app/user-details/user-details.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-details/user-details.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-details/user-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-details/user-details.component.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(router, service, formBuilder, route) {
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.route = route;
        this.event = [];
        this.modified = [];
        this.data = [];
        this.dashboardForm = this.formBuilder.group({});
        // signInHistoryArray[0].lastDevice
        this.nameClicked = this.service.nameClicked;
        this.Username = this.nameClicked.userName;
        console.log("@mit", this.nameClicked.signInHistoryArray[0].lastDevice);
        console.log("@mit", this.nameClicked.signInHistoryArray[0].lastSignIn);
        this.date = this.nameClicked.signInHistoryArray[0].lastSignIn;
        console.log(this.nameClicked.signInHistoryArray[0].lastDevice);
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // console.log('params => '+ JSON.stringify(params))
            _this.params = params['type'];
            console.log("type", _this.params);
            _this.tab = params['tab'];
        });
        this.name(this.params);
        // this.ab();
    };
    UserDetailsComponent.prototype.name = function (val) {
        var _this = this;
        var url = "userDeviceHistory/" + this.params;
        var logindata = {
            "pageNumber": 1
        };
        console.log("ID------->", JSON.stringify(logindata));
        for (var val_1 in logindata) {
            if (logindata[val_1] == '') {
                delete logindata[val_1];
            }
        }
        this.service.postApi(url, logindata, 1).subscribe(function (response) {
            // this.responseData = response;
            console.log('res', JSON.stringify(response));
            if (response['responseCode'] == 200) {
                console.log('  found successfully>>>', JSON.stringify(response));
                _this.data = response['data']['dataList'];
                _this.event = _this.data;
                console.log("@@@@@>>>", JSON.stringify(_this.event));
                _this.service.showSuccess(response['responseMessage']);
                // this.router.navigate(['/user_details']);
                localStorage.userId = response["data"]["docs"];
            }
            else {
                _this.service.showError(response['responseMessage']);
            }
        }, function (error) {
            console.log('error =>', error);
            _this.service.showError('Something Went Wrong');
        });
    };
    UserDetailsComponent.prototype.ab = function () {
        var _this = this;
        var url = "userTransactionHistory/";
        var logindata = {
            "walletAddress": this.params
        };
        this.service.postApi(url, logindata, 1).subscribe(function (response) {
            console.log(response);
            if (response.responseCode == 200) {
                _this.modified = response.result;
            }
            else if (response.responseCode == 400) {
                console.log("response.responseCode = 400");
            }
        });
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.scss */ "./src/app/user-details/user-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/view-details/view-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view-details/view-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper \">\n      \n    <app-sidebar></app-sidebar>\n\n  \n  <div class=\"main-panel\">\n    <!-- Navbar -->\n    <nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top \">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" href=\"javascript:void(0);\">User Details</a>\n        </div>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n          <span class=\"sr-only\">Toggle Nav</span>\n          <span class=\"navbar-toggler-icon icon-bar\"></span>\n          <span class=\"navbar-toggler-icon icon-bar\"></span>\n          <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\">\n       \n         \n             \n              <app-side-icon></app-side-icon>\n            \n          \n        </div>\n      </div>\n    </nav>\n    <!-- End Navbar -->\n    \n    <div class=\"content\">\n          <div class=\"container-fluid pt-4\">\n                  <div class=\"card\">\n\n                          <div class=\"card-header card-header-tabs card-header-primary\">\n                                  <h4 class=\"card-title font-weight-bold\">User Details</h4>\n\n                              </div>\n                              <div class=\"card-body\">\n\n\n       \n                  <br>\n                  \n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-5\"><b style=\"color:black\">Name :</b></label>\n                        <div class=\"col-md-7\">\n                             \n                           <label> <b  style=\"color:black\">{{userData.userName}}</b></label>\n                        </div>\n                    </div>\n                   <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-5\"><b style=\"color:black\">Email :</b></label>\n                        <div class=\"col-md-7\">\n                            <label><b  style=\"color:black\">{{userData.email}}</b></label>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-5\"><b style=\"color:black\">Phone No:</b></label>\n                        <div class=\"col-md-7\">\n                            <label><b  style=\"color:black\">{{userData.mobileNumber}}</b></label>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-5\"><b style=\"color:black\">Wallet Address:</b></label>\n                        <div class=\"col-md-7\">\n                            <label><b  style=\"color:black\">{{userData.walletAddress}}</b></label>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-5\"><b style=\"color:black\">Status :</b></label>\n                        <div class=\"col-md-7\">\n                            <label><b style=\"color:black\">{{userData.status}}</b></label>\n                        </div>\n                    </div>\n                  \n                    <br> \n                    <div  class=\"text-left mt40\">\n                        <!-- <a href=\"edit-profile.html\" class=\"btn btn-large  max-WT-200 font-100 btn-green\">Edit Profile</a> -->\n                        <button  (click)=\"back()\" class=\"btn btn-large  max-WT-200 font-100 btn-grey ml5 \">Back</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    \n            </div>\n          </div>\n          \n        \n<!--      \n            <div class=\"content\">\n              <div class=\"container-fluid  pt-4\">\n                      <div class=\"card my-3\"> -->\n                              <!-- <div class=\"card-header card-header-primary\"> -->\n                                  <!-- <div class=\"row align-items-center\">\n                                     \n                                      <div class=\"col-md-4 text-md-right\">\n\n                                           \n    <div class=\"content-section\">\n\n          <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n              <div class=\"main-block-innner mb40 mt40\">\n                  <div class=\"add-store-block input-style\">\n                     \n                    <br>\n                    <br>  <br>  <br>  <br>  <br>  <br>\n                      <div class=\"user-profile\">\n                          <div class=\"image-box\">\n                              <img src=\"img/profile-img.jpg\" class=\"profile-pic\">\n                          </div>\n                      </div>\n                      <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Name :</label>\n                          <div class=\"col-md-7\">\n                               \n                              <label>{{userData.userName}}</label>\n                          </div>\n                      </div>\n                     <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Email :</label>\n                          <div class=\"col-md-7\">\n                              <label>{{userData.email}}</label>\n                          </div>\n                      </div>\n                      <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Phone No:</label>\n                          <div class=\"col-md-7\">\n                              <label>{{userData.mobileNumber}}</label>\n                          </div>\n                      </div>\n                      <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Wallet Address:</label>\n                          <div class=\"col-md-7\">\n                              <label>{{userData.walletAddress}}</label>\n                          </div>\n                      </div>\n                      <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Status :</label>\n                          <div class=\"col-md-7\">\n                              <label>{{userData.status}}</label>\n                          </div>\n                      </div> -->\n                  \n                      <!-- <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Last Sign-In Device :</label>\n                          <div class=\"col-md-7\">\n                              <label>{{userData. signInHistoryArray[0].lastDevice}}</label>\n                             \n                          </div>\n                      </div> -->\n                      <!-- <div class=\"form-group row align-items-baseline\">\n                          <label class=\"col-md-5\">Address :</label>\n                          <div class=\"col-md-7\">\n                              <label>abc</label>\n                          </div>\n                      </div> -->\n                      <!-- <div class=\"text-left mt40\"> -->\n                          <!-- <a href=\"edit-profile.html\" class=\"btn btn-large  max-WT-200 font-100 btn-green\">Edit Profile</a> -->\n                          <!-- <a (click)=\"back()\" class=\"btn btn-large  max-WT-200 font-100 btn-grey ml5 \">Back</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n       -->\n                                        \n\n\n              <!-- </div> -->\n\n            <!-- </div>\n            </div>\n            </div> -->\n    <app-footer> </app-footer>\n \n\n\n<app-logout></app-logout>"

/***/ }),

/***/ "./src/app/view-details/view-details.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/view-details/view-details.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-details/view-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-details/view-details.component.ts ***!
  \********************************************************/
/*! exports provided: ViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDetailsComponent", function() { return ViewDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// import { Component, OnInit } from '@angular/core';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Component({
//   selector: 'app-view-details',
//   templateUrl: './view-details.component.html',
//   styleUrls: ['./view-details.component.scss']
// })
// export class ViewDetailsComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// }



var ViewDetailsComponent = /** @class */ (function () {
    function ViewDetailsComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.userData = this.service.userdata;
        console.log(this.userData);
    }
    ViewDetailsComponent.prototype.ngOnInit = function () {
        console.log(this.userData.userName);
    };
    ViewDetailsComponent.prototype.back = function () {
        this.router.navigate(['/manage-user']);
    };
    ViewDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-details',
            template: __webpack_require__(/*! ./view-details.component.html */ "./src/app/view-details/view-details.component.html"),
            styles: [__webpack_require__(/*! ./view-details.component.scss */ "./src/app/view-details/view-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewDetailsComponent);
    return ViewDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Admin/Desktop/Anzenadmin14oct/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map