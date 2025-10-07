import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class Loan {
  constructor(private api: Api) {}

  getLoans(): Observable<any> {
    return this.api.get('/loans/');
  }

  getLoanDetail(id: number): Observable<any> {
    return this.api.get(`/loans/${id}/`);
  }

  applyForLoan(loanData: any): Observable<any> {
    return this.api.post('/loans/apply/', loanData);
  }

  makeRepayment(loanId: number, amount: number): Observable<any> {
    return this.api.post(`/loans/${loanId}/repay/`, { amount });
  }

  getLoanSchedule(id: number): Observable<any> {
    return this.api.get(`/loans/${id}/schedule/`);
  }
}
