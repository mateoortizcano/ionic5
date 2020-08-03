import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.posts = this.dataService.getData();
  }

  escuchaClick(id) {
    console.log('Click en : ' + id);

  }

}
