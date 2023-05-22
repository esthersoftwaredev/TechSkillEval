import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private userService: UserService,
		private snackBar: MatSnackBar,
    private router: Router
	) {
		this.loginForm = this.formBuilder.group({
			email: ["", [Validators.required, Validators.email]],
			password: ["", [Validators.required, Validators.minLength(8)]],
		});
	}

	get email() {
		return this.loginForm.get("email");
	}

	get password() {
		return this.loginForm.get("password");
	}

	onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        username: this.email?.value,
        password: this.password?.value
      };

      const config: MatSnackBarConfig = {
        duration: 3000,              // Set the duration (in milliseconds)
        horizontalPosition: 'right', // Set the horizontal position to center
        verticalPosition: 'top',      // Set the vertical position to top
        panelClass: ['success-snackbar']  // Apply the success-snackbar CSS class
      };

      this.userService.login(credentials).subscribe(
        (response) => {
          console.log('Login successful!', response);
          config.panelClass = ['error-snackbar'];
          this.snackBar.open('Login successful!', 'Close', config); // Display success snackbar
          this.router.navigate(['/profile']);
        },
        (error) => {
          console.log('Login failed!', error);
          config.panelClass = ['error-snackbar']; // Apply the error-snackbar CSS class
          this.snackBar.open('Login failed!', 'Close', config); // Display error snackbar
          // Handle login error here (e.g., display an error message)
        }
      );
    } else {
      console.log('Invalid Form');
    }
  }
}
