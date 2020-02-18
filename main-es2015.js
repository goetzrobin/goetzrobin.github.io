(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../public/public.module.ngfactory": [
		"./src/app/public/public.module.ngfactory.js",
		"public-public-module-ngfactory"
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

/***/ "./src/app/app/app-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/app/app-routing.module.ts ***!
  \*******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

const routes = [
    {
        path: '**',
        loadChildren: '../public/public.module#PublicModule',
    }
];
class AppRoutingModule {
}


/***/ }),

/***/ "./src/app/app/app.module.ngfactory.js":
/*!*********************************************!*\
  !*** ./src/app/app/app.module.ngfactory.js ***!
  \*********************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app/app.module.ts");
/* harmony import */ var _containers_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/app/app.component */ "./src/app/app/containers/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _containers_app_app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/app/app.component.ngfactory */ "./src/app/app/containers/app/app.component.ngfactory.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm2015/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app/app-routing.module.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
/* harmony import */ var _store_reducers_theme_reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/reducers/theme.reducers */ "./src/app/app/store/reducers/theme.reducers.ts");
/* harmony import */ var ngrx_store_freeze_src_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngrx-store-freeze/src/index */ "./node_modules/ngrx-store-freeze/src/index.js");
/* harmony import */ var ngrx_store_freeze_src_index__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze_src_index__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _store_effects_router_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/effects/router.effects */ "./src/app/app/store/effects/router.effects.ts");
/* harmony import */ var _store_reducers_router_reducers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/reducers/router.reducers */ "./src/app/app/store/reducers/router.reducers.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_containers_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _containers_app_app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_5__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_5__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_5__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_5__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_10__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["State"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["State"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ReducerObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["INITIAL_STATE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_a"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_b"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_i"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_i"](p0_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_browser_platform_browser_j"](p1_0)]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_h"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_5__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTER_CONFIGURATION"], { anchorScrolling: "enabled", scrollPositionRestoration: "top" }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTES"], function () { return [[{ path: "**", loadChildren: "../public/public.module#PublicModule" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ActionsSubject"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_k"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_k"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ReducerManagerDispatcher"], null, [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_k"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_i"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["INITIAL_STATE"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_w"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_i"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_k"], { routerReducer: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["routerReducer"], theme: _store_reducers_theme_reducers__WEBPACK_IMPORTED_MODULE_15__["themeReducer"] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_l"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_k"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["INITIAL_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_k"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_l"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_j"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["combineReducers"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_r"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["USER_RUNTIME_CHECKS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_bd"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_r"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_s"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_z"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["USER_RUNTIME_CHECKS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["META_REDUCERS"], function (p0_0, p1_0) { return [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_bb"](p0_0), _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_ba"](p1_0)]; }, [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_s"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_s"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["USER_PROVIDED_META_REDUCERS"], [ngrx_store_freeze_src_index__WEBPACK_IMPORTED_MODULE_16__["storeFreeze"]], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_q"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_x"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["META_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["USER_PROVIDED_META_REDUCERS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["REDUCER_FACTORY"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["createReducerFactory"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_j"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_q"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ReducerManager"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ReducerManager"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ReducerManagerDispatcher"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["INITIAL_STATE"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["INITIAL_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["REDUCER_FACTORY"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ReducerObservable"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ReducerManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ScannedActionsSubject"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_i"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_f"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_e"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_h"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_j"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_j"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_i"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_e"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_k"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtools"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtools"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_k"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ReducerObservable"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_j"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ScannedActionsSubject"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["INITIAL_STATE"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StateObservable"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["ɵngrx_modules_store_devtools_store_devtools_d"], [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtools"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StateObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ReducerManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_h"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_y"], [[3, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreRootModule"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ReducerObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ɵngrx_modules_store_store_h"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectSources"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectSources"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_effects_effects_g"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_effects_effects_g"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectSources"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Actions"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Actions"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["ScannedActionsSubject"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _store_effects_router_effects__WEBPACK_IMPORTED_MODULE_18__["RouterEffects"], _store_effects_router_effects__WEBPACK_IMPORTED_MODULE_18__["RouterEffects"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Actions"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_effects_effects_e"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_effects_effects_b"], [_store_effects_router_effects__WEBPACK_IMPORTED_MODULE_18__["RouterEffects"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_effects_effects_d"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_effects_effects_c"], [[3, _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_effects_effects_g"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsRootModule"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectSources"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_effects_effects_g"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_effects_effects_e"], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreRootModule"]], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreFeatureModule"]], [2, _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["ɵngrx_modules_effects_effects_d"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["RouterStateSerializer"], _store_reducers_router_reducers__WEBPACK_IMPORTED_MODULE_19__["CustomSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_router_store_router_store_a"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIG"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_router_store_router_store_b"], [_ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["ɵngrx_modules_router_store_router_store_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["StoreRouterConnectingModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["StoreRouterConnectingModule"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["RouterStateSerializer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIG"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]); });



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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/es6/index.js");


// this would be done dynamically with webpack for builds
const environment = {
    development: true,
    production: false,
};
const metaReducers = !environment.production
    ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_1__["storeFreeze"]]
    : [];
class AppModule {
}


/***/ }),

/***/ "./src/app/app/containers/app/app.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/app/containers/app/app.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app/containers/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app/containers/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "mat-app-background"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](5, { "alternate-theme": 0, "no-scroll": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "mat-app-background"; var currVal_1 = _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform(_co.darkTheme)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).transform(_co.isMenuOpen))); _ck(_v, 2, 0, currVal_0, currVal_1); _ck(_v, 7, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "rg-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayContainer"]], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("rg-root", _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app/containers/app/app.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/app/containers/app/app.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".no-scroll[_ngcontent-%COMP%] {\n  max-height: 95vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2JiaWUvRGV2ZWxvcGVyL3Jnb2V0ei9zcmMvYXBwL2FwcC9jb250YWluZXJzL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC9jb250YWluZXJzL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAvY29udGFpbmVycy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXNjcm9sbCB7XG4gICAgbWF4LWhlaWdodDogOTV2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSIsIi5uby1zY3JvbGwge1xuICBtYXgtaGVpZ2h0OiA5NXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"];



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/app/app/store/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class AppComponent {
    constructor(themeStore, overlayContainer) {
        this.themeStore = themeStore;
        this.overlayContainer = overlayContainer;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.darkTheme = this.themeStore.select(_store__WEBPACK_IMPORTED_MODULE_2__["fromAppSelectors"].fromTheme.getDarkTheme);
        this.isMenuOpen = this.themeStore.select(_store__WEBPACK_IMPORTED_MODULE_2__["fromAppSelectors"].fromTheme.getMenuOpen);
        this.darkTheme.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(isDark => this.onThemeChange(isDark));
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
}


/***/ }),

/***/ "./src/app/app/store/actions/index.ts":
/*!********************************************!*\
  !*** ./src/app/app/store/actions/index.ts ***!
  \********************************************/
/*! exports provided: GO, BACK, FORWARD, Go, Back, Forward, TOGGLE_DARK_MODE, OPEN_CLOSE_MENU, ToggleDarkMode, OpenCloseMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.actions */ "./src/app/app/store/actions/router.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_0__["GO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_0__["BACK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_0__["FORWARD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_0__["Go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_0__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _router_actions__WEBPACK_IMPORTED_MODULE_0__["Forward"]; });

/* harmony import */ var _theme_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.actions */ "./src/app/app/store/actions/theme.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_DARK_MODE", function() { return _theme_actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_DARK_MODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN_CLOSE_MENU", function() { return _theme_actions__WEBPACK_IMPORTED_MODULE_1__["OPEN_CLOSE_MENU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleDarkMode", function() { return _theme_actions__WEBPACK_IMPORTED_MODULE_1__["ToggleDarkMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenCloseMenu", function() { return _theme_actions__WEBPACK_IMPORTED_MODULE_1__["OpenCloseMenu"]; });





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
/* harmony import */ var _router_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.effects */ "./src/app/app/store/effects/router.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return _router_effects__WEBPACK_IMPORTED_MODULE_0__["RouterEffects"]; });


const effects = [_router_effects__WEBPACK_IMPORTED_MODULE_0__["RouterEffects"]];



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
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _actions_router_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/router.actions */ "./src/app/app/store/actions/router.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class RouterEffects {
    constructor(actions$, router, location) {
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_router_actions__WEBPACK_IMPORTED_MODULE_2__["GO"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(({ path, query: queryParams, extras }) => {
            this.router.navigate(path, Object.assign({ queryParams }, extras));
        }));
        this.navigateBack$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_router_actions__WEBPACK_IMPORTED_MODULE_2__["BACK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.location.back()));
        this.navigateForward$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_router_actions__WEBPACK_IMPORTED_MODULE_2__["FORWARD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.location.forward()));
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], RouterEffects.prototype, "navigate$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], RouterEffects.prototype, "navigateBack$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], RouterEffects.prototype, "navigateForward$", void 0);


/***/ }),

/***/ "./src/app/app/store/index.ts":
/*!************************************!*\
  !*** ./src/app/app/store/index.ts ***!
  \************************************/
/*! exports provided: reducers, CustomSerializer, initialState, themeReducer, getDarkTheme, getMenuOpen, GO, BACK, FORWARD, Go, Back, Forward, TOGGLE_DARK_MODE, OPEN_CLOSE_MENU, ToggleDarkMode, OpenCloseMenu, effects, RouterEffects, fromAppSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/app/app/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["CustomSerializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "themeReducer", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["themeReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDarkTheme", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getDarkTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuOpen", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getMenuOpen"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/app/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["GO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["BACK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["FORWARD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["Go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["Forward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_DARK_MODE", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_DARK_MODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN_CLOSE_MENU", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["OPEN_CLOSE_MENU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleDarkMode", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["ToggleDarkMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenCloseMenu", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["OpenCloseMenu"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects */ "./src/app/app/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["RouterEffects"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/app/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromAppSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["fromAppSelectors"]; });







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
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
/* harmony import */ var _theme_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.reducers */ "./src/app/app/store/reducers/theme.reducers.ts");
/* harmony import */ var _router_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.reducers */ "./src/app/app/store/reducers/router.reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return _router_reducers__WEBPACK_IMPORTED_MODULE_2__["CustomSerializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _theme_reducers__WEBPACK_IMPORTED_MODULE_1__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "themeReducer", function() { return _theme_reducers__WEBPACK_IMPORTED_MODULE_1__["themeReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDarkTheme", function() { return _theme_reducers__WEBPACK_IMPORTED_MODULE_1__["getDarkTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuOpen", function() { return _theme_reducers__WEBPACK_IMPORTED_MODULE_1__["getMenuOpen"]; });



const reducers = {
    routerReducer: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
    theme: _theme_reducers__WEBPACK_IMPORTED_MODULE_1__["themeReducer"],
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
/* harmony import */ var _actions_theme_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/theme.actions */ "./src/app/app/store/actions/theme.actions.ts");

const initialState = {
    darkTheme: false,
    menuOpen: false,
};
function themeReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_theme_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_DARK_MODE"]: {
            return Object.assign({}, state, { darkTheme: !state.darkTheme });
        }
        case _actions_theme_actions__WEBPACK_IMPORTED_MODULE_0__["OPEN_CLOSE_MENU"]: {
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
/* harmony import */ var _router_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.selectors */ "./src/app/app/store/selectors/router.selectors.ts");
/* harmony import */ var _theme_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.selectors */ "./src/app/app/store/selectors/theme.selectors.ts");


const fromAppSelectors = {
    fromRouter: _router_selectors__WEBPACK_IMPORTED_MODULE_0__,
    fromTheme: _theme_selectors__WEBPACK_IMPORTED_MODULE_1__,
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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const getRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('routerReducer');


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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./src/app/app/store/reducers/index.ts");


const getThemeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('theme');
const getDarkTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getThemeState, _reducers__WEBPACK_IMPORTED_MODULE_1__["getDarkTheme"]);
const getMenuOpen = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getThemeState, _reducers__WEBPACK_IMPORTED_MODULE_1__["getMenuOpen"]);


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app/app.module.ngfactory */ "./src/app/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModuleFactory(_app_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AppModuleNgFactory"])
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