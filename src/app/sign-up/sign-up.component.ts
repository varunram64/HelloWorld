import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlDirective, Validators } from '@angular/forms';
import { UseridValidators } from './userid.validators';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  loginform = new FormGroup({ 
    userid: new FormControl('', 
    Validators.required,
    UseridValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  get userid() {
    return this.loginform.get('userid');
  };

  get password() {
    return this.loginform.get('password');
  };
}
