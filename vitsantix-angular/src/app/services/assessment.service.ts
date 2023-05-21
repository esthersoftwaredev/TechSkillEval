import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assessment } from '../models/assessment';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  private apiUrl = 'https://python-flask-vitsantix.onrender.com/';  // Deployed Flask server URL

  constructor(private http: HttpClient) { }

  getAssessments(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(`${this.apiUrl}/frontend-assessments`);
  }

  getAssessment(id: string): Observable<Assessment> {
    return this.http.get<Assessment>(`${this.apiUrl}/assessments/${id}`);
  }
}
