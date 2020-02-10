import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container main-container">
      <h1>
          Demos Angular
      </h1>
  </div>
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <app-clases></app-clases>
  <p [appResaltado]="'orange'">
    Hola a la proogramacion
  </p>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
