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
  getQuery( query: string) {
    const url =  `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDG8ajOpNZGlyArtf8R8pYU8df2ZfByAcGkaCDAApIJc7rBEGu2rY140cA1bMPeBTaz7oLuR1YgVgzlgmY'
    });
    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data => data[`albums`].items));

   // const headers = new HttpHeaders({
     // Authorization: 'Bearer BQBUQKW0i3wPDZ6Hco-_OgwZjnWHjeB87sMLre9KJ_-oSNnMtHTE5s_3xwFODYWr8VQU35831-VLHJ4RVKA'
   // });
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe( map( data => data [`artists`].items));

    // const headers = new HttpHeaders({
      // Authorization: 'Bearer BQBUQKW0i3wPDZ6Hco-_OgwZjnWHjeB87sMLre9KJ_-oSNnMtHTE5s_3xwFODYWr8VQU35831-VLHJ4RVKA'
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
    // .pipe( map ( data => data[`artists`].items));
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`);
    // .pipe( map( data => data [`artists`].items));
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
     .pipe( map( data => data [`tracks`]));
  }
}
