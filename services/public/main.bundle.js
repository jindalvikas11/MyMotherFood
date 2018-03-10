webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#main {\n    padding: 20px;\n}\n\n.home-toggle a{\n    color: #fff;\n    margin-left: -6px;\n    width: 120px;\n    margin-top:20px;\n}\n\n.overlay{\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    z-index: -1;\n    background-color: rgba(0,0,0,0.5);\n}\n\n/* The side navigation menu */\n\n.sidenav {\n    height: 100%; /* 100% Full-height */\n    width: 0; /* 0 width - change this with JavaScript */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    right: 0;\n    background-color: rgba(10,10,10,1); /* Black*/\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 60px; /* Place content 60px from the top */\n    -webkit-transition: 0.5s;\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n}\n\n/* The navigation menu links */\n\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n\n/* When you mouse over the navigation links, change their color */\n\n.sidenav a:hover {\n    color: #f1f1f1;\n}\n\n/* Position and style the close button (top right corner) */\n\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n}\n\n.menuicon{\n    margin-top: 15px;\n    margin-right: 15px;\n}\n\n.menuicon div{\n    width: 35px;\n    height: 5px;\n    background-color: #ddd;\n    margin: 6px 0;\n}\n\n.cart{\n    background-image: url('cart.faa1edaf50bb3d065d5e.png');\n    background-size: 50px 50px;\n    width: 50px;\n    height: 50px;\n    margin-top: 15px;\n    color: white;\n    font-size: 13px;\n}\n\n.main-action{\n    margin-top: 15px;\n    margin-right: 15px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\"></div>\n\n<div class=\"menuicon float-right\" (click)=\"openNav()\" *ngIf=\"isLoggedIn()\">\n    <div></div>\n    <div></div>\n    <div></div>\n</div>\n\n\n<form [formGroup]=\"radioGroupForm\" class=\"float-right main-action\">\n  <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\n    <label ngbButtonLabel class=\"btn-primary\" *ngIf=\"!isLoggedIn()\">\n      <input ngbButton type=\"radio\" value=\"home\">Home\n    </label>\n    <label ngbButtonLabel class=\"btn-primary\" *ngIf=\"!isLoggedIn()\">\n      <input ngbButton type=\"radio\" value=\"signup\">Sign Up\n    </label>\n    <label ngbButtonLabel class=\"btn-primary\" *ngIf=\"!isLoggedIn()\">\n      <input ngbButton type=\"radio\" value=\"signin\">Sign In\n    </label>\n    <label ngbButtonLabel class=\"btn-primary\" *ngIf=\"isLoggedIn()\">\n      <input ngbButton type=\"radio\" value=\"signout\">Sign Out\n    </label>\n  </div>\n</form>\n\n\n<div id=\"mySidenav\" class=\"sidenav\">\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n  <a class=\"nav-link\" routerLink=\"home\" routerLinkActive=\"active\" (click)=\"closeNav()\">Food Items</a>\n  <a class=\"nav-link\" routerLink=\"about\" routerLinkActive=\"active\" (click)=\"closeNav()\">Orders</a>\n  <a class=\"nav-link\" routerLink=\"contact\" routerLinkActive=\"active\" (click)=\"closeNav()\">Credits</a>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-1\">\n    <img src=\"../assets/logo.png\" width=\"80px\" height=\"100px\">\n  </div>\n  <div class=\"col-md-5\">\n    <div class=\"logoText\">My Mother's Food</div>\n    <h5>{{getWelcomeMessage()}}</h5>\n  </div>\n  <div class=\"col-md-1 offset-md-5\">\n    <div class=\"cart\" *ngIf=\"isLoggedIn()\" (click)=\"showCart()\">{{data.getTotalItemInCart()}}</div>      \n  </div>\n</div>\n\n\n<div id=\"main\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_info_service__ = __webpack_require__("./src/app/providers/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_service__ = __webpack_require__("./src/app/providers/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__("./src/app/providers/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(info, data, rest, config, formBuilder) {
        this.info = info;
        this.data = data;
        this.rest = rest;
        this.formBuilder = formBuilder;
        this.title = 'app';
        var loggedIn = window.localStorage.getItem("loggedIn");
        if (loggedIn) {
            this.data.getAllInfo();
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        this.radioGroupForm = this.formBuilder.group({
            'model': 'home'
        });
        this.onChanges();
    };
    AppComponent.prototype.onChanges = function () {
        var _this = this;
        this.radioGroupForm.valueChanges.subscribe(function (value) {
            if (value.model === 'home') {
                window.location.href = '/public/#/home';
            }
            else if (value.model === 'signup') {
                window.location.href = '/public/#/signup';
            }
            else if (value.model === 'signin') {
                window.location.href = '/public/#/signin';
            }
            else {
                _this.signout();
                _this.radioGroupForm.setValue({
                    model: 'signin'
                });
            }
        });
    };
    AppComponent.prototype.signout = function () {
        this.info.loggedIn = false;
        window.location.href = '/public/#/signin';
        window.localStorage.removeItem("loggedIn");
        this.rest.signout().subscribe(function () {
        }, function (err) {
        });
    };
    AppComponent.prototype.getWelcomeMessage = function () {
        if (this.info.loggedIn) {
            return 'Welcome ' + this.data.consumer.userInfo.firstName + ' ' + this.data.consumer.userInfo.lastName + ' !';
        }
        else {
            return '';
        }
    };
    AppComponent.prototype.showCart = function () {
        window.location.href = '/public/#/cart';
    };
    AppComponent.prototype.isLoggedIn = function () {
        return window.localStorage.getItem("loggedIn");
    };
    AppComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
        // document.getElementById("main").style.marginRight = "250px";  
    };
    /* Set the width of the side navigation to 0 */
    AppComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
        //document.getElementById("main").style.marginRight = "0";  
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbPopoverConfig */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_info_service__["a" /* InfoService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_service__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbPopoverConfig */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signin_signin_component__ = __webpack_require__("./src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_rest_service__ = __webpack_require__("./src/app/providers/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_info_service__ = __webpack_require__("./src/app/providers/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_data_service__ = __webpack_require__("./src/app/providers/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__win_service__ = __webpack_require__("./src/app/win.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__consumer_home_consumer_home_component__ = __webpack_require__("./src/app/consumer-home/consumer-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__supplier_home_supplier_home_component__ = __webpack_require__("./src/app/supplier-home/supplier-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipe_capitalize_pipe__ = __webpack_require__("./src/app/pipe/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_inputtext__ = __webpack_require__("./node_modules/primeng/inputtext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_inputtext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_inputtext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_progressbar__ = __webpack_require__("./node_modules/primeng/progressbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__food_menu_food_menu_component__ = __webpack_require__("./src/app/food-menu/food-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__cart_cart_component__ = __webpack_require__("./src/app/cart/cart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'signin',
        component: __WEBPACK_IMPORTED_MODULE_8__signin_signin_component__["a" /* SigninComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'cart',
        component: __WEBPACK_IMPORTED_MODULE_20__cart_cart_component__["a" /* CartComponent */]
    },
    {
        path: 'consumer/home',
        component: __WEBPACK_IMPORTED_MODULE_14__consumer_home_consumer_home_component__["a" /* ConsumerHomeComponent */]
    },
    {
        path: 'supplier/home',
        component: __WEBPACK_IMPORTED_MODULE_15__supplier_home_supplier_home_component__["a" /* SupplierHomeComponent */]
    },
    {
        path: 'foodmenu/:id',
        component: __WEBPACK_IMPORTED_MODULE_19__food_menu_food_menu_component__["a" /* FoodMenuComponent */]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__consumer_home_consumer_home_component__["a" /* ConsumerHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__supplier_home_supplier_home_component__["a" /* SupplierHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pipe_capitalize_pipe__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_19__food_menu_food_menu_component__["a" /* FoodMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_20__cart_cart_component__["a" /* CartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(appRoutes, {
                    useHash: true
                }),
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17_primeng_inputtext__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_progressbar__["ProgressBarModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__providers_rest_service__["a" /* RestService */],
                __WEBPACK_IMPORTED_MODULE_10__providers_info_service__["a" /* InfoService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_12__win_service__["a" /* WindowRef */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"float-right\" id=\"checkout\"></div>\n\n<br/><br/>\n\n<table class=\"table table-dark\">\n  <thead>\n    <tr>\n      <th scope=\"col\"></th>\n      <th scope=\"col\">Food</th>\n      <th scope=\"col\">Supplier Name</th>\n      <th scope=\"col\">Quantity</th>\n      <th scope=\"col\">Total Price</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let cart of data.consumer.cart\">\n      <td>\n        <img src=\"{{cart.food.img ? ('/File/ReadFile/' + cart.food.img) : '../assets/logow.png'}}\" alt=\"Image Not Found\" width=\"80px\"\n          height=\"80px\" />\n      </td>\n      <th class=\"align-middle\">{{ cart.food.name }}</th>\n      <td class=\"align-middle\">{{ cart.supplier.firstName + ' ' + cart.supplier.lastName}}</td>\n      <td class=\"align-middle\">{{ cart.food.quantity }}</td>\n      <td class=\"align-middle\">{{ cart.food.quantity * cart.food.price }}</td>\n      <td class=\"align-middle\">\n        <button class=\"btn btn-danger\" (click)=\"onDelete(cart)\">Delete</button>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/***/ (function(module, exports) {

module.exports = "th, td {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_service__ = __webpack_require__("./src/app/providers/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_service__ = __webpack_require__("./src/app/providers/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__win_service__ = __webpack_require__("./src/app/win.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = /** @class */ (function () {
    function CartComponent(data, rest, windowRef) {
        this.data = data;
        this.rest = rest;
        this.windowRef = windowRef;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data.consumer) {
            this.total = this.data.getTotalAmountInCart();
            this.addPaypalPaymentButton();
        }
        else {
            this.data.dataReceived.subscribe(function () {
                _this.total = _this.data.getTotalAmountInCart();
                _this.addPaypalPaymentButton();
            });
        }
    };
    CartComponent.prototype.onDelete = function (cart) {
        var _this = this;
        var body = {
            id: cart.id
        };
        this.rest.deleteFromCart(body).subscribe(function (data) {
            var cartList = _this.data.consumer.cart;
            var indexOfObj = cartList.indexOf(cart);
            cartList.splice(indexOfObj, 1);
            _this.total = _this.data.getTotalAmountInCart();
        }, function (err) {
        });
    };
    CartComponent.prototype.addPaypalPaymentButton = function () {
        var that = this;
        this.windowRef.nativeWindow.paypal.Button.render({
            env: 'sandbox',
            // PayPal Client IDs - replace with your own
            // Create a PayPal app: https://developer.paypal.com/developer/applications/create
            client: {
                sandbox: 'AVvU_Dfd9-51G70ZIblKWL7MS0zFdtfOiTiuAFrNngQlEQatdtLcTZE5arDHnBebDjWGVrm_Nmj5x-GK',
                production: '<insert production client id>'
            },
            // Show the buyer a 'Pay Now' button in the checkout flow
            commit: true,
            // payment() is called when the button is clicked
            payment: function (data, actions) {
                // Make a call to the REST api to create the payment
                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: { total: that.total, currency: 'USD' }
                            }
                        ]
                    }
                });
            },
            // onAuthorize() is called when the buyer approves the payment
            onAuthorize: function (data, actions) {
                // Make a call to the REST api to execute the payment
                return actions.payment.execute().then(function () {
                    window.alert('Payment Complete!');
                });
            }
        }, '#checkout');
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_service__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_3__win_service__["a" /* WindowRef */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/consumer-home/consumer-home.component.css":
/***/ (function(module, exports) {

module.exports = ".supplier-list img{\n    height: 253px;\n}\n\n*{\n    color: white;\n}"

/***/ }),

/***/ "./src/app/consumer-home/consumer-home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"loaderOverlay\"  *ngIf=\"loading\">\n  <div class=\"loader align-middle\"></div>>\n</div>\n\n<div class=\"row supplier-list\">\n  <div class=\"col-sm-3 col-md-3\" *ngFor=\"let supplier of supplierList\">\n    <hr/>\n    <div class=\"thumbnail\" (click)=\"showMenu(supplier)\">\n      <div class=\"supplier-list-container\">\n        <img src=\"../assets/logow.png\" alt=\"Image Not Found\" width=\"512\" height=\"512\" class=\"img-thumbnail\">\n      </div>\n      <div class=\"caption\">\n\n        <div class=\"float-left\">{{(supplier.first_name) | capitalize}}</div>\n        <small class=\"float-right\">{{(supplier.distance / 1000 / 1.6)  | number}} mi</small>\n        <br/>\n        <div class=\"float-left\">{{(supplier.last_name) | capitalize}}</div>        \n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/consumer-home/consumer-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumerHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_info_service__ = __webpack_require__("./src/app/providers/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_service__ = __webpack_require__("./src/app/providers/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__("./src/app/providers/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("./src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConsumerHomeComponent = /** @class */ (function () {
    function ConsumerHomeComponent(info, rest, data) {
        this.info = info;
        this.rest = rest;
        this.data = data;
        this.supplierList = new Array;
        this.loading = true;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */];
    }
    ConsumerHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.getConsumerDetails().subscribe(function (data) {
            if (data.firstName) {
                _this.user = data;
                _this.data.firstName = data.firstName;
                _this.data.lastName = data.lastName;
                _this.info.loggedIn = true;
            }
            else {
                _this.info.loggedIn = false;
                window.location.href = '/public/#/signin';
            }
        }, function (err) {
            _this.info.loggedIn = false;
            window.location.href = '/public/#/signin';
        });
        this.getSuppliers();
    };
    ConsumerHomeComponent.prototype.getSuppliers = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            var coords = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            _this.rest.getSupplierList(coords).subscribe(function (results) {
                _this.loading = false;
                _this.supplierList = results;
            }, function (err) {
            });
        });
    };
    ConsumerHomeComponent.prototype.showMenu = function (supplier) {
        window.location.href = '/public/#/foodmenu/' + supplier.id;
    };
    ConsumerHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-consumer-home',
            template: __webpack_require__("./src/app/consumer-home/consumer-home.component.html"),
            styles: [__webpack_require__("./src/app/consumer-home/consumer-home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_info_service__["a" /* InfoService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_service__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */]])
    ], ConsumerHomeComponent);
    return ConsumerHomeComponent;
}());



/***/ }),

