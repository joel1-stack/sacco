import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class Transaction {
  constructor(private api: Api) {}

  getTransactions(): Observable<any> {
    return this.api.get('/transactions/');
  }

  getTransactionDetail(id: number): Observable<any> {
    return this.api.get(`/transactions/${id}/`);
  }

  deposit(data: { account_id: number, amount: number, description: string }): Observable<any> {
    return this.api.post('/transactions/deposit/', data);
  }

  withdraw(data: { account_id: number, amount: number, description: string }): Observable<any> {
    return this.api.post('/transactions/withdraw/', data);
  }

  transfer(data: { from_account_id: number, to_account_number: string, amount: number, description: string }): Observable<any> {
    return this.api.post('/transactions/transfer/', data);
  }
}
