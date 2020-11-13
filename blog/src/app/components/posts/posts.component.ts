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
            console.log(posts);
            this.posts = posts as any[];

            this.fakeSomeData();
            for (let post of this.posts) {
                post.content = faker.lorem.paragraphs();
                console.log(post);
            }
        });
    }

    private fakeSomeData() {
        for (let post of this.posts) {
            post.content = faker.lorem.paragraphs();
            post.caption = faker.lorem.paragraph();
            console.log(post);
        }
    }
}
