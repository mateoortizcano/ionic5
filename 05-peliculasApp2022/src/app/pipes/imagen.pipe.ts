import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.urlImagenes

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(urlImagen: string, tamanio: string = 'w500'): unknown {
    return !urlImagen ? './assets/no-image-banner.jpg' : `${URL}${tamanio}${urlImagen}`;
  }

}
