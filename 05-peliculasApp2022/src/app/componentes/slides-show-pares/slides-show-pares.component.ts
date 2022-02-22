import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slides-show-pares',
  templateUrl: './slides-show-pares.component.html',
  styleUrls: ['./slides-show-pares.component.scss'],
})
export class SlidesShowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();
  slideOpts = {
    slidesPerView: 3.5,
    freeMode: true,
    spaceBetween: -20
  }

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  cargarMasPeliculas() {
    this.cargarMas.emit();
  }

  async verDetalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }

}
