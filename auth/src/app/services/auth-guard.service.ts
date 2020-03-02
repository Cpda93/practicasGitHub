import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean|UrlTree> | boolean {
    return this.auth.isAuthenticated$.pipe(
      tap(loggedIn => {
        console.log("Acceso consedido por el Guard")
        if (!loggedIn) {
          console.log("Bloqueado por el Guard")
          this.auth.login(state.url);
        }
      })
    );
  }

}




// import { Injectable } from '@angular/core';
// import {Router,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate} from '@angular/router';
// import {AuthService} from './auth.service';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardService implements CanActivate {
//
//   constructor(private  auth:AuthService) { }
//
//   canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot){
//       console.log(next);
//
//     if( this.auth.isAuthenticated$.subscribe() ){
//       console.log("Paso el guard")
//       return true;
//     }else{
//       console.log("Bloqueado por el guard")
//       return false
//     }
//   }
// }
