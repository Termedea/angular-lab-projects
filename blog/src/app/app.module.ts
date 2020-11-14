import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { TruncatePipe } from './common/pipes/truncate.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        NavigationComponent,
        UsersDetailComponent,
        PostsDetailComponent,
        ArchivesComponent,
        TruncatePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        PostService,
        {
            provide: ErrorHandler,
            useClass: AppErrorHandler
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
