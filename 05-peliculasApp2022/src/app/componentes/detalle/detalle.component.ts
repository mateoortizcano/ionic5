import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { DetallesPelicula, Creditos } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

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

  constructor(private moviesService: MoviesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('ID', this.id);
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

}
