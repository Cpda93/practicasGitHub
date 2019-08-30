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
      Authorization: 'Bearer BQBfQiqufTsK4r5onTsNfOD5jcx2Ix3hteZyoslqq3Wmw-O97FDgOOP7ZUmJBy8KAt_xJRDoFMfbLn9cf0g'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }
  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBfQiqufTsK4r5onTsNfOD5jcx2Ix3hteZyoslqq3Wmw-O97FDgOOP7ZUmJBy8KAt_xJRDoFMfbLn9cf0g'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }
}
