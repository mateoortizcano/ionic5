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

  headlinesPageCategoria = 0;
  headlinesPage = 0;
  categoriaAnterior = "";

  constructor(private http: HttpClient) { }


  private ejecutarQuery(query: string) {
    query = newsUrl + query;
    return this.http.get<RespuestaTopHeadlines>(query, { headers });
  }

  getTopHeadlines() {
    this.headlinesPage++;
    return this.ejecutarQuery(`/top-headlines?country=co&page=${this.headlinesPage}`);
  }

  getTopHeadlinesByCategoria(categoria: string) {
    if (this.categoriaAnterior === categoria) {
      this.headlinesPageCategoria++;

    } else {
      this.headlinesPageCategoria = 0;
      this.categoriaAnterior = categoria;
    }
    return this.ejecutarQuery(`/top-headlines?country=co&page=${this.headlinesPageCategoria}&category=${categoria}`);
  }
}
