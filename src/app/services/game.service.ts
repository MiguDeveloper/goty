import { GameResponse, GameRespVoto } from './../models/game';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = environment.url;

@Injectable({
  providedIn: 'root',
})
export class GameService {
  urlJuegos = `${baseUrl}/api/goty`;

  constructor(private httpClient: HttpClient) {}

  getJuegos(): Observable<GameResponse> {
    return this.httpClient.get<GameResponse>(this.urlJuegos);
  }

  votarJuego(id: string): Observable<GameRespVoto> {
    return this.httpClient.post<GameRespVoto>(`${this.urlJuegos}/${id}`, '');
  }
}
