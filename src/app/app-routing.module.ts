import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {ErrorComponent} from './error/error.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AuthGuard} from './guard/auth.guard';
import {DashboardComponent} from './user-profile/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user', component: UserProfileComponent, canActivate: [AuthGuard], children: [{
      path: 'dashboard', component: DashboardComponent}
    ]},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
