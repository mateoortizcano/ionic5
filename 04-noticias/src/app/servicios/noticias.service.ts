import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const newsUrl = environment.newsUrl;
const headers = new HttpHeaders({
  'X-Api-Key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }


  private ejecutarQuery(query: string) {
    query = newsUrl + query;
    return this.http.get<RespuestaTopHeadlines>(query, { headers });
  }

  getTopHeadlines() {
    return this.ejecutarQuery('/top-headlines?country=co');
  }

  getTopHeadlinesByCategoria(categoria: string) {
    return this.ejecutarQuery(`/top-headlines?country=co&category=${categoria}`);
  }
}
