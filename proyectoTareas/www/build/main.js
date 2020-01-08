webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_deseos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgregarPage = /** @class */ (function () {
    function AgregarPage(deseosService, navParams) {
        this.deseosService = deseosService;
        this.navParams = navParams;
        this.nombreItem = '';
        var titulo = this.navParams.get('titulo');
        if (this.navParams.get('lista')) {
            this.lista = this.navParams.get('lista');
        }
        else {
            this.lista = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* Lista */](titulo);
            this.deseosService.agregarLista(this.lista);
        }
    }
    AgregarPage.prototype.agragarItem = function () {
        if (this.nombreItem.length === 0) {
            return;
        }
        var nuevoItem = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* ListaItem */](this.nombreItem);
        this.lista.items.push(nuevoItem);
        this.deseosService.guardarStorage();
        this.nombreItem = '';
        console.log(this.nombreItem);
    };
    AgregarPage.prototype.actualizarTarea = function (item) {
        item.completado = !item.completado;
        var pendientes = this.lista.items.filter(function (itemData) {
            return !itemData.completado;
        }).length;
        if (pendientes === 0) {
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
        }
        else {
            this.lista.terminada = false;
            this.lista.terminadaEn = null;
        }
        console.log(pendientes);
        this.deseosService.guardarStorage();
    };
    AgregarPage.prototype.borrar = function (idx) {
        this.lista.items.splice(idx, 1);
        this.deseosService.guardarStorage();
    };
    AgregarPage.prototype.listaSeleccionada = function (lista) {
        console.log(lista);
    };
    AgregarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agregar',template:/*ion-inline-start:"/root/webDev/gitHub/proyectoTareas/src/pages/agregar/agregar.component.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>{{lista.titulo}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-list-header>\n            Lista de asistencia\n        </ion-list-header>\n        <ion-item>\n            <ion-label floating>Agregar fecha</ion-label>\n            <ion-input [(ngModel)]="nombreItem" type="text" (keyup.enter)="agragarItem()">\n            </ion-input>\n        </ion-item>\n    </ion-list>\n\n\n    <ion-list *ngIf="lista.items.length > 0">\n        <ion-list-header>\n            Asistencia\n        </ion-list-header>\n\n        <ion-item-sliding *ngFor="let item of lista.items; let i = index" class="animated fadeInDown">\n            <button ion-item detail-none (click)="actualizarTarea(item)">\n                        <ion-icon *ngIf="item.completado" name="checkbox-outline" item-start></ion-icon>\n                        <ion-icon *ngIf="!item.completado" name="square-outline" item-start></ion-icon>\n                     {{item.descripcion}}\n                    </button>\n            <ion-item-options side="right">\n                <button (click)="borrar(i)" ion-button icon-only color="danger">\n                              <ion-icon name="close"></ion-icon>\n                            </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/root/webDev/gitHub/proyectoTareas/src/pages/agregar/agregar.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_deseos_service__["a" /* DeseosService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]])
    ], AgregarPage);
    return AgregarPage;
}());

;
//# sourceMappingURL=agregar.component.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pendientes_pendientes_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminados_terminados_component__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Se agrega PendientesPage y TerminadosPage


