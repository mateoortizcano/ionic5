import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(private storage: Storage) {
    this.obtenerFavoritos();
  }

  guardarNoticia(noticia: Article) {
    const existeNoticia = this.noticias.find(not => not.title === noticia.title)
    if (!existeNoticia) {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos', this.noticias);
    }
  }

  eliminarNoticia(noticia: Article) {
    this.noticias = this.noticias.filter(noti => noti.title != noticia.title);
    this.storage.set('favoritos', this.noticias);
  }

  async obtenerFavoritos() {
    const favoritos = await this.storage.get('favoritos');
    if (favoritos) {
      this.noticias = favoritos;
    }

  }
}
