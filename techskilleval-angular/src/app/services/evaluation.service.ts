import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluation } from '../models/evaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private apiUrl = 'https://python-flask-TechSkillEval.onrender.com/assessments/';  // Deployed Flask server URL

  constructor(private http: HttpClient) { }

  getFeEvaluations(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(`${this.apiUrl}/frontend`);
  }

  getMeanEvaluations(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(`${this.apiUrl}/mean`);
  }

  getMernEvaluations(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(`${this.apiUrl}/mern`);
  }

  getBackendEvaluations(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(`${this.apiUrl}/backend`);
  }

  getFullStackEvaluations(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(`${this.apiUrl}/fullstack`);
  }

  getEvaluation(id: string): Observable<Evaluation> {
    return this.http.get<Evaluation>(`${this.apiUrl}/assessments/${id}`);
  }
}
