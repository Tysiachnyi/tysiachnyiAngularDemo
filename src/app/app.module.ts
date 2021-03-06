import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './modal/modal.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {DashboardComponent} from './user-profile/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    MainComponent,
    AboutComponent,
    ErrorComponent,
    PostComponent,
    ModalComponent,
    UserProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
