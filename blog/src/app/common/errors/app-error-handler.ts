import { getLocaleDateTimeFormat } from '@angular/common';
import { ErrorHandler } from '@angular/core';
import { AppError } from './app-error';

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any) {
        //log error in db.
        if (error instanceof AppError)
            console.log(error.getErrorText(), error.getOriginError(), new Date().getTime());
    }
}
