import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../componentes/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  peliculas: Pelicula[] = [];
  textoBuscar = '';
  mostrarSpinner = false;
  ideas = ['Spiderman', 'Superman', 'Batman', 'Moonfall'];

  constructor(private moviesService: MoviesService, private modalCtrl: ModalController) { }

  buscarPelicula(event) {
    const nombre: string = event.detail.value;
    if (nombre.length !== 0) {
      this.mostrarSpinner = true;
      this.moviesService.buscarPeliculasPorNombre(nombre).subscribe(
        res => {
          this.peliculas = res.results;
          this.mostrarSpinner = false;
        }
      );
    } else {
      this.mostrarSpinner = false;
      this.peliculas = [];
    }
  }

  seleccionarIdea(idea: string) {
    this.textoBuscar = idea;
  }

  async verDetalle(id: number) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }


}
