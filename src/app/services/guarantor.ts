import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class Guarantor {
  constructor(private api: Api) {}

  getGuarantorRequests(): Observable<any> {
    return this.api.get('/guarantors/requests/');
  }

  approveRequest(requestId: number): Observable<any> {
    return this.api.post(`/guarantors/requests/${requestId}/approve/`, {});
  }

  declineRequest(requestId: number, reason: string): Observable<any> {
    return this.api.post(`/guarantors/requests/${requestId}/decline/`, { reason });
  }

  getGuarantorCommitments(): Observable<any> {
    return this.api.get('/guarantors/commitments/');
  }
}
