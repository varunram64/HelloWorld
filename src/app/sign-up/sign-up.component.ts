import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlDirective, Validators } from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  loginform = new FormGroup({ 
    userid: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', Validators.required)
  });

  get userid() {
    return this.loginform.get('userid');
  };

  get password() {
    return this.loginform.get('password');
  };
}
