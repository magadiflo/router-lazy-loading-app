import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Anime, TypeAnime } from '../models/animes';
import { PathRest } from '../static/path-rest';


@Injectable()
export class AnimesService {

  constructor(private _httpClient: HttpClient) { }

  getAnime(anime: TypeAnime): Observable<Anime[]> {
    return this._httpClient.get<Anime[]>(`${PathRest.GET_ANIME}/${anime}`);
  }

}
