import { Component } from '@angular/core';

// Se agrega PendientesPage y TerminadosPage
import { PendientesPage } from '../pendientes/pendientes.component';
import { TerminadosPage } from '../terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // Se agrega PendientesPage y TerminadosPage
  tab1Root = PendientesPage;
  tab2Root = TerminadosPage;

  constructor() {

  }
}
