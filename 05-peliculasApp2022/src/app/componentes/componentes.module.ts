import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesShowBackdropComponent } from './slides-show-backdrop/slides-show-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlidesShowPosterComponent } from './slides-show-poster/slides-show-poster.component';
import { SlidesShowParesComponent } from './slides-show-pares/slides-show-pares.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [SlidesShowBackdropComponent, SlidesShowPosterComponent, SlidesShowParesComponent, DetalleComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    SlidesShowBackdropComponent, SlidesShowPosterComponent, SlidesShowParesComponent
  ]
})
export class ComponentesModule { }
