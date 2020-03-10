import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  info;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      // this.getService.fetchTodos('https://api.github.com/repos/Tysiachnyi/tysiachnyiAngularDemo/commits');
      // this.info = this.getService.data;
    this.fetchTodos('https://api.github.com/repos/Tysiachnyi/tysiachnyiAngularDemo/commits');
  }

  fetchTodos(url) {
    this.http.get(url)
        .subscribe(response => {
          this.info = response;
        });
  }
}
