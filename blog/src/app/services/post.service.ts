import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFound } from '../common/not-found';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class PostService extends DataService {
    constructor(http: HttpClient) {
        super(http, 'https://5fad69682ec98b00160484db.mockapi.io/api/v1/posts');
    }

    /* Overriding handle error for more custom messages. */
    handleError(err: any) {
        console.log('PostErrors?');
        switch (err.status) {
            case 404:
                return throwError(new NotFound(err, "That post doesn't exist"));
            case 400:
                return throwError(new BadInput(err));
            default:
                return throwError(new AppError(err, 'I am a custom app error'));
        }
    }
}
