import { HttpErrorResponse } from '@angular/common/http';
import { ValidationErrors } from '@angular/forms';

export class AppError {
    //are errors always HttpErrorResponses? In that case, type HttpErrorResponse instead of any.
    constructor(
        protected origError?: any /*HttpErrorResponse*/,
        protected customMessage?: string
    ) {}
    getErrorText(): string {
        return this.customMessage ? this.customMessage : 'An unexpected error has occured.';
    }
    getOriginError(): string {
        return this.origError ? this.origError.message : '';
    }
    getValidationErrors(): ValidationErrors {
        return { genericAppError: true };
    }
}