var TabsPage = /** @class */ (function () {
    function TabsPage() {
        // Se agrega PendientesPage y TerminadosPage
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__pendientes_pendientes_component__["a" /* PendientesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__terminados_terminados_component__["a" /* TerminadosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/root/webDev/gitHub/proyectoTareas/src/pages/tabs/tabs.html"*/'<ion-tabs color="primary">\n    <ion-tab [root]="tab1Root" tabTitle="Lista" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Asistencia" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"/root/webDev/gitHub/proyectoTareas/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_deseos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agregar_agregar_component__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PendientesPage = /** @class */ (function () {
    function PendientesPage(deseosService, navCtrl, alertCtrl) {
        this.deseosService = deseosService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    PendientesPage.prototype.agregarLista = function () {
        var _this = this;
        // this.navCtrl.push(AgregarPage);
        var alerta = this.alertCtrl.create({
            title: 'Agregar alumno',
            message: 'Escriba el nombre completo del alumno',
            inputs: [{
                    name: 'titulo',
                    placeholder: 'Nombre de alumno'
                }],
            buttons: [{
                    text: 'Cancelar'
                }, {
                    text: 'Agregar',
                    handler: function (data) {
                        if (data.titulo.length === 0) {
                            return;
                        }
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__agregar_agregar_component__["a" /* AgregarPage */], {
                            titulo: data.titulo
                        });
                    }
                }]
        });
        alerta.present();
    };
    PendientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pendientes',template:/*ion-inline-start:"/root/webDev/gitHub/proyectoTareas/src/pages/pendientes/pendientes.component.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Alumnos</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content>\n    <img src="../../assets/imgs/logo_NEW.png" />\n\n    <app-listas></app-listas>\n\n    <!--\n        ion FABs\n    -->\n    <ion-fab bottom (click)="agregarLista()" right>\n        <button ion-fab><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/root/webDev/gitHub/proyectoTareas/src/pages/pendientes/pendientes.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_deseos_service__["a" /* DeseosService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], PendientesPage);
    return PendientesPage;
}());

//# sourceMappingURL=pendientes.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_deseos_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TerminadosPage = /** @class */ (function () {
    function TerminadosPage(deseosService) {
        this.deseosService = deseosService;
    }
    TerminadosPage.prototype.listaSeleccionada = function (lista) {
        console.log(lista);
    };
    TerminadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terminadosPage',template:/*ion-inline-start:"/root/webDev/gitHub/proyectoTareas/src/pages/terminados/terminados.component.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Terminados</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <app-listas [terminada]="true"></app-listas>\n</ion-content>'/*ion-inline-end:"/root/webDev/gitHub/proyectoTareas/src/pages/terminados/terminados.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_deseos_service__["a" /* DeseosService */]])
    ], TerminadosPage);
    return TerminadosPage;
}());

//# sourceMappingURL=terminados.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pendientes_pendientes_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_terminados_terminados_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_deseos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_agregar_agregar_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_filtro_completado_filtro_completado__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_lista_component__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// DECLARACION DE COMPONENT
// Se agrega PendientesPage y TerminadosPage


// DELCLARACION DE PROVIDERS O SERVICIOS ( ES LO MISMO )
// Se agrega DeseosService, agregarPAge en providers, es importante recordar que
// los servicios o services son llamados en angular pero en ionic se llaman providers, pero es lo mismo




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                // Se agrega PendientesPage y Terminados Page
                __WEBPACK_IMPORTED_MODULE_7__pages_pendientes_pendientes_component__["a" /* PendientesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_terminados_terminados_component__["a" /* TerminadosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_agregar_agregar_component__["a" /* AgregarPage */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_filtro_completado_filtro_completado__["a" /* FiltroCompletadoPipe */],
                __WEBPACK_IMPORTED_MODULE_12__components_lista_component__["a" /* ListasComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                // Se agrega PendientesPage, TerminadosPage, AgregarPage
                __WEBPACK_IMPORTED_MODULE_7__pages_pendientes_pendientes_component__["a" /* PendientesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_terminados_terminados_component__["a" /* TerminadosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_agregar_agregar_component__["a" /* AgregarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                // Se agrega deseos service.
                __WEBPACK_IMPORTED_MODULE_9__services_deseos_service__["a" /* DeseosService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/root/webDev/gitHub/proyectoTareas/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/root/webDev/gitHub/proyectoTareas/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lista_item_model__ = __webpack_require__(273);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__lista_item_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lista_model__ = __webpack_require__(274);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__lista_model__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaItem; });
var ListaItem = /** @class */ (function () {
    function ListaItem(constructorDescripcion) {
        this.descripcion = constructorDescripcion;
        this.completado = false;
    }
    return ListaItem;
}());

//# sourceMappingURL=lista-item.model.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lista; });
var Lista = /** @class */ (function () {
    function Lista(titulo) {
        this.titulo = titulo;
        this.terminada = false;
        this.creadaEn = new Date();
        this.items = [];
        this.id = new Date().getTime();
    }
    return Lista;
}());

//# sourceMappingURL=lista.model.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroCompletadoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FiltroCompletadoPipe = /** @class */ (function () {
    function FiltroCompletadoPipe() {
    }
    FiltroCompletadoPipe.prototype.transform = function (listas, completada) {
        return listas.filter(function (lista) {
            return lista.terminada === completada;
        });
    };
    FiltroCompletadoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filtroCompletado',
            pure: false
        })
    ], FiltroCompletadoPipe);
    return FiltroCompletadoPipe;
}());

