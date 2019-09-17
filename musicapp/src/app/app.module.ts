import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Se importo: RouterModule y HttpClientModule
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Se importo HomeComponent, SearchComponent, ArtistaComponent, NavbarComponent
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Se importo ROUTES de app.routes.ts
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Se agrega ROUTES usando Hash y HttpClientModule
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
