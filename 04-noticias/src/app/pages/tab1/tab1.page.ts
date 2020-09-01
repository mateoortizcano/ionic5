import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../servicios/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.cargarNoticias();
  }

  loadData(event) {
    this.cargarNoticias(event);
  }

  cargarNoticias(event?) {
    this.noticiasService.getTopHeadlines().subscribe(
      noticias => {
        if (noticias.articles.length === 0) {
          event.target.disabled = true;
          event.target.complete();
          return;
        }
        this.noticias.push(...noticias.articles);
        if (event) {
          event.target.complete();
        }
      }
    )
  }

}