/***/ "./src/app/food-menu/food-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row food-items\">\n  <div class=\"col-sm-3 col-md-3\" *ngFor=\"let food of foodList\">\n    <hr/>\n    <div class=\"thumbnail\">\n      <div class=\"food-item-container\">\n        <img src=\"{{food.img ? ('/File/ReadFile/' + food.img) : '../assets/logow.png'}}\" alt=\"Image Not Found\" [class.opaque]=\"!food.img\" width=\"512\" height=\"512\" class=\"img-thumbnail\">\n        <button class=\"btn btn-primary float-right\" (click)=\"addToCart(food, $event)\">Add To Cart</button>\n      </div>\n      <div class=\"caption\">\n\n        <div class=\"float-left font-weight-bold\">{{food.name | capitalize}}</div>\n        <div class=\"float-right font-weight-bold\">{{food.price | currency}}</div>\n        <br/>\n        <div style=\"font-family:cursive; color:#c1bdbd\">{{food.description | capitalize}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/food-menu/food-menu.component.scss":
/***/ (function(module, exports) {

module.exports = "input {\n  border: 2px solid #0275d8;\n  height: 44px;\n  -webkit-transition: 0.2s ease all;\n  transition: 0.2s ease all; }\n\ninput:focus ~ .floating-label {\n  top: 8px;\n  color: #0275d8;\n  left: 27px;\n  font-size: 11px;\n  opacity: 1; }\n\ninput:focus {\n  height: 66px; }\n\ninput:not(:focus):valid ~ .floating-label {\n  display: none; }\n\n.floating-label {\n  position: absolute;\n  pointer-events: none;\n  left: 27px;\n  top: 11px;\n  -webkit-transition: 0.2s ease all;\n  transition: 0.2s ease all;\n  color: #ccc; }\n\n.dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white; }\n\n.dark-modal .close {\n  color: white; }\n\ntable th, table td {\n  text-align: center; }\n\n.food-items {\n  color: white; }\n\n.food-item-container button {\n  opacity: 0;\n  position: absolute;\n  top: 235px; }\n\n.food-item-container button:nth-child(2) {\n  left: 25px; }\n\n.food-item-container button:nth-child(3) {\n  right: 25px; }\n\n.food-item-container:hover button {\n  opacity: 1; }\n\n.food-add-item {\n  border: 1px dotted #ccc;\n  padding: 34%;\n  text-align: center;\n  margin-top: 14%;\n  font-size: 50px; }\n\np-progressbar {\n  width: 92%;\n  margin-top: -20px;\n  margin-left: 4%; }\n\n.select-img {\n  margin-left: 4%; }\n\n.select-img span {\n  width: 92%; }\n\n.food-items img {\n  height: 253px; }\n\n.food-items .opaque {\n  opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/food-menu/food-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_info_service__ = __webpack_require__("./src/app/providers/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service__ = __webpack_require__("./src/app/providers/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_service__ = __webpack_require__("./src/app/providers/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_cart__ = __webpack_require__("./src/app/models/cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FoodMenuComponent = /** @class */ (function () {
    //cartItemList: Array<Cart>;
    function FoodMenuComponent(route, router, info, rest, data) {
        this.route = route;
        this.router = router;
        this.info = info;
        this.rest = rest;
        this.data = data;
    }
    FoodMenuComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.showFoodList(id);
    };
    FoodMenuComponent.prototype.showFoodList = function (supplierId) {
        var _this = this;
        var queryParams = '?isConsumer=true&supplierId=' + supplierId;
        this.rest.getSupplierFood(queryParams).subscribe(function (data) {
            _this.info.loggedIn = true;
            _this.foodList = data;
        }, function (err) {
            alert(err.message);
        });
    };
    FoodMenuComponent.prototype.addToCart = function (food, e) {
        var _this = this;
        var target = e.target;
        var item = {
            supplierId: food.supplierId,
            foodId: food.id,
            quantity: 1
        };
        var tempItem = this.data.consumer.cart.filter(function (cartItem) {
            return cartItem.food.id === food.id;
        });
        if (tempItem && tempItem.length > 0) {
            item['id'] = tempItem[0].id;
            item['quantity'] = tempItem[0].food.quantity + 1;
        }
        this.rest.addToCart(item).subscribe(function (data) {
            _this.flyToCart(target);
            if (tempItem && tempItem.length > 0) {
                tempItem[0].food.quantity++;
            }
            else {
                var tempItem_1 = new __WEBPACK_IMPORTED_MODULE_6__models_cart__["a" /* Cart */];
                tempItem_1.id = data.id;
                tempItem_1.supplier.id = food.supplierId;
                tempItem_1.food.quantity = 1;
                tempItem_1.food.id = food.id;
                _this.data.consumer.cart.push(tempItem_1);
            }
        }, function (err) {
            alert(err.message);
        });
    };
    FoodMenuComponent.prototype.flyToCart = function (target) {
        var that = this;
        var cart = __WEBPACK_IMPORTED_MODULE_7_jquery__('.cart');
        var imgtodrag = __WEBPACK_IMPORTED_MODULE_7_jquery__(target).parent().find("img").eq(0);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
            })
                .appendTo(__WEBPACK_IMPORTED_MODULE_7_jquery__('body'))
                .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
            }, 1000, 'linear');
            imgclone.animate({
                'width': 0,
                'height': 0,
                'padding': 0,
                'border-width': '0px'
            }, function () {
                that.data.getTotalItemInCart();
            });
        }
    };
    FoodMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-food-menu',
            template: __webpack_require__("./src/app/food-menu/food-menu.component.html"),
            styles: [__webpack_require__("./src/app/food-menu/food-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__providers_info_service__["a" /* InfoService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_rest_service__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_service__["a" /* DataService */]])
    ], FoodMenuComponent);
    return FoodMenuComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n@-webkit-keyframes rotatephoto {\n    0%   {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n    25%  {-webkit-transform: rotate(90deg);transform: rotate(90deg);}\n    50%  {-webkit-transform: rotate(180deg);transform: rotate(180deg);}\n    75% {-webkit-transform: rotate(270deg);transform: rotate(270deg);}    \n    100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n\n@keyframes rotatephoto {\n    0%   {-webkit-transform: rotate(0deg);transform: rotate(0deg);}\n    25%  {-webkit-transform: rotate(90deg);transform: rotate(90deg);}\n    50%  {-webkit-transform: rotate(180deg);transform: rotate(180deg);}\n    75% {-webkit-transform: rotate(270deg);transform: rotate(270deg);}    \n    100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n\n\n.imganimate{\n    -webkit-animation-name: rotatephoto;\n            animation-name: rotatephoto;\n    -webkit-animation-duration: 4s;\n            animation-duration: 4s;\n    /*animation-iteration-count: infinite;*/\n}\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-3 col-md-3\" *ngFor=\"let img of imgList; let i = index\">\n\n    <img src=\"../assets/home/{{img}}\" alt=\"Image Not Found\" class=\"img-thumbnail index{{i}}\">\n    <br/>\n    <br/>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.imgList = [
            '1.jpg',
            '2.jpeg',
            '3.jpg',
            '4.jpeg',
            '5.jpeg',
            '6.png',
            '7.jpeg',
            '8.jpg',
            '9.jpg'
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.timer = setInterval(function () {
            var i = Math.floor(Math.random() * 9);
            var ele = document.querySelector('.imganimate');
            if (ele)
                ele.classList.toggle('imganimate');
            ele = document.querySelector('.index' + i);
            ele.classList.toggle('imganimate');
        }, 4000);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__food__ = __webpack_require__("./src/app/models/food.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__supplier__ = __webpack_require__("./src/app/models/supplier.ts");


var Cart = /** @class */ (function () {
    function Cart() {
        this.food = new __WEBPACK_IMPORTED_MODULE_0__food__["a" /* Food */];
        this.supplier = new __WEBPACK_IMPORTED_MODULE_1__supplier__["a" /* Supplier */];
    }
    return Cart;
}());



/***/ }),

/***/ "./src/app/models/food.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Food; });
var Food = /** @class */ (function () {
    function Food() {
    }
    return Food;
}());



/***/ }),

