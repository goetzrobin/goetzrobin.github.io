(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../public/public.module": [
		"./src/app/public/public.module.ts",
		"public-public-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/containers/app/app.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/containers/app/app.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'alternate-theme': darkTheme | async,'no-scroll': isMenuOpen | async}\" class='mat-app-background'>\n        <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app/app-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/app/app-routing.module.ts ***!
  \*******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '**',
        loadChildren: '../public/public.module#PublicModule',
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'top',
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app/app.module.ts":
/*!***********************************!*\
  !*** ./src/app/app/app.module.ts ***!
  \***********************************/
/*! exports provided: metaReducers, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./src/app/app/store/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/es6/index.js");
/* harmony import */ var _containers_app_app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/app/app.component */ "./src/app/app/containers/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app/app-routing.module.ts");








// not used in production


// this would be done dynamically with webpack for builds
const environment = {
    development: true,
    production: false,
};
const metaReducers = !environment.production
    ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_9__["storeFreeze"]]
    : [];
// bootstrap


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_7__["reducers"], { metaReducers }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_7__["effects"]),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["StoreRouterConnectingModule"].forRoot(),
            environment.development ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument() : [],
        ],
        providers: [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["RouterStateSerializer"], useClass: _store__WEBPACK_IMPORTED_MODULE_7__["CustomSerializer"] }],
        declarations: [_containers_app_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        bootstrap: [_containers_app_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/app/containers/app/app.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/app/containers/app/app.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".no-scroll {\n  max-height: 95vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JiaWUvRGV2ZWxvcGVyL3Jnb2V0ei9zcmMvYXBwL2FwcC9jb250YWluZXJzL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC9jb250YWluZXJzL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAvY29udGFpbmVycy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXNjcm9sbCB7XG4gICAgbWF4LWhlaWdodDogOTV2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSIsIi5uby1zY3JvbGwge1xuICBtYXgtaGVpZ2h0OiA5NXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app/containers/app/app.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/app/containers/app/app.component.ts ***!
  \*****************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/app/app/store/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let AppComponent = class AppComponent {
    constructor(themeStore, overlayContainer) {
        this.themeStore = themeStore;
        this.overlayContainer = overlayContainer;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.darkTheme = this.themeStore.select(_store__WEBPACK_IMPORTED_MODULE_3__["fromAppSelectors"].fromTheme.getDarkTheme);
        this.isMenuOpen = this.themeStore.select(_store__WEBPACK_IMPORTED_MODULE_3__["fromAppSelectors"].fromTheme.getMenuOpen);
        this.darkTheme.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed)).subscribe(isDark => this.onThemeChange(isDark));
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    onThemeChange(isDark) {
        const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
        if (isDark) {
            overlayContainerClasses.add('alternate-theme');
        }
        else {
            overlayContainerClasses.remove('alternate-theme');
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayContainer"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'rg-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/containers/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app/containers/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app/store/actions/index.ts":
/*!********************************************!*\
  !*** ./src/app/app/store/actions/index.ts ***!
  \********************************************/
/*! exports provided: TOGGLE_DARK_MODE, OPEN_CLOSE_MENU, ToggleDarkMode, OpenCloseMenu, GO, BACK, FORWARD, Go, Back, Forward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _router_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.actions */ "./src/app/app/store/actions/router.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["GO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["BACK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["FORWARD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["Go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_1__["Forward"]; });

/* harmony import */ var _theme_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.actions */ "./src/app/app/store/actions/theme.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_DARK_MODE", function() { return _theme_actions__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_DARK_MODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN_CLOSE_MENU", function() { return _theme_actions__WEBPACK_IMPORTED_MODULE_2__["OPEN_CLOSE_MENU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleDarkMode", function() { return _theme_actions__WEBPACK_IMPORTED_MODULE_2__["ToggleDarkMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenCloseMenu", function() { return _theme_actions__WEBPACK_IMPORTED_MODULE_2__["OpenCloseMenu"]; });






/***/ }),

/***/ "./src/app/app/store/actions/router.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/app/store/actions/router.actions.ts ***!
  \*****************************************************/
/*! exports provided: GO, BACK, FORWARD, Go, Back, Forward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return GO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return BACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return FORWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return Go; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return Forward; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const GO = '[Router] Go';
const BACK = '[Router] Back';
const FORWARD = '[Router] Forward';
class Go {
    constructor(payload) {
        this.payload = payload;
        this.type = GO;
    }
}
class Back {
    constructor() {
        this.type = BACK;
    }
}
class Forward {
    constructor() {
        this.type = FORWARD;
    }
}


/***/ }),

/***/ "./src/app/app/store/actions/theme.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/app/store/actions/theme.actions.ts ***!
  \****************************************************/
/*! exports provided: TOGGLE_DARK_MODE, OPEN_CLOSE_MENU, ToggleDarkMode, OpenCloseMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_DARK_MODE", function() { return TOGGLE_DARK_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_CLOSE_MENU", function() { return OPEN_CLOSE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleDarkMode", function() { return ToggleDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCloseMenu", function() { return OpenCloseMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const TOGGLE_DARK_MODE = '[App] Toggle Dark Mode';
const OPEN_CLOSE_MENU = '[App] Open or Close Menu';
class ToggleDarkMode {
    constructor() {
        this.type = TOGGLE_DARK_MODE;
    }
}
class OpenCloseMenu {
    constructor(open) {
        this.open = open;
        this.type = OPEN_CLOSE_MENU;
    }
}


/***/ }),

/***/ "./src/app/app/store/effects/index.ts":
/*!********************************************!*\
  !*** ./src/app/app/store/effects/index.ts ***!
  \********************************************/
/*! exports provided: effects, RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _router_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.effects */ "./src/app/app/store/effects/router.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return _router_effects__WEBPACK_IMPORTED_MODULE_1__["RouterEffects"]; });



const effects = [_router_effects__WEBPACK_IMPORTED_MODULE_1__["RouterEffects"]];



/***/ }),

