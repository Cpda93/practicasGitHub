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
      Authorization: 'Bearer BQDga9TGq5iHrJmHhA9i6NjJUGx7aYpaxd63nHq_QFUlZIbDSIHtctYno1vJYeNpgV0M-GlXoYpPN4Gpt7Q'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=50', {headers});
  }
}
