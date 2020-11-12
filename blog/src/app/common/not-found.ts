import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ValidationErrors } from '@angular/forms';
import { AppError } from './app-error';

export class NotFound extends AppError {
    constructor(error?: any, message?: string) {
        super(error, message ? message : 'Item does not exist.');
    }

    getValidationErrors(): ValidationErrors {
        return { notFoundError: true };
    }
}
