import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from '../common/errors/app-error';
import { BadInput } from '../common/errors/bad-input';
import { NotFound } from '../common/errors/not-found';
import { DataService } from './data.service';
import * as faker from 'faker';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
    providedIn: 'root'
})
export class PostService extends DataService {
    constructor(http: HttpClient) {
        let url = 'https://5fad69682ec98b00160484db.mockapi.io/api/v1/posts';
        super(http, url);
    }

    updatePost(id: number, data) {
        const http$ = this._http.put(this._url + '/' + id, data);
        return http$.pipe(catchError(this.handleError));
    }

    /* Overriding handle error for more custom messages. */
    handleError(err: any) {
        switch (err.status) {
            case 404:
                return throwError(new NotFound(err, "That post doesn't exist"));
            case 400:
                return throwError(new BadInput(err));
            default:
                return throwError(new AppError(err));
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
    id: number;
    createdAt: string;
    title: string;
    caption: string;
    content: string;
    author: any;
    image: string;
    updatedAt: string;
}
