import { Component, OnInit } from '@angular/core';
import { PostsService } from '../data/posts.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor(
    public postsService: PostsService,
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
}
