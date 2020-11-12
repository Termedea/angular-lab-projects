import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    constructor(private _service: PostService) {}
    posts: any[];
    author;

    ngOnInit(): void {
        this._service.getAll().subscribe((posts) => {
            console.log(posts);
            this.posts = posts as any[];
        });
    }
}
