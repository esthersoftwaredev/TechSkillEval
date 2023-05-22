import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://python-flask-vitsantix.onrender.com';  // Deployed Flask server URL
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

  // someSecuredEndpoint(data: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/secured-endpoint`, data, this.httpOptions());
  // }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  logout(): void {
    // Clear the token
    this.token = "";
  }
}
