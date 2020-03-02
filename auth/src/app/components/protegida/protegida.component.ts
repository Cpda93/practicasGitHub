import { Component, OnInit } from '@angular/core';

//Codigo de Prueba
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html'
})
export class ProtegidaComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
//codigo original de ProtegidaComponent
// @Component({
//   selector: 'app-protegida',
//   templateUrl: './protegida.component.html',
//   styles: []
// })
// export class ProtegidaComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
