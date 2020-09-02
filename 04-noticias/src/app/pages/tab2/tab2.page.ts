import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../servicios/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  categorias = [{ nombre: "negocios", filtro: "business" },
  { nombre: "entretenimiento", filtro: "entertainment" },
  { nombre: "general", filtro: "general" },
  { nombre: "salud", filtro: "health" },
  { nombre: "ciencia", filtro: "science" },
  { nombre: "deportes", filtro: "sports" },
  { nombre: "tecnología", filtro: "technology" }];
  noticias: Article[] = [];
  categoriaActual = this.categorias[0].filtro;

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.cargarNoticias(this.categorias[0].filtro);
  }

  cambiarCategoria(event) {
    this.noticias = [];
    this.categoriaActual = event.detail.value;
    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(categoria: string, event?) {
    this.noticiasService.getTopHeadlinesByCategoria(categoria)
      .subscribe(noticias => {
        if (noticias.articles.length === 0) {
          event.target.disabled = true;
          event.target.complete();
          return;
        }
        this.noticias.push(...noticias.articles);
        if (event) {
          event.target.complete();
        }
      });
  }

  loadData(event) {
    this.cargarNoticias(this.categoriaActual, event);
  }
}
