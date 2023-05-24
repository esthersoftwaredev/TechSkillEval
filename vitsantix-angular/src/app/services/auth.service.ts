import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, tap, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private apiUrl = "https://python-flask-vitsantix.onrender.com/auth";
	token: string = "";

	constructor(private http: HttpClient) {}

	setToken(token: string): void {
		localStorage.setItem("token", token);
		this.token = token;
	}

	getToken(): string {
		if (!this.token) {
			this.token = localStorage.getItem("token") || "";
		}
		return this.token;
	}

	httpOptions(): Object {
		let headers = new HttpHeaders().set(
			"Authorization",
			"Bearer " + this.getToken()
		);
		return { headers: headers };
	}

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: { access_token: string }) => {
        console.log(response);
        this.setToken(response.access_token); // Set the token received from the server
      }),
      catchError(error => {
        console.error('There was an error during the login request', error);
        return throwError(error);
      })
    );
  }

	logout(): void {
		localStorage.removeItem("token");
		this.token = "";
	}

	isAuthenticated(): boolean {
		return !!this.token; // Return true if the token exists, indicating that the user is authenticated
	}
}
