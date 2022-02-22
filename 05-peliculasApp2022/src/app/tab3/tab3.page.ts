import { Component, OnInit } from '@angular/core';
import { Pelicula, DetallesPelicula, Genre } from '../interfaces/interfaces';
import { MoviesStorageService } from '../services/movies-storage.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  peliculasFavoritasPorGenero: any[] = [];
  generos: Genre[] = [];

  constructor(private moviesStorageService: MoviesStorageService,
    private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    this.peliculasFavoritasPorGenero = [];
    const peliculasFavoritas = await this.moviesStorageService.cargarFavoritos();
    this.moviesService.consultarGeneros().subscribe(res => this.generos = res['genres']);
    this.generos.forEach(genero => {
      const peliculasPorGenero = peliculasFavoritas.filter(
        pelicula => pelicula.genres.find(
          gen => gen.name == genero.name));
      this.peliculasFavoritasPorGenero.push({
        genero: genero.name,
        peliculas: peliculasPorGenero
      });
    });
  }

}
