import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://python-flask-vitsantix.onrender.com';
  token: string = "";

  constructor(private http: HttpClient) { }

  setToken(token: string): void {
    this.token = token;
  }

  httpOptions(): Object {
    // Include the JWT in the Authorization header
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return { headers: headers };
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  logout(): void {
    // Clear the token
    this.token = "";
  }

  isAuthenticated(): boolean {
    return !!this.token; // Return true if the token exists, indicating that the user is authenticated
  }
}