/***/ "./src/app/app/store/effects/router.effects.ts":
/*!*****************************************************!*\
  !*** ./src/app/app/store/effects/router.effects.ts ***!
  \*****************************************************/
/*! exports provided: RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return RouterEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _actions_router_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/router.actions */ "./src/app/app/store/actions/router.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let RouterEffects = class RouterEffects {
    constructor(actions$, router, location) {
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_router_actions__WEBPACK_IMPORTED_MODULE_5__["GO"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(({ path, query: queryParams, extras }) => {
            this.router.navigate(path, Object.assign({ queryParams }, extras));
        }));
        this.navigateBack$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_router_actions__WEBPACK_IMPORTED_MODULE_5__["BACK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.location.back()));
        this.navigateForward$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_router_actions__WEBPACK_IMPORTED_MODULE_5__["FORWARD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.location.forward()));
    }
};
RouterEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false })
], RouterEffects.prototype, "navigate$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false })
], RouterEffects.prototype, "navigateBack$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false })
], RouterEffects.prototype, "navigateForward$", void 0);
RouterEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RouterEffects);



/***/ }),

/***/ "./src/app/app/store/index.ts":
/*!************************************!*\
  !*** ./src/app/app/store/index.ts ***!
  \************************************/
/*! exports provided: reducers, TOGGLE_DARK_MODE, OPEN_CLOSE_MENU, ToggleDarkMode, OpenCloseMenu, effects, fromAppSelectors, CustomSerializer, initialState, themeReducer, getDarkTheme, getMenuOpen, GO, BACK, FORWARD, Go, Back, Forward, RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/app/app/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["CustomSerializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "themeReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["themeReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDarkTheme", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["getDarkTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuOpen", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["getMenuOpen"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/app/app/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_DARK_MODE", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_DARK_MODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN_CLOSE_MENU", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["OPEN_CLOSE_MENU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleDarkMode", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["ToggleDarkMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenCloseMenu", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["OpenCloseMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["GO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["BACK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["FORWARD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["Go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["Forward"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects */ "./src/app/app/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_3__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_3__["RouterEffects"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./src/app/app/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromAppSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_4__["fromAppSelectors"]; });








/***/ }),

/***/ "./src/app/app/store/reducers/index.ts":
/*!*********************************************!*\
  !*** ./src/app/app/store/reducers/index.ts ***!
  \*********************************************/
