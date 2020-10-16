import { environment } from './../../environments/environment';
import { Game } from './../models/game';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = environment.url;

@Injectable({
  providedIn: 'root',
})
export class GameService {
  urlGetJuegos = `${baseUrl}/api/goty`;

  constructor(private httpClient: HttpClient) {}

  getJuegos(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.urlGetJuegos);
  }
}
