import {AbstractControl, ValidatorFn, Validator, FormControl, NG_VALIDATORS} from "@angular/forms";
import {Directive} from '@angular/core';

function validateEmail(): ValidatorFn {
  return (c : AbstractControl) => {
    if(c.value !== null) {
      const isValid = c.value.includes('@')
      if(isValid){
        return null;
      }else{
        return {
          validator: {
            valid: false
          }
        };
      }
    } else {
      return {
        validator: {
          valid: false
        }
      };
    }
  }
}

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true
  }]
})

export class EmailValidatorDirective implements Validator{

  validator: ValidatorFn;

  constructor() {
    this.validator = validateEmail();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
}
