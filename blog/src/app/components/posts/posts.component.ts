import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    constructor(private _service: PostService) {}
    posts: any[];
    author;
    loadingIcon;
    loading: boolean = true;

    ngOnInit(): void {
        this.loadingIcon = faSpinner;
        this._service.getAll().subscribe((posts) => {
            this.posts = this._service.fakePostData(posts as any[]);
        });
    }
    ngAfterContentInit() {
        this.loading = false;
    }
}
