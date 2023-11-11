import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assessment } from '../models/assessment';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  private apiUrl = 'https://python-flask-TechSkillEval.onrender.com/assessments/';  // Deployed Flask server URL

  constructor(private http: HttpClient) { }

  getFeAssessments(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(`${this.apiUrl}/frontend`);
  }

  getMeanAssessments(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(`${this.apiUrl}/mean`);
  }

  getMernAssessments(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(`${this.apiUrl}/mern`);
  }

  getBackendAssessments(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(`${this.apiUrl}/backend`);
  }

  getFullStackAssessments(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(`${this.apiUrl}/fullstack`);
  }

  getAssessment(id: string): Observable<Assessment> {
    return this.http.get<Assessment>(`${this.apiUrl}/assessments/${id}`);
  }
}
