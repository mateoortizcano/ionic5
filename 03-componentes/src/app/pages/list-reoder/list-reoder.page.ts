import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reoder',
  templateUrl: './list-reoder.page.html',
  styleUrls: ['./list-reoder.page.scss'],
})
export class ListReoderPage implements OnInit {

  personajes = ['Aquaman', 'Batman', 'Superman', 'Flash', 'WonderWoman'];
  constructor() { }

  ngOnInit() {
  }

  doReorder(event) {
    console.log(event);
    event.detail.complete();

  }

  onClick() {
    console.log(this.personajes);

  }

}
