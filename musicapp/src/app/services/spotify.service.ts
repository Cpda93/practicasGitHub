import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio SpotifyService listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQApY-ztC6iW-wBPPEeickoDWJdjW6huEFbSa_J9SeluAjwW2sKzKYYjwvYI-LplPNJiynvjP2bE__ICj30'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
    .subscribe(data => {
      console.log(data);
    });
  }
}
