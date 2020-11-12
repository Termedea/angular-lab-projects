import { ValidationErrors } from '@angular/forms';
import { AppError } from './app-error';

export class BadInput extends AppError {
    constructor(error?: any, message?: string) {
        super(error, message ? message : "You can't enter that.");
    }
    getValidationErrors(): ValidationErrors {
        return { badInput: true };
    }
}