/***/ "./src/app/models/supplier.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Supplier; });
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    return Supplier;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pipe/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, args) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/providers/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_service__ = __webpack_require__("./src/app/providers/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_info_service__ = __webpack_require__("./src/app/providers/info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(rest, info) {
        this.rest = rest;
        this.info = info;
        this.dataReceived = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DataService.prototype.getAllInfo = function () {
        var _this = this;
        this.rest.getUserInfo().subscribe(function (results) {
            console.log(JSON.stringify(results));
            _this.consumer = results;
            _this.getTotalItemInCart();
            _this.dataReceived.emit(null);
        }, function (err) {
        });
    };
    DataService.prototype.getTotalItemInCart = function () {
        var total = 0;
        for (var i = 0; i < this.consumer.cart.length; i++) {
            total = total + Number(this.consumer.cart[i].food.quantity);
        }
        return total;
    };
    DataService.prototype.getTotalAmountInCart = function () {
        var total = 0;
        for (var i = 0; i < this.consumer.cart.length; i++) {
            total = total + (Number(this.consumer.cart[i].food.quantity) * Number(this.consumer.cart[i].food.price));
        }
        return total;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DataService.prototype, "dataReceived", void 0);
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_rest_service__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_info_service__["a" /* InfoService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/providers/info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoService = /** @class */ (function () {
    function InfoService() {
    }
    InfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InfoService);
    return InfoService;
}());



/***/ }),

