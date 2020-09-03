import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.imageUrl;

@Pipe({
  name: 'imagenUrl'
})
export class ImagenUrlPipe implements PipeTransform {

  transform(urlImagen: string, tamano: string = 'w500'): unknown {
    if (!urlImagen) {
      return './assets/no-image-banner.jpg';
    }

    return `${URL}/${tamano}${urlImagen}`;
  }

}
