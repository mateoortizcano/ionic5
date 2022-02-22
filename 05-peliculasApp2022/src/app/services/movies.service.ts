import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultadoDBMovies, DetallesPelicula, Creditos, Genre } from '../interfaces/interfaces';

const URL = environment.url;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private paginaPopulares = 0;

  constructor(private httpClient: HttpClient) {
  }

  private ejecutarHttpQuery<T>(query: string) {
    return this.httpClient.get<T>(`${URL}${query}&api_key=${API_KEY}&language=es`);
  }

  obtenerPeliculasPopulares() {
    this.paginaPopulares++;
    return this.ejecutarHttpQuery<ResultadoDBMovies>(`/discover/movie?sort_by=popularity.desc&page=${this.paginaPopulares}`);
  }

  obtenerPeliculas(): Observable<ResultadoDBMovies> {

    const hoy = new Date();
    const ultimoDiaMesActual = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    let mesActual = hoy.getMonth();
    let mes = ''
    if (mesActual < 10) {
      mes = '0' + mesActual;
    } else {
      mes = mesActual.toString();
    }
    const fechaInicial = `${hoy.getFullYear()}-${mes}-01`;
    const fechaFinal = `${hoy.getFullYear()}-${mes}-${ultimoDiaMesActual}`;

    return this.ejecutarHttpQuery<ResultadoDBMovies>(`/discover/movie?primary_release_date.gte=${fechaInicial}&primary_release_date.lte=${fechaFinal}`);
  }

  obtenerDetalles(id: string) {
    return this.ejecutarHttpQuery<DetallesPelicula>(`/movie/${id}?a=1`);
  }

  obtenerCreditos(id: string) {
    return this.ejecutarHttpQuery<Creditos>(`/movie/${id}/credits?a=1`);
  }

  buscarPeliculasPorNombre(nombre: string) {
    return this.ejecutarHttpQuery<ResultadoDBMovies>(`/search/movie?query=${nombre}`);
  }

  consultarGeneros() {
    return this.ejecutarHttpQuery(`/genre/movie/list?a=1`);
  }
}
