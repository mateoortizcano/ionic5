import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';
import { Pelicula } from '../entidades/entidades';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculas: Pelicula[] = [];
  slidesOptions = {
    slidesPerView: 1.3,
    freeMode: true
  }

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.peliculasService.obtenerPeliculasActtuales()
      .subscribe(res => {
        this.peliculas = res.results;
      });
  }


}
