import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slides-show-backdrop',
  templateUrl: './slides-show-backdrop.component.html',
  styleUrls: ['./slides-show-backdrop.component.scss'],
})
export class SlidesShowBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[];
  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  }

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

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
