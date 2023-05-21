import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserService } from "src/app/services/user.service";

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
        username: this.fullName?.value,
        email: this.email?.value,
        password: this.password?.value
      };

      this.userService.register(formData).subscribe(
        (response) => {
          console.log('Sign-up successful!', response);
          // Handle successful sign-up response here
        },
        (error) => {
          console.log('Sign-up failed!', error);
          // Handle sign-up error here
        }
      );
    } else {
      console.log('Invalid Form');
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
