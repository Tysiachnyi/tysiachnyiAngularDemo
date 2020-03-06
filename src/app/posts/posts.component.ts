import { Component, OnInit } from '@angular/core';
import { PostsService } from '../data/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  addPostValue: boolean;
  inputValue: string;
  id: number;

  constructor(
    public postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.addPostValue = false;
    this.inputValue = 'Show input';
    this.id = 100;
  }

  addInput() {
    console.log(this.postsService.posts);
    this.addPostValue = !this.addPostValue;
    this.inputValue = this.addPostValue ? 'Hide input' : 'Show input';
  }

  addPost() {
    this.postsService.posts.push({
      title: 'Hello',
      text: 'yo',
      id: this.id++
    });
  }
}
