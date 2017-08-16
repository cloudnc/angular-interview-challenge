import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  public constructor(protected formBuilder: FormBuilder) {

  }

  public getForm(): FormGroup {

    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  public ngOnInit() {
    this.resetForm();
  }

  public resetForm(): void {
    this.loginForm = this.getForm();
  }

  public onSubmit(): void {
    const details = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value,
    };

    console.log(`login details:`, details);

  }

}
