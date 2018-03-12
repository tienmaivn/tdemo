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

/***/ "./src/app/add-ngfor/add-ngfor.component.css":
/***/ (function(module, exports) {

module.exports = ".w-10 {width: 10%}\r\n.w-15 {width: 15%}\r\n.w-20 {width: 20%}\r\n.w-30 {width: 30%}\r\n.w-40 {width: 40%}"

/***/ }),

/***/ "./src/app/add-ngfor/add-ngfor.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"showFormAdd\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2\"><input type=\"text\" class=\"form-control\" placeholder=\"Enter device name\" [(ngModel)]=\"newDv\"></div>\n\t\t<div class=\"col-md-2\"><input type=\"text\" class=\"form-control\" placeholder=\"Enter OS version\" [(ngModel)]=\"newOsv\"></div>\n\t\t<div class=\"col-md-2\"><input type=\"text\" class=\"form-control\" placeholder=\"Enter manufacturer\" [(ngModel)]=\"newManu\"></div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-auto\"><button class=\"btn btn-primary mt-1\" (click)=\"addDevice()\">Add device</button></div>\n\t</div>\n</div>\n<button class=\"btn btn-primary\" (click)=\"showFormAdd=true\" *ngIf=\"!showFormAdd\">Add device</button>\n\n<hr>\n\n<div class=\"mt-3\">\n\t<div class=\"form-inline\">\n\t\t<div class=\"form-group\">\n\t\t\t<label>Filter</label>\n\t\t</div>\n\t\t<div class=\"form-group mx-sm-3\">\n\t\t\t<select class=\"form-control form-control-sm custom-select\" [(ngModel)]=\"filterStatus\">\n\t\t\t\t<option value=\"view_all\">View All</option>\n\t\t\t\t<option value=\"devAvailable\">View Available</option>\n\t\t\t\t<option value=\"devUsing\">View Using</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\t<table class=\"table table-hover table-sm mt-1\">\n\t\t<thead>\n\t\t\t<tr class=\"table-info\">\n\t\t\t\t<th>Device Name</th>\n\t\t\t\t<th>OS Version</th>\n\t\t\t\t<th>Manufacturer</th>\n\t\t\t\t<th>Status</th>\n\t\t\t\t<th class=\"text-center\">Borrow - Return</th>\n\t\t\t\t<th class=\"text-center w-10\">Remove</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody *ngFor=\"let device of arrDevices\">\n\t\t\t<tr\n\t\t\t\t[class.text-success]=\"device.memorized\" [class.text-warning]=\"!device.memorized\"\n\t\t\t\t *ngIf=\"filterStatus==='view_all' || (filterStatus==='devAvailable' && device.memorized) ||  (filterStatus==='devUsing' && !device.memorized)\"\n\t\t\t>\n\t\t\t\t<td>\n\t\t\t\t\t{{ device.name }}\n\t\t\t\t</td>\n\n\t\t\t\t<td>\n\t\t\t\t\t{{ device.osv }}\n\t\t\t\t</td>\n\n\t\t\t\t<td>\n\t\t\t\t\t{{ device.manu }}\n\t\t\t\t</td>\n\n\t\t\t\t<td>{{ device.memorized ? \"Available\" : \"Using\" }}</td>\n\n\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t<button class=\"btn btn-sm\" (click)=\"device.memorized= !device.memorized\" [class.bg-success]=\"device.memorized\" [class.bg-warning]=\"!device.memorized\">\n\t\t\t\t\t\t{{ device.memorized ? \"Borrow\" : \"Return\" }}\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\n\t\t\t\t<td class=\"text-center\"><button class=\"btn btn-danger btn-sm\" (click)=\"deleteDevice(device.id);\">X</button></td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>"

/***/ }),

/***/ "./src/app/add-ngfor/add-ngfor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNgforComponent; });
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

