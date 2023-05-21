import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        username: this.email?.value,
        password: this.password?.value
      };

      this.userService.login(credentials).subscribe(
        (response) => {
          console.log('Login successful!', response);
          // Handle successful login response here (e.g., redirect to a new page)
        },
        (error) => {
          console.log('Login failed!', error);
          // Handle login error here (e.g., display an error message)
        }
      );
    } else {
      console.log('Invalid Form');
    }
  }
}
