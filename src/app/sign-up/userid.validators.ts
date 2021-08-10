import { AbstractControl, ControlContainer, ValidationErrors } from "@angular/forms";

export class UseridValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') != -1) {
            return {
                cannotContainSpace: true
            };
        }

        return null;
    }

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let value: string = (control.value as string);
                console.log(`value of the string ${value}`);

                if((control.value as string) == "varun")
                    resolve({
                        shouldBeUnique: true
                    });
                else resolve(null);
            }, 2000);
        });
    }
}