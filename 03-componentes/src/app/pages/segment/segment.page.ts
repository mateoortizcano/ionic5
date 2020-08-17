import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  heroes: Observable<any[]>;
  publisher: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.heroes = this.dataService.getHeroes();
  }

  segmentChanged(event) {
    this.publisher = event.detail.value;
    if (this.publisher === 'todos') {
      this.publisher = '';
    }
    console.log(this.publisher);
  }

}