//# sourceMappingURL=filtro-completado.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_deseos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_agregar_agregar_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListasComponent = /** @class */ (function () {
    function ListasComponent(deseosService, navCtrl, alertCtrl) {
        this.deseosService = deseosService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.terminada = false;
    }
    ListasComponent.prototype.listaSeleccionada = function (lista) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_agregar_agregar_component__["a" /* AgregarPage */], {
            titulo: lista.titulo,
            lista: lista
        });
        console.log(lista);
    };
    ListasComponent.prototype.borrarLista = function (lista) {
        this.deseosService.borrarLista(lista);
    };
    ListasComponent.prototype.editarLista = function (listas, slidingItem) {
        var _this = this;
        slidingItem.close();
        var alerta = this.alertCtrl.create({
            title: 'Editar alumno',
            message: 'Escriba el nombre completo del alumno',
            inputs: [{
                    name: 'titulo',
                    placeholder: 'Nombre de alumno', value: listas.titulo
                }],
            buttons: [{
                    text: 'Cancelar'
                }, {
                    text: 'Guardar',
                    handler: function (data) {
                        if (data.titulo.length === 0) {
                            return;
                        }
                        listas.titulo = data.titulo;
                        _this.deseosService.guardarStorage();
                    }
                }]
        });
        alerta.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ListasComponent.prototype, "terminada", void 0);
    ListasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-listas',template:/*ion-inline-start:"/root/webDev/gitHub/proyectoTareas/src/components/listas.component.html"*/'<ion-list>\n    <ion-item-sliding #slidingItem *ngFor="let lista of deseosService.listas | filtroCompletado: terminada">\n        <ion-item-options side="left">\n            <button (click)="editarLista(lista, slidingItem)" ion-button icon-only bcolor="info">\n                  <ion-icon name="create"></ion-icon>\n                </button>\n        </ion-item-options>\n\n        <button ion-item (click)="listaSeleccionada(lista)">\n         {{ lista.titulo }}\n              <ion-note item-end>\n                Fechas\n              </ion-note>\n        </button>\n\n        <ion-item-options side="right">\n            <button (click)="borrarLista(lista)" ion-button icon-only color="danger">\n                  <ion-icon name="close"></ion-icon>\n                </button>\n        </ion-item-options>\n\n    </ion-item-sliding>\n</ion-list>'/*ion-inline-end:"/root/webDev/gitHub/proyectoTareas/src/components/listas.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_deseos_service__["a" /* DeseosService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], ListasComponent);
    return ListasComponent;
}());

//# sourceMappingURL=lista.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeseosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeseosService = /** @class */ (function () {
    function DeseosService() {
        this.listas = [];
        this.cargarStorage();
        // const lista1 = new Lista(" Hola LEo");
        // const lista2 = new Lista("otra tarea");
        // this.listas.push(lista1, lista2);
        // console.log(this.listas)
    }
    DeseosService.prototype.agregarLista = function (lista) {
        this.listas.push(lista);
        this.guardarStorage();
    };
    DeseosService.prototype.borrarLista = function (lista) {
        this.listas = this.listas.filter(function (listaData) {
            return listaData.id !== lista.id;
        });
        this.guardarStorage();
    };
    DeseosService.prototype.guardarStorage = function () {
        localStorage.setItem('data', JSON.stringify(this.listas));
    };
    DeseosService.prototype.cargarStorage = function () {
        if (localStorage.getItem('data')) {
            this.listas = JSON.parse(localStorage.getItem('data'));
        }
        else {
            this.listas = [];
        }
    };
    DeseosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DeseosService);
    return DeseosService;
}());

//# sourceMappingURL=deseos.service.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map