/***/ "./src/app/providers/rest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { CredentialsService } from 'angular-with-credentials';
var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
        this.baseUrl = '';
        this.signUpSupplierContext = '/Supplier/AddAllInfo';
        this.signUpConsumerContext = '/Consumer/AddConsumer';
        this.signInContext = '/Login/verifyLogin';
        this.signOutContext = '/Login/SignOut';
        this.getSupplierContext = '/Supplier/GetDetails';
        this.getConsumerContext = '/Consumer/GetDetails';
        this.addFoodContext = '/Food/AddFood';
        this.getFoodContext = '/Supplier/GetFoodItems';
        this.editFoodContext = '/Food/EditFood';
        this.deleteFoodContext = '/Food/DeleteFood';
        this.writeFileContext = '/File/WriteFile';
        this.getSupplierListContext = '/Supplier/GetAllSuppliers';
        this.addToCartContext = '/Food/AddToCart';
        this.getCartItemsContext = '/Consumer/GetCartItems';
        this.getUserInfoContext = '/User/GetAllInfo';
        this.deleteFromCartContext = '/Food/DeleteFromCart';
        /*if (this.credentials) { // This is here to help with testing so you can pass in null for CredentialsService
          this.credentials.augmentXhrBuild((xhr: any) => {
              xhr.withCredentials = true;
          });
        }*/
    }
    RestService.prototype.signupSupplier = function (user) {
        var finalUrl = this.baseUrl + this.signUpSupplierContext;
        return this.http.post(finalUrl, user);
    };
    RestService.prototype.signupConsumer = function (user) {
        var finalUrl = this.baseUrl + this.signUpConsumerContext;
        return this.http.post(finalUrl, user);
    };
    RestService.prototype.signin = function (user) {
        var finalUrl = this.baseUrl + this.signInContext;
        return this.http.post(finalUrl, user);
    };
    RestService.prototype.getSupplierDetails = function () {
        var httpOptions = {
            withCredentials: true,
            headers: {
                'Accept': 'application/json'
            }
        };
        var finalUrl = this.baseUrl + this.getSupplierContext;
        return this.http.get(finalUrl);
    };
    RestService.prototype.signout = function () {
        var finalUrl = this.baseUrl + this.signOutContext;
        return this.http.get(finalUrl);
    };
    RestService.prototype.getConsumerDetails = function () {
        var finalUrl = this.baseUrl + this.getConsumerContext;
        return this.http.get(finalUrl);
    };
    RestService.prototype.addFood = function (food) {
        var finalUrl = this.baseUrl + this.addFoodContext;
        return this.http.post(finalUrl, food);
    };
    RestService.prototype.getSupplierFood = function (querParams) {
        var finalUrl = this.baseUrl + this.getFoodContext + (querParams ? querParams : '');
        return this.http.get(finalUrl);
    };
    RestService.prototype.editFood = function (food) {
        var finalUrl = this.baseUrl + this.editFoodContext;
        return this.http.post(finalUrl, food);
    };
    RestService.prototype.deleteFood = function (food) {
        var finalUrl = this.baseUrl + this.deleteFoodContext;
        return this.http.post(finalUrl, food);
    };
    RestService.prototype.writeFile = function (data) {
        var finalUrl = this.baseUrl + this.writeFileContext;
        return this.http.post(finalUrl, data);
    };
    RestService.prototype.getSupplierList = function (data) {
        var finalUrl = this.baseUrl + this.getSupplierListContext;
        return this.http.post(finalUrl, data);
    };
    RestService.prototype.addToCart = function (data) {
        var finalUrl = this.baseUrl + this.addToCartContext;
        return this.http.post(finalUrl, data);
    };
    RestService.prototype.deleteFromCart = function (data) {
        var finalUrl = this.baseUrl + this.deleteFromCartContext;
        return this.http.post(finalUrl, data);
    };
    RestService.prototype.getCartItems = function () {
        var finalUrl = this.baseUrl + this.getCartItemsContext;
        return this.http.get(finalUrl);
    };
    RestService.prototype.getUserInfo = function () {
        var finalUrl = this.baseUrl + this.getUserInfoContext;
        return this.http.get(finalUrl);
    };
    RestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\n    margin-top: 20px;\n}\n\n.btn-primary{\n    width: 100%;\n}\n\ninput{\n    border: none;\n    border-bottom: 2px solid #0275d8;\n    height:44px;\n    -webkit-transition: 0.2s ease all;\n    transition: 0.2s ease all;\n}\n\ninput:focus ~ .floating-label{\n  top: 8px;\n  color: #0275d8;\n  left: 27px;\n  font-size: 11px;\n  opacity: 1;\n}\n\ninput:focus{\n    height:66px;\n}\n\ninput:not(:focus):valid ~ .floating-label{\n    display: none;\n}\n\n.floating-label {\n  position: absolute;\n  pointer-events: none;\n  left: 27px;\n  top: 11px;\n  -webkit-transition: 0.2s ease all;\n  transition: 0.2s ease all;\n  color: #ccc;\n}"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #signupForm=\"ngForm\" class=\"row\">\n\n\n  <div class=\"form-group col-md-4 offset-md-4\">\n    <input type=\"email\" class=\"form-control inputText\" id=\"user-email\" required=\"true\" [(ngModel)]=\"user.email\" name=\"email\"\n      #email=\"ngModel\">\n    <span class=\"floating-label\">Your email address</span>\n  </div>\n\n\n\n\n  <div class=\"form-group col-md-4 offset-md-4\">\n    <input type=\"password\" class=\"form-control\" id=\"user-password\" [(ngModel)]=\"user.password\" required=\"true\" name=\"password\"\n      #name=\"ngModel\">\n    <span class=\"floating-label\">Password</span>\n  </div>\n\n\n\n\n\n  <div class=\"form-group col-md-4 offset-md-4\">\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signupForm.form.valid\">Submit</button>\n  </div>\n\n\n</form>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_service__ = __webpack_require__("./src/app/providers/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_info_service__ = __webpack_require__("./src/app/providers/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__("./src/app/providers/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("./src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = /** @class */ (function () {
    function SigninComponent(rest, info, data) {
        this.rest = rest;
        this.info = info;
        this.data = data;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */];
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        this.rest.signin(this.user).subscribe(function (data) {
            if (data.code === '00') {
                window.localStorage.setItem('loggedIn', "1");
                _this.data.getAllInfo();
                if (data.type === 'S') {
                    window.location.href = '/public/#/supplier/home';
                }
                else {
                    window.location.href = '/public/#/consumer/home';
                }
                _this.info.loggedIn = true;
            }
            else {
                alert('Invalid Credentials');
            }
        }, function (error) {
            alert('Login Failed');
        });
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_rest_service__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_info_service__["a" /* InfoService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = "\n\ninput[type=\"text\"]{\n    border: 2px solid #0275d8;\n    height:44px;\n    -webkit-transition: 0.2s ease all;\n    transition: 0.2s ease all;\n}\n\ninput:focus ~ .floating-label{\n  top: 8px;\n  color: #0275d8;\n  left: 27px;\n  font-size: 11px;\n  opacity: 1;\n}\n\ninput:focus{\n    height:66px;\n}\n\ninput:not(:focus):valid ~ .floating-label{\n    display: none;\n}\n\n.floating-label {\n  position: absolute;\n  pointer-events: none;\n  left: 27px;\n  top: 11px;\n  -webkit-transition: 0.2s ease all;\n  transition: 0.2s ease all;\n  color: #ccc;\n}\n\n.btn-outline-primary{\n    text-align: center;\n    padding-left:0px;\n    padding-right: 0px;\n    color: white;\n}\n\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" class=\"signup row\" #signupForm=\"ngForm\">\n  <div class=\"form-group col-md-4 offset-md-4\">\n    <form [formGroup]=\"signupGroupForm\" class=\"signup-action\">\n      <div class=\"btn-group btn-group-toggle\"  style=\"width:100%\" ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\n        <label ngbButtonLabel class=\"btn-primary\" style=\"width:50%\">\n          <input ngbButton type=\"radio\" value=\"C\">I want to order food\n        </label>\n        <label ngbButtonLabel class=\"btn-primary\" style=\"width:50%\">\n          <input ngbButton type=\"radio\" value=\"S\">I want to supply food\n        </label>\n      </div>\n    </form>\n  </div>\n\n\n\n  <div class=\"form-group col-md-4 offset-md-4\">\n    <input type=\"text\" class=\"form-control\" id=\"user-firstName\" [(ngModel)]=\"user.firstName\" required=\"true\" name=\"firstName\"\n      #name=\"ngModel\">\n    <span class=\"floating-label\">First Name</span>\n  </div>\n\n\n\n  <div class=\"form-group col-md-4  offset-md-4\">\n    <!--<label for=\"user-lastName\">Last Name\n        <sup>*</sup>\n      </label>-->\n    <input type=\"text\" class=\"form-control\" id=\"user-lastName\" [(ngModel)]=\"user.lastName\" required=\"true\" name=\"lastName\" #name=\"ngModel\">\n    <span class=\"floating-label\">Last Name</span>\n  </div>\n\n\n\n\n  <div class=\"form-group col-md-4  offset-md-4\">\n    <!--<label for=\"contact-email\">Email address\n        <sup>*</sup>\n      </label>-->\n    <input type=\"email\" class=\"form-control\" id=\"user-email\" required=\"true\" [(ngModel)]=\"user.email\" name=\"email\" #email=\"ngModel\">\n    <span class=\"floating-label\">Email address</span>\n  </div>\n\n\n\n\n  <div class=\"form-group col-md-4  offset-md-4\">\n    <!--<label for=\"user-password\">Password\n        <sup>*</sup>\n      </label>-->\n    <input type=\"password\" class=\"form-control\" id=\"user-password\" [(ngModel)]=\"user.password\" required=\"true\" name=\"password\"\n      #name=\"ngModel\">\n    <span class=\"floating-label\">Password</span>\n  </div>\n\n\n\n\n  <div class=\"form-group col-md-4  offset-md-4\">\n    <!--<label for=\"contact-phone\">Phone Number\n        <sup>*</sup>\n      </label>-->\n    <input type=\"number\" class=\"form-control\" id=\"user-phone\" required=\"true\" [(ngModel)]=\"user.phone\" name=\"phone\" #phone=\"ngModel\">\n    <span class=\"floating-label\">Phone Number</span>\n  </div>\n\n\n\n\n  <div class=\"form-group col-md-4  offset-md-4\" *ngIf=\"user.type === 'S'\">\n    <!--<label for=\"user-adrline1\">Address Line 1\n        <sup>*</sup>\n      </label>-->\n    <input type=\"text\" class=\"form-control\" id=\"user-adrline1\" [(ngModel)]=\"user.adrline1\" required=\"true\" name=\"adrline1\" #name=\"ngModel\">\n    <span class=\"floating-label\">Address Line 1</span>\n  </div>\n\n\n\n\n  <div class=\"form-group col-md-4  offset-md-4\" *ngIf=\"user.type === 'S'\">\n    <!--<label for=\"user-adrline2\">Address Line 2\n      </label>-->\n    <input type=\"text\" class=\"form-control\" id=\"user-adrline2\" [(ngModel)]=\"user.adrline2\" name=\"adrline2\" #name=\"ngModel\">\n    <span class=\"floating-label\">Address Line 2</span>\n  </div>\n\n\n\n\n  <div class=\"form-group col-md-4  offset-md-4\" *ngIf=\"user.type === 'S'\">\n    <!--<label for=\"user-city\">City\n        <sup>*</sup>\n      </label>-->\n    <input type=\"text\" class=\"form-control\" id=\"user-city\" [(ngModel)]=\"user.city\" required=\"true\" name=\"city\" #name=\"ngModel\">\n    <span class=\"floating-label\">City</span>\n  </div>\n\n\n\n\n  <div class=\"form-group col-md-4  offset-md-4\" *ngIf=\"user.type === 'S'\">\n    <!--<label for=\"user-state\">State\n        <sup>*</sup>\n      </label>-->\n    <input type=\"text\" class=\"form-control\" id=\"user-state\" [(ngModel)]=\"user.state\" required=\"true\" name=\"state\" #name=\"ngModel\">\n    <span class=\"floating-label\">State</span>\n  </div>\n\n\n\n\n  <div class=\"form-group col-md-4  offset-md-4\" *ngIf=\"user.type === 'S'\">\n    <!--<label for=\"user-country\">Country\n        <sup>*</sup>\n      </label>-->\n    <input type=\"text\" class=\"form-control\" id=\"user-country\" [(ngModel)]=\"user.country\" required=\"true\" name=\"country\" #name=\"ngModel\">\n    <span class=\"floating-label\">Country</span>\n  </div>\n\n\n  <div class=\"col-md-4  offset-md-4\">\n    <button type=\"submit\" class=\"btn btn-primary\"  style=\"width:100%\" [disabled]=\"!signupForm.form.valid\">Submit</button>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_service__ = __webpack_require__("./src/app/providers/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_info_service__ = __webpack_require__("./src/app/providers/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service__ = __webpack_require__("./src/app/providers/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(rest, info, data, formBuilder) {
        this.rest = rest;
        this.info = info;
        this.data = data;
        this.formBuilder = formBuilder;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */];
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.user.type = "C";
        this.signupGroupForm = this.formBuilder.group({
            'model': 'C'
        });
        this.onChanges();
        document.querySelector('.signup .btn-outline-primary:nth-child(1)').style.width = document.querySelector('.signup .form-group input').offsetWidth / 2 + 'px';
        document.querySelector('.signup .btn-outline-primary:nth-child(2)').style.width = document.querySelector('.signup .form-group input').offsetWidth / 2 + 'px';
    };
    SignupComponent.prototype.onChanges = function () {
        var _this = this;
        this.signupGroupForm.valueChanges.subscribe(function (value) {
            _this.user.type = value.model;
        });
    };
    SignupComponent.prototype.ngAfterViewInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.user.type === 'S') {
            this.rest.signupSupplier(this.user).subscribe(function (data) {
                _this.data.getAllInfo();
                window.localStorage.setItem('loggedIn', "1");
                window.location.href = '/public/#/supplier/home';
                _this.info.loggedIn = true;
            }, function (error) {
                alert('Supplier Creation Failed');
            });
        }
        else {
            this.rest.signupConsumer(this.user).subscribe(function (data) {
                _this.data.getAllInfo();
                window.localStorage.setItem('loggedIn', "1");
                window.location.href = '/public/#/consumer/home';
            }, function (error) {
                alert('Consumer Creation Failed');
            });
        }
    };
    SignupComponent.prototype.onResize = function (e) {
        document.querySelector('.signup .btn-outline-primary:nth-child(1)').style.width = document.querySelector('.signup .form-group input').offsetWidth / 2 + 'px';
        document.querySelector('.signup .btn-outline-primary:nth-child(2)').style.width = document.querySelector('.signup .form-group input').offsetWidth / 2 + 'px';
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_rest_service__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_info_service__["a" /* InfoService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/supplier-home/supplier-home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 style=\"color:white\">\n  Welcome {{ user.firstName + ' ' + user.lastName + '!' }}\n</h2>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Add/Edit Food Item</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <form (ngSubmit)=\"onSubmit(c)\" #addFoodForm=\"ngForm\">\n    <div class=\"modal-body row\">\n      <div class=\"form-group col-md-12\">\n        <input type=\"text\" class=\"form-control\" id=\"food-name\" [(ngModel)]=\"food.name\" required=\"true\" name=\"name\" #name=\"ngModel\">\n        <span class=\"floating-label\">Name</span>\n      </div>\n      <div class=\"form-group col-md-12\">\n        <input type=\"number\" class=\"form-control\" id=\"food-quantity\" [(ngModel)]=\"food.quantity\" required=\"true\" name=\"quantity\"\n          #quantity=\"ngModel\">\n        <span class=\"floating-label\">Quantity</span>\n      </div>\n      <div class=\"form-group col-md-12\">\n        <input type=\"number\" class=\"form-control\" id=\"food-price\" [(ngModel)]=\"food.price\" required=\"true\" name=\"price\" #price=\"ngModel\">\n        <span class=\"floating-label\">Price</span>\n      </div>\n      <div class=\"form-group col-md-12\">\n        <input type=\"text\" class=\"form-control\" id=\"food-description\" [(ngModel)]=\"food.description\" required=\"true\" name=\"description\"\n          #description=\"ngModel\">\n        <span class=\"floating-label\">Description</span>\n      </div>\n\n      <div class=\"form-group col-md-12 select-img\">\n        <input type=\"file\" id=\"file\" class=\"custom-file-input\" (change)=\"onChange($event)\">\n        <span class=\"custom-file-control\"></span>\n      </div>\n\n      <p-progressBar mode=\"indeterminate\" *ngIf=\"uploadStatus === ImgUploadStatus.progress\"></p-progressBar>\n\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!addFoodForm.form.valid || uploadStatus !== ImgUploadStatus.completed\">Save</button>\n    </div>\n  </form>\n</ng-template>\n\n<!--<table class=\"table table-inverse table-bordered\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Quantity Remaining</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\">Description</th>\n        <th scope=\"col\" colspan=\"2\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let food of foodList\">\n          <th scope=\"row\">{{food.name | capitalize}}</th>\n          <td>{{food.quantity | number}}</td>\n          <td>{{food.price | currency}}</td>\n          <td>{{food.description | capitalize}}</td>\n          <td><button class=\"btn btn-outline-primary\" (click)=\"editFood(food, content)\">Edit</button></td>\n          <td><button class=\"btn btn-danger\" (click)=\"deleteFood(food)\">Delete</button></td>          \n        </tr>\n    </tbody>\n</table>-->\n\n<div class=\"row food-items\">\n  <div class=\"col-sm-3 col-md-3\" *ngFor=\"let food of foodList\">\n    <hr/>\n    <div class=\"thumbnail\">\n      <div class=\"food-item-container\">\n        <img src=\"{{food.img ? ('/File/ReadFile/' + food.img) : '../assets/logow.png'}}\" alt=\"Image Not Found\" [class.opaque]=\"!food.img\" width=\"512\" height=\"512\" class=\"img-thumbnail\">\n        <button class=\"btn btn-primary float-left\" (click)=\"editFood(food, content)\">Edit</button>\n        <button class=\"btn btn-danger float-right\" (click)=\"deleteFood(food)\">Delete</button>\n      </div>\n      <div class=\"caption\">\n\n        <div class=\"float-left font-weight-bold\">{{food.name | capitalize}}</div>\n        <div class=\"float-right font-weight-bold\">{{food.price | currency}}</div>\n        <br/>\n        <div class=\"float-left\" style=\"font-family:cursive; color:#13d813\">Qty: {{food.quantity | number}}</div>\n        <br/>\n        <div style=\"font-family:cursive; color:#c1bdbd\">{{food.description | capitalize}}</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-3 col-md-3\">\n    <div class=\"thumbnail food-add-item\" (click)=\"open(content)\">+</div>\n  </div>\n</div>\n\n<!--<button class=\"btn btn-md btn-primary\" (click)=\"open(content)\">Add New Food Item</button>-->"

/***/ }),

