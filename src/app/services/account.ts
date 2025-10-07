import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class Account {
  constructor(private api: Api) {}

  getAccounts(): Observable<any> {
    return this.api.get('/accounts/');
  }

  getAccountDetail(id: number): Observable<any> {
    return this.api.get(`/accounts/${id}/`);
  }

  getAccountTransactions(id: number): Observable<any> {
    return this.api.get(`/accounts/${id}/transactions/`);
  }

  getSavingsAccounts(): Observable<any> {
    return this.api.get('/accounts/savings/');
  }

  getSharesAccounts(): Observable<any> {
    return this.api.get('/shares/');
  }
}
