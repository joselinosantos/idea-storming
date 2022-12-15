import { AbstractControl } from "@angular/forms";

export function minusculoValidator(control: AbstractControl) {
    const autor = control.value as string;
    if (autor === autor?.toLowerCase()) {
        return {minusculo: true}
    } else {
        return null
    }
}

export function maiusculoValidator(control: AbstractControl) {
    const autor = control.value as string;
    if (autor === autor?.toUpperCase()) {
        return {maiusculo: true}
    } else {
        return null
    }
}