import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assessment } from '../models/assessment';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  private apiUrl = 'http://localhost:5000';  // Flask server URL

  constructor(private http: HttpClient) { }

  getAssessments(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(`${this.apiUrl}/assessments`);
  }

  getAssessment(id: string): Observable<Assessment> {
    return this.http.get<Assessment>(`${this.apiUrl}/assessments/${id}`);
  }
}
