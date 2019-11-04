import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// DECLARACION DE COMPONENT
// Se agrega PendientesPage y TerminadosPage
import { PendientesPage } from '../pages/pendientes/pendientes.component';
import { TerminadosPage } from '../pages/terminados/terminados.component';

// DELCLARACION DE PROVIDERS O SERVICIOS ( ES LO MISMO )
// Se agrega DeseosService en providers, es importante recordar que
// los servicios o services son llamados en angular pero en ionic se llaman providers, pero es lo mismo
import { DeseosService } from './servicios/tareas.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    // Se agrega PendientesPage y Terminados Page
    PendientesPage,
    TerminadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    // Se agrega PendientesPage y TerminadosPage
    PendientesPage,
    TerminadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // Se agrega deseos service.
    DeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