/***/ "./src/app/supplier-home/supplier-home.component.scss":
/***/ (function(module, exports) {

module.exports = "input {\n  border: 2px solid #0275d8;\n  height: 44px;\n  -webkit-transition: 0.2s ease all;\n  transition: 0.2s ease all; }\n\ninput:focus ~ .floating-label {\n  top: 8px;\n  color: #0275d8;\n  left: 27px;\n  font-size: 11px;\n  opacity: 1; }\n\ninput:focus {\n  height: 66px; }\n\ninput:not(:focus):valid ~ .floating-label {\n  display: none; }\n\n.floating-label {\n  position: absolute;\n  pointer-events: none;\n  left: 27px;\n  top: 11px;\n  -webkit-transition: 0.2s ease all;\n  transition: 0.2s ease all;\n  color: #ccc; }\n\n.dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white; }\n\n.dark-modal .close {\n  color: white; }\n\ntable th, table td {\n  text-align: center; }\n\n.food-items {\n  color: white; }\n\n.food-item-container button {\n  opacity: 0;\n  position: absolute;\n  top: 235px; }\n\n.food-item-container button:nth-child(2) {\n  left: 25px; }\n\n.food-item-container button:nth-child(3) {\n  right: 25px; }\n\n.food-item-container:hover button {\n  opacity: 1; }\n\n.food-add-item {\n  border: 1px dotted #ccc;\n  padding: 34%;\n  text-align: center;\n  margin-top: 14%;\n  font-size: 50px; }\n\np-progressbar {\n  width: 92%;\n  margin-top: -20px;\n  margin-left: 4%; }\n\n.select-img {\n  margin-left: 4%; }\n\n.select-img span {\n  width: 92%; }\n\n.food-items img {\n  height: 253px; }\n\n.food-items .opaque {\n  opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/supplier-home/supplier-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UploadStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_info_service__ = __webpack_require__("./src/app/providers/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_service__ = __webpack_require__("./src/app/providers/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_food__ = __webpack_require__("./src/app/models/food.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadStatus;
(function (UploadStatus) {
    UploadStatus[UploadStatus["progress"] = 1] = "progress";
    UploadStatus[UploadStatus["completed"] = 2] = "completed";
    UploadStatus[UploadStatus["failed"] = 3] = "failed";
})(UploadStatus || (UploadStatus = {}));
var SupplierHomeComponent = /** @class */ (function () {
    function SupplierHomeComponent(info, rest, modalService) {
        this.info = info;
        this.rest = rest;
        this.modalService = modalService;
        this.ImgUploadStatus = UploadStatus;
        this.uploadStatus = UploadStatus.completed;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */];
        this.foodList = new Array;
    }
    SupplierHomeComponent.prototype.ngOnInit = function () {
        this.getSupplierDetails();
        this.getFoodItems();
        ;
    };
    SupplierHomeComponent.prototype.getFoodItems = function () {
        var _this = this;
        this.rest.getSupplierFood('').subscribe(function (data) {
            _this.foodList = data;
        }, function (err) {
            alert(err.message);
        });
    };
    SupplierHomeComponent.prototype.getSupplierDetails = function () {
        var _this = this;
        this.rest.getSupplierDetails().subscribe(function (data) {
            if (data.firstName) {
                _this.user = data;
                _this.info.loggedIn = true;
            }
            else {
                _this.info.loggedIn = false;
                window.location.href = '/public/#/signin';
            }
        }, function (err) {
            _this.info.loggedIn = false;
            window.location.href = '/public/#/signin';
        });
    };
    SupplierHomeComponent.prototype.open = function (content) {
        this.food = new __WEBPACK_IMPORTED_MODULE_4__models_food__["a" /* Food */];
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    SupplierHomeComponent.prototype.onSubmit = function (c) {
        var _this = this;
        var index = this.foodList.indexOf(this.originalFood);
        if (index < 0) {
            this.rest.addFood(this.food).subscribe(function (data) {
                if (data.code == '00') {
                    _this.food.id = data.foodId;
                    _this.foodList.push(_this.food);
                    _this.food = null;
                    c();
                }
            }, function (err) {
                alert(err.message);
            });
        }
        else {
            this.rest.editFood(this.food).subscribe(function (data) {
                if (data.code == '00') {
                    _this.foodList[index] = _this.food;
                    _this.food = null;
                    c();
                }
            }, function (err) {
                alert(err.message);
            });
        }
    };
    SupplierHomeComponent.prototype.editFood = function (food, content) {
        this.originalFood = food;
        this.food = Object.assign({}, food);
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    SupplierHomeComponent.prototype.deleteFood = function (food) {
        var _this = this;
        this.rest.deleteFood(food).subscribe(function (data) {
            if (data.code == '00') {
                var index = _this.foodList.indexOf(food);
                _this.foodList.splice(index, 1);
            }
        }, function (err) {
            alert(err.message);
        });
    };
    SupplierHomeComponent.prototype.onChange = function (e) {
        var input = e.target;
        var reader = new FileReader();
        var that = this;
        reader.onload = function () {
            var binaryData = reader.result;
            that.uploadStatus = UploadStatus.progress;
            console.log(binaryData);
            that.rest.writeFile({
                data: binaryData,
                name: that.food.id
            }).subscribe(function (data) {
                that.food.img = data.name;
                that.uploadStatus = UploadStatus.completed;
            }, function (err) {
            });
        };
        reader.readAsDataURL(input.files[0]);
    };
    SupplierHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-supplier-home',
            template: __webpack_require__("./src/app/supplier-home/supplier-home.component.html"),
            styles: [__webpack_require__("./src/app/supplier-home/supplier-home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_info_service__["a" /* InfoService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_service__["a" /* RestService */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], SupplierHomeComponent);
    return SupplierHomeComponent;
}());



/***/ }),

/***/ "./src/app/win.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map