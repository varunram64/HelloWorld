import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlDirective, Validators } from '@angular/forms';
import { UseridValidators } from './userid.validators';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  signupform = new FormGroup({ 
    account: new FormGroup({
      userid: new FormControl('', 
      Validators.required,
      UseridValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
  });

  signUp(value: any) {
    this.signupform.setErrors({
      invalidUser: true
    });
  }

  get userid() {
    return this.signupform.get('account.userid');
  };

  get password() {
    return this.signupform.get('account.password');
  };
}
