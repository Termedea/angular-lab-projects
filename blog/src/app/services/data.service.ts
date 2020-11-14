import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/errors/app-error';
import { BadInput } from '../common/errors/bad-input';
import { NotFound } from '../common/errors/not-found';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private _http: HttpClient, private _url: string) {}
    getAll() {
        /*we don't have to subscribe to handle the response, 
        he component does that, so we just return the observable*/
        //return this._http.get(this._url);

        const http$ = this._http.get(this._url);
        return http$.pipe(catchError(this.handleError));
    }
    create(resource) {
        const http$ = this._http.post(this._url, resource);
        //return throwError(new BadInput(null, 'This post is not allowed.'));
        return http$.pipe(catchError(this.handleError));

        /* Implementation for testing 400 error
        const err = new HttpErrorResponse({ status: 400 });
        return throwError(new BadInput(err)); */
    }
    patch(id: number, data) {
        const http$ = this._http.patch(this._url + '/' + id, data);
        return http$.pipe(catchError(this.handleError));
    }
    update(resource) {
        const http$ = this._http.put(this._url, resource);
        return http$.pipe(catchError(this.handleError));
    }
    delete(id: number) {
        const http$ = this._http.delete(this._url + '/' + id);
        //return throwError(new NotFound());
        return http$.pipe(catchError(this.handleError));

        /* Implementation for testing 404 error
        const err = new HttpErrorResponse({ status: 404 });
        return throwError(new NotFound(err)); */
    }

    protected handleError(err: any) {
        switch (err.status) {
            case 404:
                return throwError(new NotFound(err));
            case 400:
                return throwError(new BadInput(err));
            default:
                return throwError(new AppError(err));
        }
    }
}
