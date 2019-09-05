import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Se importa map operador map de los observables
import { map } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio SpotifyService listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQApN9QGkj1Nz3k2nlMJ7aD3Unubaj31onJ6llcq_5Z-BoERr_EZKC4PJPUV8x80erWk9CjVfnW_oK-X9rU'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
    .pipe( map( data => data[`albums`].items));
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQApN9QGkj1Nz3k2nlMJ7aD3Unubaj31onJ6llcq_5Z-BoERr_EZKC4PJPUV8x80erWk9CjVfnW_oK-X9rU'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
    .pipe( map ( data => data[`artists`].items));
  }
}
