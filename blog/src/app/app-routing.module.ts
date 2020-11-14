import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivesComponent } from './components/archives/archives.component';
import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';

const routes: Routes = [
    { path: '', component: PostsComponent },
    { path: 'posts/:id', component: PostsDetailComponent },
    { path: 'posts/new', component: PostsDetailComponent },
    { path: 'users/:id', component: UsersDetailComponent },
    { path: 'archives', component: ArchivesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
