import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultadoBDPeliculas } from '../entidades/entidades';
import { environment } from '../../environments/environment';

const urlApi = environment.apiUrl;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  ejecutarConsulta<T>(consulta: string) {
    consulta = urlApi + consulta;
    consulta += `&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get<T>(consulta);
  }

  obtenerPeliculasActtuales() {
    const hoy = new Date();
    const ultimoDiaMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;
    let mesString;
    if (mes < 10) {
      mesString = '0' + mes;
    }
    const fechaInicial = `${hoy.getFullYear()}-${mesString}-01`;
    const fechaFinal = `${hoy.getFullYear()}-${mesString}-${ultimoDiaMes}`;

    return this.ejecutarConsulta<ResultadoBDPeliculas>(`/discover/movie?primary_release_date.gte=${fechaInicial}&primary_release_date.lte=${fechaFinal}`);
  }
}