/*! exports provided: reducers, CustomSerializer, initialState, themeReducer, getDarkTheme, getMenuOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
/* harmony import */ var _theme_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.reducers */ "./src/app/app/store/reducers/theme.reducers.ts");
/* harmony import */ var _router_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router.reducers */ "./src/app/app/store/reducers/router.reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return _router_reducers__WEBPACK_IMPORTED_MODULE_3__["CustomSerializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _theme_reducers__WEBPACK_IMPORTED_MODULE_2__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "themeReducer", function() { return _theme_reducers__WEBPACK_IMPORTED_MODULE_2__["themeReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDarkTheme", function() { return _theme_reducers__WEBPACK_IMPORTED_MODULE_2__["getDarkTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuOpen", function() { return _theme_reducers__WEBPACK_IMPORTED_MODULE_2__["getMenuOpen"]; });




const reducers = {
    routerReducer: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"],
    theme: _theme_reducers__WEBPACK_IMPORTED_MODULE_2__["themeReducer"],
};




/***/ }),

/***/ "./src/app/app/store/reducers/router.reducers.ts":
/*!*******************************************************!*\
  !*** ./src/app/app/store/reducers/router.reducers.ts ***!
  \*******************************************************/
/*! exports provided: CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CustomSerializer {
    serialize(routerState) {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        let state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;
        return { url, queryParams, params };
    }
}


/***/ }),

/***/ "./src/app/app/store/reducers/theme.reducers.ts":
/*!******************************************************!*\
  !*** ./src/app/app/store/reducers/theme.reducers.ts ***!
  \******************************************************/
/*! exports provided: initialState, themeReducer, getDarkTheme, getMenuOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeReducer", function() { return themeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDarkTheme", function() { return getDarkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuOpen", function() { return getMenuOpen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_theme_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/theme.actions */ "./src/app/app/store/actions/theme.actions.ts");


const initialState = {
    darkTheme: false,
    menuOpen: false,
};
function themeReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_theme_actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_DARK_MODE"]: {
            return Object.assign({}, state, { darkTheme: !state.darkTheme });
        }
        case _actions_theme_actions__WEBPACK_IMPORTED_MODULE_1__["OPEN_CLOSE_MENU"]: {
            return Object.assign({}, state, { menuOpen: action.open });
        }
    }
    return state;
}
const getDarkTheme = (state) => state.darkTheme;
const getMenuOpen = (state) => state.menuOpen;


/***/ }),

/***/ "./src/app/app/store/selectors/index.ts":
/*!**********************************************!*\
  !*** ./src/app/app/store/selectors/index.ts ***!
  \**********************************************/
/*! exports provided: fromAppSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromAppSelectors", function() { return fromAppSelectors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _router_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.selectors */ "./src/app/app/store/selectors/router.selectors.ts");
/* harmony import */ var _theme_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.selectors */ "./src/app/app/store/selectors/theme.selectors.ts");



const fromAppSelectors = {
    fromRouter: _router_selectors__WEBPACK_IMPORTED_MODULE_1__,
    fromTheme: _theme_selectors__WEBPACK_IMPORTED_MODULE_2__,
};


/***/ }),

/***/ "./src/app/app/store/selectors/router.selectors.ts":
/*!*********************************************************!*\
  !*** ./src/app/app/store/selectors/router.selectors.ts ***!
  \*********************************************************/
/*! exports provided: getRouterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterState", function() { return getRouterState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const getRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('routerReducer');


/***/ }),

/***/ "./src/app/app/store/selectors/theme.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/app/store/selectors/theme.selectors.ts ***!
  \********************************************************/
/*! exports provided: getThemeState, getDarkTheme, getMenuOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemeState", function() { return getThemeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDarkTheme", function() { return getDarkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuOpen", function() { return getMenuOpen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/app/app/store/reducers/index.ts");



const getThemeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('theme');
const getDarkTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getThemeState, _reducers__WEBPACK_IMPORTED_MODULE_2__["getDarkTheme"]);
const getMenuOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getThemeState, _reducers__WEBPACK_IMPORTED_MODULE_2__["getMenuOpen"]);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app/app.module */ "./src/app/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/robbie/Developer/rgoetz/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map