import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../layout/header/header';

@Component({
  selector: 'app-transaction-list',
  imports: [CommonModule, Header],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.css'
})
export class TransactionList {
  transactions = [
    { id: 1, type: 'Deposit', amount: 5000, date: new Date(), description: 'Salary deposit', status: 'Completed' },
    { id: 2, type: 'Withdrawal', amount: -2000, date: new Date(), description: 'ATM withdrawal', status: 'Completed' },
    { id: 3, type: 'Transfer', amount: -1500, date: new Date(), description: 'Transfer to John Doe', status: 'Pending' },
    { id: 4, type: 'Loan Payment', amount: -3000, date: new Date(), description: 'Monthly loan payment', status: 'Completed' }
  ];
}
