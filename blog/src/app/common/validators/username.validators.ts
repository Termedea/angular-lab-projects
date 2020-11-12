import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        //Simulated asynchronous function

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Mikaela') {
                    resolve({ shouldBeUnique: true }); // The ValidationErrors-object that is promised.
                } else {
                    resolve(null);
                }
            }, 2000);
        }); //resolve and reject are functions. The inline function is the executor function that returns void.
    }
}
