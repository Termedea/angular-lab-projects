import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from '../common/errors/app-error';
import { BadInput } from '../common/errors/bad-input';
import { NotFound } from '../common/errors/not-found';
import { DataService } from './data.service';
import * as faker from 'faker';

@Injectable({
    providedIn: 'root'
})
export class PostService extends DataService {
    constructor(http: HttpClient) {
        super(http, 'https://5fad69682ec98b00160484db.mockapi.io/api/v1/posts');
    }

    /* Overriding handle error for more custom messages. */
    handleError(err: any) {
        switch (err.status) {
            case 404:
                return throwError(new NotFound(err, "That post doesn't exist"));
            case 400:
                return throwError(new BadInput(err));
            default:
                return throwError(new AppError(err, 'I am a custom app error'));
        }
    }

    fakePostData(posts: any[]) {
        for (let post of posts) {
            post.content = faker.lorem.paragraphs();
            post.caption = faker.lorem.paragraph();
        }
        return posts;
    }
}
export interface Post {
    id: string;
    createdAt: string;
    title: string;
    caption: string;
    content: string;
    author: any;
    image: string;
    updatedAt: string;
}
