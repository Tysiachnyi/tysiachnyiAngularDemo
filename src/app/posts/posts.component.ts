import { Component, OnInit } from '@angular/core';
import {Post, PostsService} from '../services/posts.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  form: FormGroup;
  addPostValue: boolean;
  inputValue: string;
  id: number;
  modal: boolean;
  newPost: number;
  helper: Post[];
  likedPost;

  constructor(
    public postsService: PostsService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup( {
      title: new FormControl('', [
        Validators.required,
      ]),
      text: new FormControl('', [
          Validators.required,
          Validators.minLength(6)
      ])
    });
    this.addPostValue = false;
    this.inputValue = 'Show input';
    this.id = 100;
  }

  addInput() {
    this.addPostValue = !this.addPostValue;
    this.inputValue = this.addPostValue ? 'Hide input' : 'Show input';
  }

    submit() {
    this.postsService.posts.push({
        title: this.form.get('title').value,
        text: this.form.get('text').value,
        id: this.id++
      });
    this.form.reset();
    this.addPostValue = !this.addPostValue;
    this.inputValue = this.addPostValue ? 'Hide input' : 'Show input';
    }

  deletePost(id: number) {
    this.postsService.posts = this.postsService.posts.filter(d => d.id !== id);
  }

  likePost(id: number) {
    // const found = this.postsService.likedPosts.some(el => el.id === id);
    // if (!found) {
    //   this.postsService.likedPosts = this.postsService.likedPosts
    //       .concat(this.postsService.posts
    //           .find(d => d.id === id));
    //   this.likedPost = this.postsService.posts.find(el => el.id === id);
    //   this.likedPost.liked = true;
    //   console.log(this.postsService.likedPosts);
    // }
    this.postsService.like(id);
  }

  disLikePost(id: number) {
    // const found = this.postsService.likedPosts.some(el => el.id === id);
    // if (found) {
    //   console.log(this.postsService.likedPosts);
    //   this.postsService.likedPosts = this.postsService.likedPosts
    //       .filter(d => d.id !== id);
    //   console.log(this.postsService.likedPosts);
    //   this.likedPost = this.postsService.posts.find(el => el.id === id);
    //   this.likedPost.liked = false;
    // }
    this.postsService.dislike(id);
  }
}
