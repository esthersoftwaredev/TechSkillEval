import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://python-flask-vitsantix.onrender.com/auth';
  token: string = "";
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  authState$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem("token", token);
    this.token = token;
    this.isLoggedInSubject.next(true);
  }

  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("token") || "";
    }
    return this.token;
  }

  httpOptions(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = this.getToken();
    if (token) {
      headers = headers.set("Authorization", "Bearer " + token);
    }
    return headers;
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: { access_token: string }) => {
        this.setToken(response.access_token);
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
    this.isLoggedInSubject.next(false);
  }

  isAuthenticated(): boolean {
    return !!this.token; // Return true if the token exists, indicating that the user is authenticated
  }
}
