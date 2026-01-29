import { AbstractControl, ValidatorFn } from "@angular/forms";

    export class FormValidators {

        // methode pour valider un entier entre min et max
        static integerBetween(min:number,max:number) : ValidatorFn {
            
            return (c:AbstractControl) => {
                if(!Number.isInteger(c.value)) { // si la valeur n'est pas un entier
                    return {
                        integer : {
                            valid :false
                        }
                    }
                }
                else if ((c.value<min) || (c.value>max)) { // si la valeur est en dehors de l'intervalle [min, max]
                    return {
                        limit: {
                            valid:false
                        }
                    }
                }
                return null; // si la valeur est valide
            }
        }
    }
