import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  peliculasPopulares: Pelicula[] = [];

  constructor(private moviesService: MoviesService) { }

  private obtenerPopulares() {
    this.moviesService.obtenerPeliculasPopulares().subscribe(resp => {
      const arrTemp = [...this.peliculasPopulares, ...resp.results];
      this.peliculasPopulares = arrTemp;
    })
  }

  ngOnInit(): void {
    this.moviesService.obtenerPeliculas().subscribe(res => {
      this.peliculasRecientes = res.results;
    });
    this.obtenerPopulares();
  }

  cargarMasPeliculas() {
    this.obtenerPopulares();
  }

}
