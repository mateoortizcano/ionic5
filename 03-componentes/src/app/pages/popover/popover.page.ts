import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoOverCtlr: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(event: any) {
    const popover = await this.popoOverCtlr.create({
      component: PopinfoComponent,
      event: event,
      mode: 'ios',
      backdropDismiss: false
    });
    await popover.present();

    const { data } = await popover.onDidDismiss();
    console.log('datos en padre:', data);

  }

}
