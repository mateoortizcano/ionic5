import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;
  usuarios: Observable<any>;
  constructor(private dataService: DataService,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  favorite(user) {
    this.presentToast('Guardó favoritos.')
    this.lista.closeSlidingItems();
  }
  share(user) {
    this.presentToast('Compartido!');
    this.lista.closeSlidingItems();
  }
  delete(user) {
    this.presentToast('Se eliminó.')
    this.lista.closeSlidingItems();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
