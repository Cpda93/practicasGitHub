import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container main-container">
      <h1>
          Demos Angular
      </h1>
  </div>

  <hr>

  <app-ng-style></app-ng-style>

  <br>

  <app-css></app-css>

  <br>

  <app-clases></app-clases>

  <br>

  <p [appResaltado]="'orange'">
    Hola a la proogramacion
  </p>

  <br>

  <app-ng-switch></app-ng-switch>

  <hr>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit")
  }

  ngOnChanges(){
    console.log("ngOnChanges")
  }

  ngDoCheck(){
    console.log("ngDoCheck")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy")
  }
}