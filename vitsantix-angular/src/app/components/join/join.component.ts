import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Component({
	selector: "app-join",
	templateUrl: "./join.component.html",
	styleUrls: ["./join.component.scss"],
})
export class JoinComponent {
	signUpForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private userService: UserService,
		private snackBar: MatSnackBar
	) {
		this.signUpForm = this.formBuilder.group(
			{
				fullName: ["", Validators.required],
				username: ["", Validators.required],
				email: ["", [Validators.required, Validators.email]],
				password: ["", [Validators.required, Validators.minLength(8)]],
				confirmPassword: ["", Validators.required],
			},
			{
				validator: this.mustMatch("password", "confirmPassword"),
			}
		);
	}

	get fullName() {
		return this.signUpForm.get("fullName");
	}

	get username() {
		return this.signUpForm.get("username");
	}

	get email() {
		return this.signUpForm.get("email");
	}

	get password() {
		return this.signUpForm.get("password");
	}

	get confirmPassword() {
		return this.signUpForm.get("confirmPassword");
	}

	onSignUpSubmit() {
		if (this.signUpForm.valid) {
			const formData = {
				fullName: this.fullName?.value,
				username: this.username?.value,
				email: this.email?.value,
				password: this.password?.value,
			};

			const config: MatSnackBarConfig = {
				duration: 3000, // Set the duration (in milliseconds)
				horizontalPosition: "right", // Set the horizontal position to center
				verticalPosition: "top", // Set the vertical position to top
				panelClass: ["success-snackbar"], // Apply the success-snackbar CSS class
			};

			this.userService.register(formData).subscribe(
				(response) => {
					console.log("Registration successful!", response);
					config.panelClass = ["error-snackbar"];
					this.snackBar.open("Registration successful!", "Close", config);
					// Handle successful sign-up response here
				},
				(error) => {
					console.log("Registration failed!", error);
					config.panelClass = ["error-snackbar"]; // Apply the error-snackbar CSS class
					this.snackBar.open("Registration failed!", "Close", config);
					// Handle sign-up error here
				}
			);
		} else {
			console.log("Invalid Form");
		}
	}

	mustMatch(controlName: string, matchingControlName: string) {
		return (formGroup: FormGroup) => {
			const control = formGroup.controls[controlName];
			const matchingControl = formGroup.controls[matchingControlName];

			if (matchingControl.errors && !matchingControl.errors["mustMatch"]) {
				return;
			}

			if (control.value !== matchingControl.value) {
				matchingControl.setErrors({ mustMatch: true });
			} else {
				matchingControl.setErrors(null);
			}
		};
	}
}
