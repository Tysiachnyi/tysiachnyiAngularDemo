import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GithubService {
    data;
    constructor(private http: HttpClient) {
    }

    fetchTodos(url) {
        this.http.get(url)
            .subscribe(response => {
                this.data = response;
                console.log(this.data[0]);
            });
    }

}
