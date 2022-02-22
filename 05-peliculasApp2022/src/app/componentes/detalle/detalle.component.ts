import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { DetallesPelicula, Creditos, Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { MoviesStorageService } from '../../services/movies-storage.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: DetallesPelicula = {};
  creditos: Creditos = {};
  oculto = 150;
  slideCastOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -15
  }
  esFavorita = false;

  constructor(private moviesService: MoviesService, private modalCtrl: ModalController,
    private moviesStorage: MoviesStorageService) { }

  async ngOnInit() {
    this.esFavorita = await this.moviesStorage.peliculaEsFavorita(this.id);
    this.moviesService.obtenerDetalles(this.id).subscribe(res => {
      this.pelicula = res;
    }
    )
    this.moviesService.obtenerCreditos(this.id).subscribe(res => {
      this.creditos = res;
    })
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  agregarAFavoritos(pelicula: DetallesPelicula) {
    this.esFavorita = !this.esFavorita;
    this.moviesStorage.agregarPeliculas(pelicula);
  }

}
