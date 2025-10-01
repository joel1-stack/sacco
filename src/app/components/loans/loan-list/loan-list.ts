import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../layout/header/header';

@Component({
  selector: 'app-loan-list',
  imports: [CommonModule, Header],
  templateUrl: './loan-list.html',
  styleUrl: './loan-list.css'
})
export class LoanList {
  loans = [
    { id: 1, type: 'Personal Loan', amount: 50000, balance: 35000, status: 'Active', nextPayment: new Date() },
    { id: 2, type: 'Emergency Loan', amount: 20000, balance: 0, status: 'Completed', nextPayment: null }
  ];
}
