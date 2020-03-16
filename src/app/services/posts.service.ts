import {Injectable} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  liked?: boolean;
  id: number;
}

@Injectable({providedIn: 'root'})
export class PostsService {
  likedPost;
  posts: Post[] = [
    {title: 'New York times close', text: 'Sample text for post 1', id: 11},
    {title: 'Angular <3', text: 'Sample text for post 2', id: 22},
    {title: 'Apple create 14,1 inch MacBook pro', text: 'Sample text for post 3', id: 33},
    {title: 'Users need more privacy', text: 'Sample text for post 4', id: 44}
  ];

  likedPosts: Post[] = [];

  getById(id: number) {
    return this.posts.find(p => p.id === id);
  }
  like(id: number) {
    console.log(id);
    const found = this.likedPosts.some(el => el.id === id);
    if (!found) {
      this.likedPosts = this.likedPosts
           .concat(this.posts
               .find(d => d.id === id));
      this.likedPost = this.posts.find(el => el.id === id);
      this.likedPost.liked = true;
      console.log(this.likedPosts);
     }
  }
  dislike(id: number) {
    console.log(id);
    const found = this.likedPosts.some(el => el.id === id);
    if (found) {
      console.log(this.likedPosts);
      this.likedPosts = this.likedPosts
          .filter(d => d.id !== id);
      console.log(this.likedPosts);
      this.likedPost = this.posts.find(el => el.id === id);
      this.likedPost.liked = false;
    }
  }
}
