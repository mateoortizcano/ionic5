import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../servicios/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  categorias = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.cargarNoticias(this.categorias[0]);
  }

  cambiarCategoria(event) {
    this.noticias = [];
    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(categoria: string) {
    this.noticiasService.getTopHeadlinesByCategoria(categoria)
      .subscribe(noticias => {
        this.noticias.push(...noticias.articles);
      });
  }
}
