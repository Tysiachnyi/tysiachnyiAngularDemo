import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {MainComponent} from './main/main.component'
import {AboutComponent} from './about/about.component'
import {PostsComponent} from './posts/posts.component'
import {PostComponent} from './post/post.component'
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'posts', component: PostsComponent},
  {path:'posts/:id', component: PostComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
