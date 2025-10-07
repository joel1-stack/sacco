import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Api } from './api';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Member {
  private baseUrl = environment.apiUrl;

  constructor(private api: Api, private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.api.get('/members/profile/');
  }

  updateProfile(data: FormData): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${this.baseUrl}/members/profile/`, data, { headers });
  }

  getDocuments(): Observable<any> {
    return this.api.get('/members/documents/');
  }

  uploadDocument(formData: FormData): Observable<any> {
    return this.api.post('/members/documents/', formData);
  }
}
