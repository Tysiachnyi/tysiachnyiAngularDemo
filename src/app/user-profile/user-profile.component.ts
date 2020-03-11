import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {PostsService} from '../services/posts.service';
import {PostsComponent} from '../posts/posts.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AuthService,
              public postsService: PostsService) {}

  ngOnInit(): void {
  }


  // TODO 2 add liked posts

}
