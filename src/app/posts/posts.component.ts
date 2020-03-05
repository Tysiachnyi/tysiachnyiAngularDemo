import { Component, OnInit } from '@angular/core';
import { PostsService } from '../data/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    public postsService: PostsService
  ) { }

  ngOnInit(): void {
  }

}
