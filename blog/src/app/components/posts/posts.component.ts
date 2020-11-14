import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import * as faker from 'faker';

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
            this.fakeSomeData(posts as any[]);
        });
    }

    private fakeSomeData(arr: any[]) {
        for (let post of arr) {
            post.content = faker.lorem.paragraphs();
            post.caption = faker.lorem.paragraph();
        }
        this.posts = arr;
    }
}
