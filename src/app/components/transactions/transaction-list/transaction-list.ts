import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header } from '../../layout/header/header';

@Component({
  selector: 'app-transaction-list',
  imports: [CommonModule, RouterModule, Header],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.css'
})
export class TransactionList {
  transactionTypes = [
    {
      title: 'Make Deposit',
      description: 'Add money to your account',
      icon: 'fas fa-plus-circle',
      color: 'success',
      route: '/transactions/deposit'
    },
    {
      title: 'Withdraw Funds',
      description: 'Take money from your account',
      icon: 'fas fa-minus-circle',
      color: 'danger',
      route: '/transactions/withdraw'
    },
    {
      title: 'Transfer Money',
      description: 'Send money to another account',
      icon: 'fas fa-exchange-alt',
      color: 'info',
      route: '/transactions/transfer'
    },
    {
      title: 'Pay Bills',
      description: 'Pay utilities and services',
      icon: 'fas fa-file-invoice-dollar',
      color: 'warning',
      route: '/transactions/bills'
    }
  ];
}
