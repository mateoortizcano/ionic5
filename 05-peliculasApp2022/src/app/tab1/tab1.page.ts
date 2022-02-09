import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesServiceService } from '../services/movies-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  slideOpts = {
    slidesPerView : 1.1,
    freeMode  : true
  }

  constructor(private moviesService: MoviesServiceService) { }
  
  ngOnInit(): void {
    this.moviesService.obtenerPeliculas().subscribe(res => {
      console.log('Respuesta: ', res);
      this.peliculasRecientes = res.results;
    });
  }

}