var AddNgforComponent = /** @class */ (function () {
    function AddNgforComponent() {
        this.filterStatus = 'view_all';
        this.newDv = "";
        this.newOsv = "";
        this.newManu = "";
        this.showFormAdd = false;
        this.arrDevices = [
            { id: 1, name: 'Galaxy S9', osv: 'Android 7.2', manu: 'Samsung Inc', memorized: true },
            { id: 2, name: 'iPhone 7', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: false },
            { id: 3, name: 'iPhone x', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: true },
            { id: 4, name: 'iPad pro', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: true },
            { id: 5, name: 'Iphone 7 Plus', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: false },
            { id: 6, name: 'Iphone 8 Plus', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: true }
        ];
    }
    AddNgforComponent.prototype.ngOnInit = function () {
    };
    AddNgforComponent.prototype.addDevice = function () {
        this.arrDevices.unshift({
            id: this.arrDevices.length + 1,
            name: this.newDv,
            osv: this.newOsv,
            manu: this.newManu,
            memorized: true
        });
        this.newDv = "",
            this.newOsv = "",
            this.newOsv = "",
            this.showFormAdd = false;
    };
    AddNgforComponent.prototype.deleteDevice = function (id) {
        var index = this.arrDevices.findIndex(function (device) { return device.id === id; });
        this.arrDevices.splice(index, 1);
    };
    AddNgforComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add-ngfor',
            template: __webpack_require__("./src/app/add-ngfor/add-ngfor.component.html"),
            styles: [__webpack_require__("./src/app/add-ngfor/add-ngfor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddNgforComponent);
    return AddNgforComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n<div style=\"text-align:center\">\n  <h1>\n   <img width=\"55\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"> {{ title }}!\n  </h1>\n  \n</div>\n\n<!-- <app-temp-reference-variable></app-temp-reference-variable> -->\n\n<!-- <app-style-binding></app-style-binding> -->\n\n<!-- <app-style-directive></app-style-directive> -->\n\n<!-- <app-ngif-ngfor></app-ngif-ngfor> -->\n\n<!-- <app-words></app-words> -->\n\n<app-add-ngfor></app-add-ngfor>\n\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Device borrow tool';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__temp_reference_variable_temp_reference_variable_component__ = __webpack_require__("./src/app/temp-reference-variable/temp-reference-variable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_binding_style_binding_component__ = __webpack_require__("./src/app/style-binding/style-binding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_directive_style_directive_component__ = __webpack_require__("./src/app/style-directive/style-directive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngif_ngfor_ngif_ngfor_component__ = __webpack_require__("./src/app/ngif-ngfor/ngif-ngfor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__words_words_component__ = __webpack_require__("./src/app/words/words.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_ngfor_add_ngfor_component__ = __webpack_require__("./src/app/add-ngfor/add-ngfor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__temp_reference_variable_temp_reference_variable_component__["a" /* TempReferenceVariableComponent */],
                __WEBPACK_IMPORTED_MODULE_5__style_binding_style_binding_component__["a" /* StyleBindingComponent */],
                __WEBPACK_IMPORTED_MODULE_6__style_directive_style_directive_component__["a" /* StyleDirectiveComponent */],
                __WEBPACK_IMPORTED_MODULE_7__ngif_ngfor_ngif_ngfor_component__["a" /* NgifNgforComponent */],
                __WEBPACK_IMPORTED_MODULE_8__words_words_component__["a" /* WordsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__add_ngfor_add_ngfor_component__["a" /* AddNgforComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ngif-ngfor/ngif-ngfor.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ngif-ngfor/ngif-ngfor.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 *ngIf=\"isShow\">\n  ngIf\n</h3>\n\n<button class=\"btn btn-success\" (click)=\"isShow = !isShow\">Button Toggle</button>\n<hr>\n<h3>ngFor</h3>\n<ul class=\"list-group\">\n\t<li *ngFor=\"let subject of arrSubjects\" class=\"list-group-item\">{{ subject }}</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/ngif-ngfor/ngif-ngfor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgifNgforComponent; });
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

var NgifNgforComponent = /** @class */ (function () {
    function NgifNgforComponent() {
        this.isShow = true;
        this.arrSubjects = ['Item 1', 'Item 2', 'Item 3'];
    }
    NgifNgforComponent.prototype.ngOnInit = function () {
    };
    NgifNgforComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-ngif-ngfor',
            template: __webpack_require__("./src/app/ngif-ngfor/ngif-ngfor.component.html"),
            styles: [__webpack_require__("./src/app/ngif-ngfor/ngif-ngfor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NgifNgforComponent);
    return NgifNgforComponent;
}());



/***/ }),

/***/ "./src/app/style-binding/style-binding.component.css":
/***/ (function(module, exports) {

module.exports = ".circle {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: green;\r\n}\r\n.square {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tbackground-color: gray;\t\r\n}"

/***/ }),

/***/ "./src/app/style-binding/style-binding.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"form-control\" placeholder=\"Enter your name\" [(ngModel)]=\"name\" #txtName>\n<h2 [style.color]=\"isHightLight ? 'red':'blue'\">\n\tYour Name is: {{ name }} (red or blue)\n</h2>\n\n<div [class]=\"isHightLight ? 'circle': 'square' \"></div>\n<div [class.circle]=\"!isHightLight\" [class.square]=\"isHightLight\"></div>"

/***/ }),

/***/ "./src/app/style-binding/style-binding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleBindingComponent; });
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

var StyleBindingComponent = /** @class */ (function () {
    function StyleBindingComponent() {
        this.name = "";
        this.isHightLight = true;
    }
    StyleBindingComponent.prototype.ngOnInit = function () {
    };
    StyleBindingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-style-binding',
            template: __webpack_require__("./src/app/style-binding/style-binding.component.html"),
            styles: [__webpack_require__("./src/app/style-binding/style-binding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StyleBindingComponent);
    return StyleBindingComponent;
}());



/***/ }),

/***/ "./src/app/style-directive/style-directive.component.css":
/***/ (function(module, exports) {

module.exports = ".circle {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tborder-radius: 50%;\r\n\tbackground-color: green;\r\n}\r\n.square {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tbackground-color: orange;\r\n}\r\n"

/***/ }),

/***/ "./src/app/style-directive/style-directive.component.html":
/***/ (function(module, exports) {

module.exports = "\n<input type=\"text\" class=\"form-control\" placeholder=\"Enter your name\" [(ngModel)]=\"name\" #txtName>\n<h2 [ngStyle]=\"name.length % 2 === 0 ? evenStyle : oddStyle\">\n\tYour Name is: {{ name }} (red or blue)\n</h2>\n\n<div [class]=\"isHightLight ? 'circle': 'square' \"></div>\n<hr>\n<div [class.circle]=\"!isHightLight\" [class.square]=\"isHightLight\"></div>\n<hr>\n<div [ngClass]=\"currentClass\"></div>"

/***/ }),

/***/ "./src/app/style-directive/style-directive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleDirectiveComponent; });
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

var StyleDirectiveComponent = /** @class */ (function () {
    function StyleDirectiveComponent() {
        this.name = "";
        this.evenStyle = { color: 'red', fontSize: '20px' };
        this.oddStyle = { color: 'blue', fontSize: '30px' };
        this.isHightLight = true;
        this.currentClass = { circle: !this.isHightLight, square: this.isHightLight };
    }
    StyleDirectiveComponent.prototype.ngOnInit = function () {
    };
    StyleDirectiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-style-directive',
            template: __webpack_require__("./src/app/style-directive/style-directive.component.html"),
            styles: [__webpack_require__("./src/app/style-directive/style-directive.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StyleDirectiveComponent);
    return StyleDirectiveComponent;
}());



/***/ }),

/***/ "./src/app/temp-reference-variable/temp-reference-variable.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/temp-reference-variable/temp-reference-variable.component.html":
/***/ (function(module, exports) {

module.exports = "\n<input type=\"text\" class=\"form-control\" placeholder=\"Enter your name\" [(ngModel)]=\"name\" #txtName>\n<p>Your Name is: {{ txtName.value | json }}</p>"

/***/ }),

/***/ "./src/app/temp-reference-variable/temp-reference-variable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempReferenceVariableComponent; });
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

var TempReferenceVariableComponent = /** @class */ (function () {
    function TempReferenceVariableComponent() {
        this.name = "";
    }
    TempReferenceVariableComponent.prototype.ngOnInit = function () {
    };
    TempReferenceVariableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-temp-reference-variable',
            template: __webpack_require__("./src/app/temp-reference-variable/temp-reference-variable.component.html"),
            styles: [__webpack_require__("./src/app/temp-reference-variable/temp-reference-variable.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TempReferenceVariableComponent);
    return TempReferenceVariableComponent;
}());



/***/ }),

/***/ "./src/app/words/words.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/words/words.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let word of arrWords\" class=\"card\">\n\t<div class=\"card-header\" [class.bg-info]=\"word.memorized\" [class.bg-warning]=\"!word.memorized\">\n\t\t{{ word.en }}\n\t</div>\n\t<div class=\"card-body\">\n\t\t{{ word.vn }}\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/words/words.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsComponent; });
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

var WordsComponent = /** @class */ (function () {
    function WordsComponent() {
        this.arrWords = [
            { id: 1, en: 'action', vn: 'hành động', memorized: true },
            { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
            { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
            { id: 4, en: 'active', vn: 'chủ động', memorized: true },
            { id: 5, en: 'bath', vn: 'tắm', memorized: false },
            { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
        ];
    }
    WordsComponent.prototype.ngOnInit = function () {
    };
    WordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-words',
            template: __webpack_require__("./src/app/words/words.component.html"),
            styles: [__webpack_require__("./src/app/words/words.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WordsComponent);
    return WordsComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
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