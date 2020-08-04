import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  @Input() tittle: string;
  constructor() { }

  ngOnInit() {
  }

}
