import { Component } from '@angular/core';
import { DataLocalService } from '../../servicios/data-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  slidesOptions = {
    allowSlidePrev: false,
    allowSlideNext: false
  }

  constructor(public dataLocalService: DataLocalService) { }

}
