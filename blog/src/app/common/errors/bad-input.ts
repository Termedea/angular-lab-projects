import { ValidationErrors } from '@angular/forms';
import { AppError } from './app-error';

export class BadInput extends AppError {
    constructor(error?: any, message?: string) {
        super(error, message ? message : 'You are not allowed to enter those data.');
    }
    getValidationErrors(): ValidationErrors {
        return { badInput: true };
    }
}
