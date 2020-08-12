import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor(private loadingCtlr: LoadingController) { }

  ngOnInit() {
    this.presentLoading('Espere por favor...');
    setTimeout(() => {
      this.loading.dismiss();
    }, 5000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtlr.create({
      cssClass: 'my-custom-class',
      message: message,
    });
    return this.loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }

}
