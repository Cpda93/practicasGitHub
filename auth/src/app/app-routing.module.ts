import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtegidaComponent } from './components/protegida/protegida.component';

const routes: Routes = [
//se agrego el codigo de adentro y la importacion de ProfileComponent
  {
   path: 'profile',
   component: ProtegidaComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
