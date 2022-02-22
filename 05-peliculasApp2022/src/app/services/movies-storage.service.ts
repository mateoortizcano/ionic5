import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { DetallesPelicula } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesStorageService {

  private _storage: Storage | null = null;
  peliculas: DetallesPelicula[] = [];

  constructor(private moviesStorage: Storage) {
    this.init().then(res => this.cargarFavoritos());
  }

  async init() {
    const storage = await this.moviesStorage.create();
    this._storage = storage;
  }

  async cargarFavoritos() {
    const peliculasExistentes = await this._storage?.get('peliculas');
    this.peliculas = peliculasExistentes || [];
    return this.peliculas;
  }

  agregarPeliculas(pelicula: DetallesPelicula) {
    const peliculaExiste = this.peliculas.find(pel =>
      pel.id === pelicula.id
    );
    if (peliculaExiste) {
      this.peliculas = this.peliculas.filter(pel => pel.id !== pelicula.id);
    } else {
      this.peliculas.push(pelicula);
    }
    this._storage?.set('peliculas', this.peliculas);
  }

  async peliculaEsFavorita(id: number) {
    await this.cargarFavoritos();
    const peliculaExiste = this.peliculas.find(pel =>
      pel.id === id
    );
    return peliculaExiste ? true : false;
  }
}
