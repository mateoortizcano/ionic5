import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componentt } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Observable<Componentt[]>;

  constructor(private menuCtlr: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOptions();
  }

  toggleMenu() {
    // toggle es que si el menu esta abierto se abra y si estpa bierto se cierrre
    // Esta es la manera complicada de abrir o cerrar el menu
    this.menuCtlr.toggle();
  }

}

